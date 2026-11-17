'use client';

import { useEffect, useRef } from 'react';

const MAX_DPR = 2;
const VERTEX_SHADER = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uRes;
uniform float uTime, uDpr, uCell, uDot, uHover;
uniform vec2 uPtr;
uniform float uA, uB, uC, uD;
uniform vec3 uBg, uBase, uAccent, uHigh;

void main() {
  float cs = max(uCell, 2.0);
  vec2 ci = floor(gl_FragCoord.xy / cs);
  vec2 cc = (ci + 0.5) * cs;

  float x = cc.x / uDpr;
  float y = (uRes.y - cc.y) / uDpr;
  float w = uRes.x / uDpr;
  float h = uRes.y / uDpr;
  float t = uTime;

  float intensity = 0.0;
  float leanX = (uPtr.x - w * 0.5) * 0.5 * uHover;
  float leanY = (uPtr.y - h * 0.5) * 0.25 * uHover;
  float count = max(uA, 1.0);
  for (int n = 0; n < 8; n++) {
    float index = float(n);
    if (index >= count) break;
    float parallax = 1.0 - 0.6 * index / count;
    float centerX = w * 0.5 + leanX * parallax;
    float normX = (x - centerX) / (w * 0.75);
    float curveY = h * 0.3 + index * h * uB + leanY * parallax
      + normX * normX * h * uC * (1.0 + 0.08 * index);
    float thickness = (40.0 + (1.0 - min(abs(normX), 1.0)) * 25.0) * uD;
    float distance = abs(y - curveY);

    if (distance < thickness) {
      float brightness = 1.0 - distance / thickness;
      float waveX = sin(x * 0.015 + t);
      float waveY = cos(y * 0.02 + t);
      brightness = brightness * 0.7 + waveX * waveY * 0.3 * brightness;
      brightness *= max(0.0, 1.0 - pow(abs(normX), 2.5));
      brightness *= 0.45 + 0.55 * (0.5 + 0.5 * sin(t * 1.5 - index * 0.9));
      intensity = max(intensity, brightness);
    }
  }

  vec3 color = uBg;
  if (intensity > 0.02) {
    float side = uDot * intensity * uDpr;
    vec2 delta = abs(gl_FragCoord.xy - cc);
    float coverage = 1.0 - smoothstep(
      side * 0.5 - 1.0,
      side * 0.5 + 1.0,
      max(delta.x, delta.y)
    );
    vec3 ink = mix(uBase, uAccent, clamp(pow(intensity, 1.1), 0.0, 1.0));
    ink = mix(ink, uHigh, smoothstep(0.72, 1.0, intensity));
    color = mix(uBg, ink, coverage * clamp(intensity * 1.6, 0.0, 1.0));
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('PredictiveArcBackground shader:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function parseHexColor(hex: string): [number, number, number] {
  const value = hex.slice(1);
  return [
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  ];
}

export function PredictiveArcBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ targetX: 0.5, targetY: 0.5, x: 0.5, y: 0.5 });

  useEffect(() => {
    const trailMarks: Array<{ element: HTMLDivElement; timers: number[] }> = [];
    let lastTrailTime = 0;

    const handleSpotlightMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !spotlightRef.current || !backgroundRef.current) return;
      const scrollX = window.scrollX || window.pageXOffset || 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const pageX = event.clientX + scrollX;
      const pageY = event.clientY + scrollY;

      spotlightRef.current.style.left = `${pageX}px`;
      spotlightRef.current.style.top = `${pageY}px`;
      const header = document.querySelector('header');
      const isOverHeader = header && event.clientY <= header.getBoundingClientRect().bottom;
      spotlightRef.current.style.opacity = isOverHeader ? '0' : '1';

      const now = performance.now();
      if (isOverHeader || now - lastTrailTime < 100) return;
      lastTrailTime = now;

      if (trailMarks.length >= 16) {
        const oldest = trailMarks.shift();
        if (oldest) {
          oldest.timers.forEach((timer) => window.clearTimeout(timer));
          oldest.element.remove();
        }
      }

      const mark = document.createElement('div');
      mark.setAttribute('aria-hidden', 'true');
      mark.style.position = 'absolute';
      mark.style.left = `${pageX}px`;
      mark.style.top = `${pageY}px`;
      mark.style.width = '2.5rem';
      mark.style.height = '2.5rem';
      mark.style.borderRadius = '9999px';
      mark.style.background = 'radial-gradient(circle, rgba(37,99,235,0.28), transparent 72%)';
      mark.style.filter = 'blur(6px)';
      mark.style.transform = 'translate(-50%, -50%)';
      mark.style.opacity = '0.55';
      backgroundRef.current.appendChild(mark);

      const timers = [
        window.setTimeout(() => {
          mark.style.transition = 'opacity 1000ms ease-out';
          mark.style.opacity = '0';
        }, 1000),
        window.setTimeout(() => {
          mark.remove();
          const index = trailMarks.findIndex((trail) => trail.element === mark);
          if (index !== -1) trailMarks.splice(index, 1);
        }, 2000),
      ];
      trailMarks.push({ element: mark, timers });
    };

    window.addEventListener('pointermove', handleSpotlightMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handleSpotlightMove);
      trailMarks.forEach(({ element, timers }) => {
        timers.forEach((timer) => window.clearTimeout(timer));
        element.remove();
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
    });
    if (!gl) {
      console.error('PredictiveArcBackground: WebGL unavailable');
      return;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('PredictiveArcBackground link:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    if (!buffer) {
      gl.deleteProgram(program);
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = Object.fromEntries(
      [
        'uRes',
        'uTime',
        'uDpr',
        'uCell',
        'uDot',
        'uA',
        'uB',
        'uC',
        'uD',
        'uHover',
        'uPtr',
        'uBg',
        'uBase',
        'uAccent',
        'uHigh',
      ].map((name) => [name, gl.getUniformLocation(program, name)]),
    );
    const background = parseHexColor('#07030A');
    const base = parseHexColor('#1374DF');
    const accent = parseHexColor('#513BB5');
    const highlight = parseHexColor('#1309B5');
    let animationFrame = 0;
    let previousTime = performance.now();
    let clock = 0;

    const trackPointer = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const rect = canvas.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        pointerRef.current.targetX = 0.5;
        pointerRef.current.targetY = 0.5;
        return;
      }

      pointerRef.current.targetX = (event.clientX - rect.left) / rect.width;
      pointerRef.current.targetY = (event.clientY - rect.top) / rect.height;
    };
    const resetPointer = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        pointerRef.current.targetX = 0.5;
        pointerRef.current.targetY = 0.5;
      }
    };

    window.addEventListener('pointermove', trackPointer, { passive: true });
    window.addEventListener('pointerout', resetPointer);

    const render = (now: number) => {
      const delta = Math.min(0.05, (now - previousTime) / 1000);
      previousTime = now;
      clock = (clock + delta * 0.9 * (73 / 50)) % 6283;

      const pointer = pointerRef.current;
      const smoothing = 1 - Math.exp(-delta * 6);
      pointer.x += (pointer.targetX - pointer.x) * smoothing;
      pointer.y += (pointer.targetY - pointer.y) * smoothing;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);

      const pitch = Math.min(width, height) / dpr / 118;
      gl.uniform2f(uniforms.uRes, width, height);
      gl.uniform1f(uniforms.uTime, clock);
      gl.uniform1f(uniforms.uDpr, dpr);
      gl.uniform1f(uniforms.uCell, Math.max(2, pitch * dpr));
      gl.uniform1f(uniforms.uDot, pitch * 1.2 * 0.62);
      gl.uniform1f(uniforms.uA, 4);
      gl.uniform1f(uniforms.uB, 0.11);
      gl.uniform1f(uniforms.uC, 1.04);
      gl.uniform1f(uniforms.uD, 1.42);
      gl.uniform1f(uniforms.uHover, 2);
      gl.uniform2f(uniforms.uPtr, pointer.x * (width / dpr), pointer.y * (height / dpr));
      gl.uniform3f(uniforms.uBg, ...background);
      gl.uniform3f(uniforms.uBase, ...base);
      gl.uniform3f(uniforms.uAccent, ...accent);
      gl.uniform3f(uniforms.uHigh, ...highlight);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', trackPointer);
      window.removeEventListener('pointerout', resetPointer);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 w-full min-h-full h-full z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="spotlight-grid-pattern"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 4H4M4 4V0M4 4H8M4 4V8"
              fill="none"
              stroke="white"
              strokeOpacity="0.045"
            />
            <rect x="3" y="3" width="2" height="2" fill="white" fillOpacity="0.035" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spotlight-grid-pattern)" />
      </svg>
      <div
        ref={spotlightRef}
        className="absolute left-1/2 top-1/2 h-[15.625rem] w-[15.625rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.408)_0%,rgba(37,99,235,0.192)_38%,transparent_72%)] blur-xl transition-opacity duration-300 ease-out motion-reduce:transition-none"
      />
    </div>
  );
}

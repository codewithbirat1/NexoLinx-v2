'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PROCESS_HEADER, PROCESS_STEPS } from '@/constants/process';

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const stepItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;

    const trailMarks: Array<{ element: HTMLDivElement; timers: number[] }> = [];
    let lastTrailTime = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const bounds = section.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
      spotlight.style.opacity = '1';

      const now = performance.now();
      if (now - lastTrailTime < 100) return;
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
      mark.style.left = `${x}px`;
      mark.style.top = `${y}px`;
      mark.style.width = '3.5rem';
      mark.style.height = '3.5rem';
      mark.style.borderRadius = '9999px';
      mark.style.background = 'radial-gradient(circle, rgba(37,99,235,0.28), transparent 72%)';
      mark.style.filter = 'blur(6px)';
      mark.style.transform = 'translate(-50%, -50%)';
      mark.style.opacity = '0.5875';
      mark.style.pointerEvents = 'none';
      section.appendChild(mark);

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

    const handlePointerLeave = () => {
      spotlight.style.opacity = '0';
    };

    section.addEventListener('pointermove', handlePointerMove, { passive: true });
    section.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      trailMarks.forEach(({ element, timers }) => {
        timers.forEach((timer) => window.clearTimeout(timer));
        element.remove();
      });
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const listEl = listRef.current;
        if (!listEl) return;

        const rect = listEl.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;

        // Total scrollable height of the list relative to viewport center
        const totalHeight = rect.height;
        const currentProgress = (viewportCenter - rect.top) / totalHeight;
        const clampedProgress = Math.max(0, Math.min(1, currentProgress));

        // Update fill line directly without triggering re-render on every pixel
        if (fillLineRef.current) {
          fillLineRef.current.style.transform = `scaleY(${clampedProgress})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // IntersectionObserver to determine active step
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepItemRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStepIndex(index);
            }
          });
        },
        {
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our Process, Your Advantage"
      className="relative w-full bg-black text-white pt-2 sm:pt-4 md:pt-8 pb-2 sm:pb-4 md:pb-8"
    >
      {/* Subtle radial ambient blue glow behind header and active content */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] sm:h-[550px] rounded-full blur-[140px] opacity-25 z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(19, 116, 223, 0.4) 0%, rgba(15, 101, 197, 0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(240px 220px at 14% 20%, rgba(19,116,223,0.12) 0%, rgba(19,116,223,0.05) 45%, transparent 100%), radial-gradient(280px 240px at 86% 48%, rgba(19,116,223,0.10) 0%, rgba(19,116,223,0.04) 45%, transparent 100%), radial-gradient(240px 220px at 24% 82%, rgba(19,116,223,0.10) 0%, rgba(19,116,223,0.04) 45%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute left-0 top-0 z-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.408)_0%,rgba(37,99,235,0.192)_38%,transparent_72%)]  opacity-0 transition-opacity duration-300 ease-out motion-reduce:transition-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Header Introduction */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 sm:mb-10 md:mb-14">
          {/* Eyebrow */}
          <span className="text-xs sm:text-[13px] md:text-sm font-semibold tracking-[0.12em] uppercase text-[#1374DF] mb-3 sm:mb-4">
            {PROCESS_HEADER.eyebrow}
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.12] max-w-3xl">
            {PROCESS_HEADER.title}
          </h2>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#A0A0A0] font-normal tracking-tight mt-4 sm:mt-5 max-w-2xl leading-relaxed">
            {PROCESS_HEADER.description}
          </p>
        </div>

        {/* Two-Column Grid: 50/50 Desktop with items-start. No overflow-hidden on ancestors */}
        <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: List of Steps with ONE continuous vertical progress line */}
          <div ref={listRef} className="relative flex flex-col">
            {/* ONE continuous vertical line running through all steps */}
            <div
              className="absolute left-[38px] sm:left-[44px] top-0 bottom-16 w-0.5 bg-[#222222] z-0 pointer-events-none"
              aria-hidden="true"
            >
              {/* Blue fill element that grows from top down matching scroll progress */}
              <div
                ref={fillLineRef}
                className="w-full h-full bg-[#1374DF] origin-top transition-transform ease-linear shadow-[0_0_8px_rgba(19,116,223,0.8)] motion-reduce:transition-none"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>

            {/* Steps list */}
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;
              const isFilled = activeStepIndex >= index;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepItemRefs.current[index] = el;
                  }}
                  className="relative flex items-start min-h-[42vh] sm:min-h-[50vh] last:min-h-0 last:pb-12 scroll-mt-24"
                >
                  {/* Step Number Dot / Label sitting on the line */}
                  <div className="relative z-10 flex w-[48px] shrink-0 items-start justify-start pt-0 sm:w-[56px]">
                    <span
                      className={`rounded bg-black px-1.5 text-sm font-bold leading-none tracking-wider transition-colors duration-300 select-none sm:text-base ${
                        isFilled ? 'text-[#1374DF]' : 'text-[#666666]'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pl-4 pt-0 sm:pl-6">
                    {/* Step Title: Full white when active, dimmed gray when inactive */}
                    <h3
                      className={`text-2xl font-bold leading-none tracking-tight transition-colors duration-300 sm:text-3xl md:text-4xl ${
                        isActive ? 'text-white' : 'text-[#555555]'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Subtitle: Brighter blue when active, dimmed when inactive */}
                    <p
                      className={`text-sm sm:text-base font-medium mt-1.5 transition-colors duration-300 ${
                        isActive ? 'text-[#1374DF]' : 'text-[#444444]'
                      }`}
                    >
                      {step.subtitle}
                    </p>

                    {/* Step Description: Visible and brighter when active, dimmed when inactive */}
                    <p
                      className={`text-sm sm:text-base mt-4 sm:mt-5 leading-relaxed transition-colors duration-300 max-w-lg ${
                        isActive ? 'text-[#DDDDDD]' : 'text-[#444444]'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Mobile Only: Inline graphic card placed beneath text */}
                    <div className="lg:hidden mt-8 w-full  overflow-hidden border border-[#222222] bg-[#0A0A0C] shadow-2xl aspect-[4/3] relative">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky in place while left column scrolls. Fixed size, never moves */}
          <div className="hidden w-full self-start sticky top-24 lg:block">
            <div className="relative w-full aspect-[4/3]  overflow-hidden border border-[#222222] bg-[#0A0A0C] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Subtle inner blue border accent */}
              <div
                className="absolute inset-0 pointer-events-none  border border-[#1374DF]/20 z-20"
                aria-hidden="true"
              />

              {/* Stack of all step images cross-fading */}
              {PROCESS_STEPS.map((step, index) => {
                const isCurrent = activeStepIndex === index;

                return (
                  <div
                    key={`sticky-img-${step.number}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                      isCurrent ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-[1.02]'
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority={index <= 1}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

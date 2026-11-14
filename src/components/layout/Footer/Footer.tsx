'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import TechText from '@/components/TechText';
import {
  FOOTER_BIO,
  FOOTER_NAV_COLUMNS,
  FOOTER_LEGAL,
  FOOTER_SOCIALS,
} from '@/constants/footer';

import { SocialIcon } from './FooterSocialIcons';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const spotlight = spotlightRef.current;
    if (!footer || !spotlight) return;

    const trailMarks: Array<{ element: HTMLDivElement; timers: number[] }> = [];
    let lastTrailTime = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const bounds = footer.getBoundingClientRect();
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
      footer.appendChild(mark);

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

    footer.addEventListener('pointermove', handlePointerMove, { passive: true });
    footer.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      footer.removeEventListener('pointermove', handlePointerMove);
      footer.removeEventListener('pointerleave', handlePointerLeave);
      trailMarks.forEach(({ element, timers }) => {
        timers.forEach((timer) => window.clearTimeout(timer));
        element.remove();
      });
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-label="Site footer"
      className="w-full bg-black text-white relative border-t border-white/10 overflow-hidden"
    >
      {/* Subtle radial ambient blue glow behind footer content */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] rounded-full blur-[140px] opacity-25 z-0"
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
        className="pointer-events-none absolute left-0 top-0 z-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.408)_0%,rgba(37,99,235,0.192)_38%,transparent_72%)] opacity-0 transition-opacity duration-300 ease-out motion-reduce:transition-none"
        aria-hidden="true"
      />

      {/* =========================================================================
       * MASSIVE BRAND WORDMARK
       * ========================================================================= */}
      <div className="w-full overflow-hidden text-white flex justify-center items-center py-4 sm:py-3 relative z-10">
        <div
          className="w-full relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] ml-20 "
          style={{ width: '100%', height: 'clamp(120px, 16vw, 240px)', position: 'relative' }}
        >
          <TechText
            text="NexoLinx"
            fontWeight={800}
            fontSize={500}
            reveal="letter"
            dashLength={4}
            dashGap={3}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily="'Inter Tight', sans-serif"
            letterSpacing={-0.01}
            accentColor="currentColor"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="currentColor"
            align="left"
            draggable
            sweep
            style={{}}
          />
        </div>
      </div>

      {/* =========================================================================
       * 3. NAVIGATION COLUMNS & ACCREDITATIONS
       * ========================================================================= */}
      <div className="site-container pb-14 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pt-4">
          {/* Column 1: Brand Statement & Badges (5 cols on large screens) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-sm sm:max-w-md">
              {FOOTER_BIO.text}
            </p>

          </div>

          {/* Column 2: Company Links (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-base font-bold text-white tracking-tight mb-4 sm:mb-5">
              {FOOTER_NAV_COLUMNS[0].title}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {FOOTER_NAV_COLUMNS[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white tracking-tight mb-4 sm:mb-5">
              {FOOTER_NAV_COLUMNS[1].title}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {FOOTER_NAV_COLUMNS[1].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white tracking-tight mb-4 sm:mb-5">
              {FOOTER_NAV_COLUMNS[2].title}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {FOOTER_NAV_COLUMNS[2].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================================
         * 4. BOTTOM LEGAL & SOCIAL BAR
         * ========================================================================= */}
        <div className="border-t border-white/10 pt-2 sm:pt-4 mt-4 sm:mt-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Copyright notice */}
          <p className="text-xs sm:text-sm text-neutral-500 tracking-tight text-center md:text-left order-2 md:order-1">
            {FOOTER_LEGAL.copyright}
          </p>

          {/* Privacy Policy link */}
          <div className="order-3 md:order-2">
            <Link
              href={FOOTER_LEGAL.privacyPolicy.href}
              className="text-xs sm:text-sm text-neutral-500 hover:text-white hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm"
            >
              {FOOTER_LEGAL.privacyPolicy.label}
            </Link>
          </div>

          {/* Circular Social Media Icons */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 order-1 md:order-3"
            aria-label="Social media channels"
          >
            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-[#1374DF] hover:bg-[#1374DF]/20 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
              >
                <SocialIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

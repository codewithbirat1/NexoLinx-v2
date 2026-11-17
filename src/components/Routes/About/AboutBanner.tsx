'use client';

import React from 'react';
import Link from 'next/link';
import { ABOUT_BANNER } from '@/constants/about';

export function AboutBanner() {
  return (
    <section className="relative w-full bg-[#1374DF] text-white py-20 md:py-28 overflow-hidden">
      {/* Subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white mb-6 backdrop-blur-sm">
            {ABOUT_BANNER.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-8 [text-wrap:balance]">
            {ABOUT_BANNER.headline}
          </h2>
          <div className="max-w-2xl">
            <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 [text-wrap:pretty]">
              {ABOUT_BANNER.description}
            </p>
            <Link
              href={ABOUT_BANNER.ctaHref}
              className="inline-flex items-center text-base sm:text-lg font-semibold text-white underline underline-offset-8 decoration-white/60 hover:decoration-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              {ABOUT_BANNER.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

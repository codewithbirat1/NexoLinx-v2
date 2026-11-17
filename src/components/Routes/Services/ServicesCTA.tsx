'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_PAGE_CTA } from '@/constants/services';

export function ServicesCTA() {
  return (
    <section
      aria-label="Ready to start your project"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 90% 70% at 50% 100%, rgba(19,116,223,0.32), transparent 75%)',
        backgroundColor: '#04060A',
      }}
    >
      <div className="site-container relative z-10 text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-4 tracking-normal">
          {SERVICES_PAGE_CTA.tagline}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
          {SERVICES_PAGE_CTA.headline}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mx-auto [text-wrap:pretty]">
          {SERVICES_PAGE_CTA.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={SERVICES_PAGE_CTA.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1374DF] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {SERVICES_PAGE_CTA.primaryCta.label}
          </Link>
          <Link
            href={SERVICES_PAGE_CTA.secondaryCta.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors group py-3 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
          >
            <span>{SERVICES_PAGE_CTA.secondaryCta.label}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

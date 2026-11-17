'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_PAGE_HERO } from '@/constants/services';

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1A1A1A] bg-black pt-4 pb-4 sm:pt-8  sm:pb-8 md:pt-12 md:pb-12">
      {/* Subtle ambient brand glow in upper area */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-40 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[140px] opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(19, 116, 223, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 80%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Breadcrumb matching About / Careers */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs text-[#888888]"
        >
          <ol className="flex flex-wrap items-center gap-2 p-0 list-none">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#1374DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
              >
                {SERVICES_PAGE_HERO.breadcrumb.homeLabel}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li>
              <span className="text-white" aria-current="page">
                {SERVICES_PAGE_HERO.breadcrumb.servicesLabel}
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Header Row: Asymmetric Stage Composition */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Asymmetrical Typography Block */}
          <div className="lg:col-span-7">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1374DF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1374DF]" />
              {SERVICES_PAGE_HERO.badge}
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[58px] lg:leading-[1.08] [text-wrap:balance]">
              {SERVICES_PAGE_HERO.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg [text-wrap:pretty]">
              {SERVICES_PAGE_HERO.description}
            </p>

            {/* Trust Anchor Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10 text-xs text-[#888888]">
              <span className="font-semibold uppercase tracking-wider text-[#1374DF]">
                Core Focus
              </span>
              {SERVICES_PAGE_HERO.coreFocusList.map((focus, idx) => (
                <React.Fragment key={focus}>
                  {idx > 0 && <span>•</span>}
                  <span>{focus}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Discovery Action Callout Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#0A0D14] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(19,116,223,0.15),transparent_70%)]"
              />
              <div className="relative z-10 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#1374DF]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E8F2FF] border border-[#1374DF]/30 mb-4">
                    {SERVICES_PAGE_HERO.calloutCard.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white sm:text-2xl leading-snug">
                    {SERVICES_PAGE_HERO.calloutCard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                    {SERVICES_PAGE_HERO.calloutCard.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <Link
                    href={SERVICES_PAGE_HERO.calloutCard.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1374DF] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {SERVICES_PAGE_HERO.calloutCard.primaryCta.label}
                  </Link>
                  <Link
                    href={SERVICES_PAGE_HERO.calloutCard.secondaryCta.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A1A1AA] hover:text-white transition-colors py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                  >
                    <span>{SERVICES_PAGE_HERO.calloutCard.secondaryCta.label}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

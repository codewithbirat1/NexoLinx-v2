'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_HERO } from '@/constants/about';

export function AboutHero() {
  return (
    <section className="relative w-full bg-black pt-8 pb-8 md:pt-16 md:pb-16 border-b border-[#1A1A1A]">
      {/* Background subtle field treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(19,116,223,0.12),transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Top Header Row: Asymmetric Stage Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#1374DF] mb-4 tracking-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1374DF]" />
              {ABOUT_HERO.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight [text-wrap:balance]">
              {ABOUT_HERO.headline}
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed mb-6 [text-wrap:pretty]">
              {ABOUT_HERO.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={ABOUT_HERO.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1374DF] text-white text-sm font-medium hover:bg-[#0F65C5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-black"
              >
                {ABOUT_HERO.primaryCta.label}
              </Link>
              <Link
                href={ABOUT_HERO.secondaryCta.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors group py-3 px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
              >
                {ABOUT_HERO.secondaryCta.label}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bento Grid: Stats + Media Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: Stat 1 + Visual Signature */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* Stat Box 1 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {ABOUT_HERO.stats[0].value}
              </span>
              <p className="text-sm font-medium text-[#A1A1AA] mt-2">
                {ABOUT_HERO.stats[0].label}
              </p>
              <span className="inline-block mt-4 text-xs text-[#888888]">
                {ABOUT_HERO.stats[0].subtext}
              </span>
            </div>

            {/* Visual Signature Card */}
            <div className="relative rounded-2xl p-8 bg-[#090D15] border border-[#1374DF]/30 overflow-hidden min-h-[220px] flex flex-col justify-end group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(19,116,223,0.22),transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-medium text-[#1374DF] mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Digital Engineering Quality</span>
                </div>
                <p className="text-white text-lg font-medium leading-snug">
                  High-converting digital architecture built to perform and outrank.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stat Boxes Top + 98% Stat & Team Visual Bottom */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/20 transition-colors">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                  {ABOUT_HERO.stats[1].value}
                </span>
                <p className="text-sm font-medium text-[#A1A1AA] mt-2">
                  {ABOUT_HERO.stats[1].label}
                </p>
                <span className="inline-block mt-4 text-xs text-[#888888]">
                  {ABOUT_HERO.stats[1].subtext}
                </span>
              </div>

              <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/20 transition-colors">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                  {ABOUT_HERO.stats[2].value}
                </span>
                <p className="text-sm font-medium text-[#A1A1AA] mt-2">
                  {ABOUT_HERO.stats[2].label}
                </p>
                <span className="inline-block mt-4 text-xs text-[#888888]">
                  {ABOUT_HERO.stats[2].subtext}
                </span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 h-full">
              <div className="sm:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1374DF] tracking-tight tabular-nums">
                    {ABOUT_HERO.satisfactionStat.percentage}
                  </span>
                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed [text-wrap:pretty]">
                    {ABOUT_HERO.satisfactionStat.label}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-xs text-[#888888]">
                    Verified Client Metric
                  </span>
                </div>
              </div>

              {/* Leadership / Team Visual */}
              <div className="sm:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 min-h-[220px] bg-[#111]">
                <Image
                  src="/assets/team/ceo.avif"
                  alt="Nexo Linx Leadership"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-xs text-[#1374DF] font-medium block mb-1">
                    Leadership &amp; Execution
                  </span>
                  <p className="text-sm text-white font-medium">
                    Hands-on digital architects &amp; growth strategists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

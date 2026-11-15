'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_WORK_TYPES } from '@/constants/about';

export function AboutWorkTypes() {
  return (
    <section className="relative w-full bg-[#F5F6F8] text-[#111111] py-20 md:py-28">
      <div className="site-container">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
              {ABOUT_WORK_TYPES.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.15] [text-wrap:balance]">
              {ABOUT_WORK_TYPES.headline}
            </h2>
          </div>
          <p className="max-w-md text-[#555555] text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            {ABOUT_WORK_TYPES.subheading}
          </p>
        </div>

        {/* 3 Column Cards Grid with clean surface separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ABOUT_WORK_TYPES.cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-white rounded-2xl p-7 lg:p-8 border border-[#E2E4E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-[#CBD0D8] transition-all relative overflow-hidden"
            >
              <div>
                {/* Header inside card: Tag + Icon pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#EEF2F6] text-[#333333]">
                    {card.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1374DF]/10 flex items-center justify-center text-[#1374DF] group-hover:bg-[#1374DF] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3 leading-snug group-hover:text-[#1374DF] transition-colors [text-wrap:balance]">
                  {card.title}
                </h3>
                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed mb-8 [text-wrap:pretty]">
                  {card.description}
                </p>
              </div>

              {/* Metrics footer inside card */}
              <div className="pt-6 border-t border-[#EEF0F4] grid grid-cols-2 gap-4">
                {card.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <span className="block text-xs text-[#777777] font-medium mb-1">
                      {metric.label}
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-[#111111] tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

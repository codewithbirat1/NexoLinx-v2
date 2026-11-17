'use client';

import React from 'react';
import { SERVICES_PAGE_WHY } from '@/constants/services';

export function ServicesWhy() {
  return (
    <section
      aria-label="Why choose Nexo Linx as your digital partner"
      className="w-full bg-black py-20 md:py-28 text-white border-t border-[#1A1A1A]"
    >
      <div className="site-container">
        {/* Section Header matching standard Nexo Linx dark sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
              {SERVICES_PAGE_WHY.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              {SERVICES_PAGE_WHY.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#888888] leading-relaxed [text-wrap:pretty]">
            {SERVICES_PAGE_WHY.subheading}
          </p>
        </div>

        {/* 6 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_PAGE_WHY.cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-[#0B0D13] p-7 transition-all duration-300 hover:border-[#1374DF]/40 hover:bg-[#0E121C]"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1374DF]">
                  {card.tag}
                </span>
                <span className="h-px flex-1 bg-white/5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#1374DF] transition-colors leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

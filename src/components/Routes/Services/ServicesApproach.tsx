'use client';

import React from 'react';
import { SERVICES_PAGE_APPROACH } from '@/constants/services';

export function ServicesApproach() {
  return (
    <section
      aria-label="What sets our approach apart"
      className="w-full bg-[#FDFCF9] py-16 sm:py-20 lg:py-24 text-[#0A0A0B] border-t border-[#EAE8E0]"
    >
      <div className="site-container">
        {/* Section Header matching standard Nexo Linx light sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
              {SERVICES_PAGE_APPROACH.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0B] leading-[1.12] [text-wrap:balance]">
              {SERVICES_PAGE_APPROACH.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#555555] leading-relaxed [text-wrap:pretty]">
            {SERVICES_PAGE_APPROACH.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_PAGE_APPROACH.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold text-[#1374DF]">
                    {pillar.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1374DF]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#555555]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ABOUT_REASONS } from '@/constants/about';

export function AboutReasons() {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 border-b border-[#1A1A1A]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl leading-[1.12] [text-wrap:balance]">
            {ABOUT_REASONS.headline}
          </h2>
          <p className="max-w-md text-[#888888] text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            {ABOUT_REASONS.subheading}
          </p>
        </div>

        {/* Numbered Rows List with hairline dividers */}
        <div className="divide-y divide-[#222222] border-y border-[#222222]">
          {ABOUT_REASONS.reasons.map((item, idx) => (
            <div
              key={idx}
              className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start transition-colors hover:bg-white/[0.02] px-2 sm:px-4 rounded-lg"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-sm sm:text-base font-mono font-medium text-[#666666] group-hover:text-[#1374DF] transition-colors tabular-nums">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#1374DF] transition-colors [text-wrap:balance]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

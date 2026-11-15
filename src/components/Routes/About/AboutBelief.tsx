'use client';

import React from 'react';
import { ABOUT_BELIEF } from '@/constants/about';

export function AboutBelief() {
  return (
    <section className="relative w-full bg-black py-20 md:py-28 border-b border-[#1A1A1A]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Big Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance]">
              {ABOUT_BELIEF.headline}
            </h2>
          </div>

          {/* Right Column: Narrative Paragraphs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {ABOUT_BELIEF.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed [text-wrap:pretty]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

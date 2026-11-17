'use client';

import React from 'react';
import { HERO_SLIDES } from '@/constants/hero';

interface HeroTabsProps {
  activeIndex: number;
  onSelectTab: (index: number) => void;
  durationMs: number;
  isPaused: boolean;
}

export function HeroTabs({
  activeIndex,
  onSelectTab,
  durationMs,
  isPaused,
}: HeroTabsProps) {
  return (
    <div
      className="hero-tabs relative z-20 mx-auto flex w-full max-w-[760px] items-center justify-center gap-2 px-2 sm:gap-10 sm:px-4 md:gap-14"
      role="tablist"
      aria-label="Hero feature tabs"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`${slide.tabNumber} ${slide.tabLabel}`}
            aria-controls={`hero-panel-${slide.id}`}
            id={`hero-tab-${slide.id}`}
            onClick={() => onSelectTab(index)}
            className={`flex-1 pb-2.5 sm:pb-3 relative text-left group transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-t-sm ${
              isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
            }`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-2.5">
              <span
                className={`text-[11px] sm:text-sm font-bold tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-[#1374DF]' : 'text-[#888888] group-hover:text-white'
                }`}
              >
                {slide.tabNumber}
              </span>
              <span
                className={`hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide transition-colors duration-200 sm:inline sm:text-sm ${
                  isActive ? 'text-white' : 'text-[#A0A0A5] group-hover:text-white'
                }`}
              >
                {slide.tabLabel}
              </span>
            </div>

            {/* Bottom Progress Track */}
            <div className="w-full h-[2px] bg-[#222226] relative overflow-hidden rounded-full">
              {isActive && (
                <div
                  key={`${activeIndex}-${isPaused}`}
                  className="h-full bg-[#1374DF] shadow-[0_0_8px_rgba(19,116,223,0.8)]"
                  style={{
                    animation: `heroTabFill ${durationMs}ms linear forwards`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

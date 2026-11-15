'use client';

import React from 'react';
import {
  ShieldCheck,
  Users,
  Workflow,
  Zap,
  Target,
  Award,
  LucideIcon,
} from 'lucide-react';
import { ABOUT_DIFFERENTIATORS } from '@/constants/about';

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Users,
  Workflow,
  Zap,
  Target,
  Award,
};

export function AboutDifferentiators() {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-32">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
                THE NEXO LINX ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6 [text-wrap:balance]">
                {ABOUT_DIFFERENTIATORS.headline}
              </h2>
              <p className="text-[#888888] text-base leading-relaxed [text-wrap:pretty]">
                {ABOUT_DIFFERENTIATORS.subheading}
              </p>
            </div>

            {/* Emblem Card */}
            <div className="mt-12 lg:mt-20 p-7 rounded-2xl border border-white/10 bg-[#0B0F19] relative overflow-hidden group">
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1374DF] flex items-center justify-center text-white font-bold text-xl">
                  NL
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Standard of Excellence</h4>
                  <p className="text-xs text-[#888888]">Built for performance and reliability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {ABOUT_DIFFERENTIATORS.items.map((item, idx) => {
              const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-[#1374DF]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1374DF] mb-5 group-hover:bg-[#1374DF] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1374DF] transition-colors [text-wrap:balance]">
                      {item.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed [text-wrap:pretty]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { TOOL_ICONS } from '@/constants/hero';

export function HeroBadge() {
  return (
    <div className="trusted-craft hidden lg:flex relative z-10 mx-auto w-fit max-w-full items-center gap-1 rounded-full border border-white/10 bg-black/80   transition-all duration-300 sm:gap-3 sm:p-1.5">
      {/* Icon + Label Container */}
      <div className="flex min-w-0 items-center  sm:gap-1 ml-1">
        {/* Shield Icon Box */}
        <div className="power-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#1374DF] shadow-sm shadow-[#1374DF]/30">
          <Image
            src="/assets/hero/sheild.svg"
            alt="Shield"
            width={20}
            height={20}
            className="w-4 h-4 brightness-200 invert"
          />
        </div>

        {/* Text */}
        <p className="text-center text-[10px] font-normal leading-tight tracking-tight text-white sm:whitespace-nowrap sm:text-left sm:text-[15px]">
          <span className="sm:hidden">Trusted by <span className="font-semibold text-white">10k+</span> founders</span>
          <span className="hidden sm:inline">
            Trusted by startups to craft <span className="font-semibold text-white">10k+</span> designs with
          </span>
        </p>
      </div>

      {/* Tool Icons Cluster with Overlap */}
      <div className="ml-1 hidden items-center -space-x-2 sm:flex sm:-space-x-2.5 cursor-pointer">
        {TOOL_ICONS.map((tool, idx) => (
          <div
            key={tool.name}
            title={tool.name}
            style={{ zIndex: TOOL_ICONS.length - idx }}
            className="icon-box shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1e1e24] border-[1.5px] border-[#0D0D0C] overflow-hidden transition-transform duration-200 hover:scale-115 hover:z-30 hover:border-[#1374DF]"
          >
            <Image
              src={tool.src}
              alt={tool.name}
              width={32}
              height={32}
              className="object-contain w-full h-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

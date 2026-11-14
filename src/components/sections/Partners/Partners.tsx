'use client';

import React from 'react';
import Image from 'next/image';
import { PARTNER_LOGOS } from '@/constants/hero';

export function Partners() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      id="partners"
      aria-label="Trusted Partners"
      className="relative w-full bg-black pt-8 pb-10  overflow-hidden"
    >
      <div className="site-container">
        <p className="text-center text-xs sm:text-[13px] font-medium tracking-[0.08em] uppercase text-[#888888]">
          Trusted by Industry Leaders &amp; Fast-Growing Startups
        </p>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden mt-7">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center gap-6 py-2 sm:gap-10 md:gap-14">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale contrast-125 hover:grayscale-0 shrink-0 px-2"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-10 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


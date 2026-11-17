'use client';

import React from 'react';
import Image from 'next/image';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-0" aria-hidden="true">
      {/* Radiant ambient glow anchored behind heading and bubble */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] sm:w-[900px] sm:h-[650px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(19, 116, 223, 0.35) 0%, rgba(15, 101, 197, 0.15) 45%, transparent 70%)',
        }}
      />

      {/* Floating 3D Dark Glassmorphic Bubble on Left */}
      <div className="absolute left-[5%]  w-[320px] sm:w-[440px] md:w-[500px] aspect-square pointer-events-none opacity-85 z-0 animate-hero-float">
        <Image
          src="/assets/hero/home-bubble.webp"
          alt=""
          width={500}
          height={493}
          priority
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* 4-point Star graphic positioned near bottom-left of hero */}
      <div className="absolute left-[3%] sm:left-[8%] lg:left-[14%] bottom-[60px] sm:bottom-[75px] w-[50px] sm:w-[65px] md:w-[75px] aspect-square pointer-events-none z-10 animate-pulse duration-[3000ms]">
        <Image
          src="/assets/hero/hero-star.svg"
          alt=""
          width={75}
          height={80}
          className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(19,116,223,0.6)]"
        />
      </div>
    </div>
  );
}


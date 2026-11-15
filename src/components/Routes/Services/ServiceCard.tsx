'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ServiceCardData } from '@/constants/services';

interface ServiceCardProps {
  service: ServiceCardData;
  isActive: boolean;
  onMouseEnter: () => void;
  activeBackgroundId: string;
}

export function ServiceCard({
  service,
  isActive,
  onMouseEnter,
  activeBackgroundId,
}: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      onMouseEnter={onMouseEnter}
      className={`group relative flex min-h-[112px] w-full items-center justify-between overflow-hidden rounded-none px-4 py-5 transition-all duration-300 ease-out xs:min-h-[120px] sm:min-h-[140px] sm:px-6 md:min-h-[155px] md:px-8 lg:px-10 ${
        isActive
          ? 'text-white'
          : 'bg-transparent text-[#121212] hover:text-black'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId={activeBackgroundId}
          className="absolute inset-0 z-0 rounded-none bg-[#141416] shadow-xl shadow-black/20"
          transition={{
            type: 'tween',
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden="true"
        />
      )}

      {/* Background 3D Graphic Mark */}
      <div
        className={`pointer-events-none select-none absolute right-14 top-1/2 h-24 w-24 -translate-y-1/2 rotate-45 transition-all duration-300 sm:right-16 sm:h-32 sm:w-32 md:right-20 md:h-40 md:w-40 lg:right-24 lg:h-44 lg:w-44 ${
          isActive
            ? 'opacity-85 scale-100'
            : 'opacity-40 sm:opacity-50 scale-65 group-hover:opacity-85 group-hover:scale-100'
        }`}
        aria-hidden="true"
      >
        <Image
          src={
            isActive
              ? '/assets/services/service-mark-dark.png'
              : '/assets/services/service-mark-light.png'
          }
          alt=""
          width={140}
          height={140}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Left: Category Label & Service Title */}
      <div className="relative z-10 flex max-w-[calc(100%-56px)] flex-col items-start justify-center pr-2 sm:max-w-[calc(100%-72px)] sm:pr-4">
        <span
          className={`text-[11px] leading-snug tracking-[0.06em] uppercase transition-colors duration-200 xs:text-xs sm:text-sm md:text-xs lg:text-sm ${
            isActive ? 'text-white/80' : 'text-[#555555]'
          }`}
        >
          {service.category}
        </span>
        <h3
          className={`mt-1.5 text-lg font-bold leading-tight tracking-tight transition-colors duration-200 xs:text-xl sm:mt-2 sm:text-2xl md:text-[26px] lg:text-[30px] xl:text-[34px] ${
            isActive ? 'text-white' : 'text-[#141414]'
          }`}
        >
          {service.title}
        </h3>
      </div>

      {/* Right: Circular Arrow Action Button */}
      <div
        className={`relative z-10 shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
          isActive
            ? 'bg-[#2A2A2E] border-white/10 text-white shadow-md'
            : 'bg-white border-[#E5E5DE] text-[#222222] group-hover:border-[#1374DF] group-hover:text-[#1374DF] group-hover:scale-105'
        }`}
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H9M17 7V15"
          />
        </svg>
      </div>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center  transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-md ${className}`}
      aria-label="Nexo Linx Homepage"
    >
      {/* Official Geometric Hexagon Mark */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
        <Image
          src="/brand/nexolinx-logo.svg"
          alt="Nexo Linx Emblem"
          width={55}
          height={55}
          priority
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-250"
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className="font-sans text-[21px] font-extrabold tracking-tight text-[#1374DF] flex items-center gap-1 leading-none sm:text-2xl lg:text-[26px]">
          NexoLinx
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase text-[#888888] font-medium mt-1 leading-none">
            Build • Optimize • Outrank
          </span>
        )}
      </div>
    </Link>
  );
}


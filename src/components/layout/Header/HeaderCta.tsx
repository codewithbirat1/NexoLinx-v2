'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface HeaderCtaProps {
  className?: string;
  onClick?: () => void;
}

export function HeaderCta({ className = '', onClick }: HeaderCtaProps) {
  return (
    <Link
      href="#contact"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-transparent border border-white/80 hover:border-[#1374DF] hover:bg-[#1374DF] transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-sm hover:shadow-[0_0_24px_rgba(19,116,223,0.4)] active:scale-[0.98] ${className}`}
    >
      <span>Work with us</span>
      <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}


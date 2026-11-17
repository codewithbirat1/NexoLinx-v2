'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTACT_HERO  } from '@/constants/contact';

export function ContactHeader() {
  return (
    <section className="relative w-full bg-black pt-8 pb-2 md:pt-16 md:pb-4 border-b border-[#1A1A1A]">
      {/* Background subtle field treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(19,116,223,0.12),transparent_70%)] pointer-events-none" />
           
      <div className="site-container relative z-10">
        <nav
            className="mb-3 text-xs text-[var(--color-text-secondary)]"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-2 p-0 list-none">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-[var(--color-brand-light)]"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-200 hover:text-[var(--color-brand-light)]"
                >
                  Contact
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
            </ol>
          </nav>
        {/* Top Header Row: Asymmetric Stage Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#1374DF] mb-4 tracking-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1374DF]" />
              {CONTACT_HERO.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight [text-wrap:balance]">
              {CONTACT_HERO.headline}
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed mb-6 [text-wrap:pretty]">
              {CONTACT_HERO.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={CONTACT_HERO.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1374DF] text-white text-sm font-medium hover:bg-[#0F65C5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-black"
              >
                {CONTACT_HERO.primaryCta.label}
              </Link>
              <Link
                href={CONTACT_HERO.secondaryCta.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors group py-3 px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
              >
                {CONTACT_HERO.secondaryCta.label}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

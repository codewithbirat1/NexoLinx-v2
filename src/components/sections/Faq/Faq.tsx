'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_HEADER, FAQ_ITEMS } from '@/constants/faq';

export function Faq() {
  // First item open by default as shown in the reference image
  const [openItemId, setOpenItemId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-black py-4 text-white sm:py-6 md:py-10 lg:py-14 "
    >
      {/* Subtle brand glow in background */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-[420px] w-[500px] rounded-full blur-[160px] opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(19, 116, 223, 0.4) 0%, rgba(15, 101, 197, 0.15) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Heading, Description, CTA and Rating Badge */}
          <div className="flex flex-col items-start lg:col-span-5 lg:sticky lg:top-28">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#E8F2FF] sm:text-[13px] text-[var(--color-brand-primary)]">
              {FAQ_HEADER.eyebrow}
            </span>

            {/* Main Section Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl lg:text-[50px] lg:leading-[1.12]">
              {FAQ_HEADER.title}
            </h2>

            {/* Supporting Description */}
            <p className="mt-5 max-w-[440px] text-sm leading-relaxed text-[#A0A0A0] sm:text-base">
              {FAQ_HEADER.description}
            </p>

            {/* Actions: Book a Free Call + Clutch Rating Pill */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Pill Button */}
              <Link
                href={FAQ_HEADER.buttonHref}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[var(--color-brand-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>{FAQ_HEADER.buttonLabel}</span>
                <span aria-hidden="true" className="text-base leading-none">
                  ↗
                </span>
              </Link>

              {/* Clutch Review Badge */}
              <div
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#101014] px-3.5 py-2 transition-colors hover:border-white/20"
                title="Clutch 5.0 Star Rating - 8 Reviews"
                aria-label="Clutch 5 Star Rating with 8 Reviews"
              >
                {/* Clutch Logo Mark */}
                <div className="flex size-7 items-center justify-center rounded-full bg-[#122238] font-black text-[#1374DF] text-sm select-none">
                  C
                </div>
                {/* Stars and Reviews */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-3 text-[#FF3D2E] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase mt-0.5">
                    {FAQ_HEADER.reviewCount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Rows */}
          <div className="flex flex-col space-y-3.5 sm:space-y-4 lg:col-span-7">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openItemId === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#1374DF] bg-[#0E1524]/60 shadow-[0_0_30px_rgba(19,116,223,0.15)] ring-1 ring-[#1374DF]/40'
                      : 'border-[#1F1F24] bg-[#0F0F12]/80 hover:border-[#33333C]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 sm:py-5.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-inset"
                  >
                    <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex size-7 shrink-0 items-center justify-center rounded-md transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#1374DF] text-white shadow-sm shadow-[#1374DF]/50'
                          : 'bg-[#1D1D22] text-[#888888] hover:text-white'
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          className="size-3.5 stroke-[2.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      ) : (
                        <svg
                          className="size-3.5 stroke-[2.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pt-0 text-sm leading-relaxed text-[#A0A0A0] sm:px-6 sm:pb-6 sm:text-[15px]">
                        {item.answer}
                      </p>
                    </div>
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

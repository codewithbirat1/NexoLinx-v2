'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSlideData } from '@/constants/hero';
import { TextEffect } from '@/components/core/text-effect';

interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
}

export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for slide 0
  useEffect(() => {
    if (!isActive || !slide.hasTypewriter || !slide.typewriterWords?.length) {
      return;
    }

    const words = slide.typewriterWords;
    const word = words[typewriterIndex % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < word.length) {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, 90);
      } else {
        // Pause at full word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [isActive, slide.hasTypewriter, slide.typewriterWords, typewriterIndex, currentText, isDeleting]);

  return (
    <div
      role="tabpanel"
      id={`hero-panel-${slide.id}`}
      aria-labelledby={`hero-tab-${slide.id}`}
      className={`hero-slide transition-all duration-500 ease-out flex flex-col items-center text-center ${
        isActive
          ? 'opacity-100 scale-100 pointer-events-auto visible'
          : 'opacity-0 scale-[0.98] pointer-events-none invisible absolute inset-0'
      }`}
    >
      {/* Heading Container with Relative Tilted Badge */}
      <div className="relative mx-auto w-full max-w-5xl px-0 sm:px-2">
        <h1 className="mx-auto max-w-5xl text-[clamp(1.5rem,7.5vw,3rem)] font-extrabold uppercase leading-[1.06] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[68px]">
          {isActive ? (
            slide.heading.map((line, idx) => (
              <React.Fragment key={`${slide.id}-line-${idx}`}>
                <TextEffect
                  as="span"
                  per="char"
                  preset="fade"
                  delay={idx * 0.15}
                  speedReveal={1.4}
                  className="inline-block"
                >
                  {line}
                </TextEffect>
                {idx < slide.heading.length - 1 && <br className="hidden sm:inline" />}
                {idx < slide.heading.length - 1 && ' '}
              </React.Fragment>
            ))
          ) : (
            slide.heading.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < slide.heading.length - 1 && <br className="hidden sm:inline" />}
                {idx < slide.heading.length - 1 && ' '}
              </React.Fragment>
            ))
          )}
        </h1>

        {/* Tilted Tag Badge on Top Right */}
        <span
          className="hero-tag absolute -right-6 -top-2 hidden -rotate-6 rounded-md bg-[#1374DF] px-3 py-1 text-[13px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#1374DF]/40 sm:inline-block"
        >
          {slide.tag}
        </span>
      </div>

      {/* Subtitle / Paragraph */}
      <p className="mx-auto mt-3 max-w-2xl px-1 text-sm font-normal leading-relaxed tracking-tight text-white/85 sm:mt-4 sm:px-0 sm:text-lg sm:leading-snug md:text-[19px]">
        {slide.subtitlePrefix}
        {slide.hasTypewriter ? (
          <span className="text-[#1374DF] font-semibold inline-flex items-center">
            <span>{currentText}</span>
            <span className="inline-block ml-0.5 animate-pulse font-light">|</span>
          </span>
        ) : (
          <span className="text-[#1374DF] font-semibold">{slide.highlightWord}</span>
        )}
        {slide.subtitleSuffix}
      </p>

      {/* Action Buttons (CTAs) */}
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-7 sm:w-auto sm:flex-row sm:gap-5 sm:px-2">
        {/* Primary CTA Button */}
        <Link
          href={slide.primaryCta.href}
          className="group relative inline-flex w-full max-w-[280px] items-center justify-center rounded-full bg-white px-5 py-3.5 text-base font-semibold tracking-tight text-black shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:bg-[#E8F2FF] hover:text-[#0F65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] sm:w-auto sm:px-8 md:text-[17px]"
        >
          {slide.primaryCta.hoverLabel ? (
            <>
              <span className="transition-transform duration-300 group-hover:-translate-y-6 group-hover:opacity-0 block">
                {slide.primaryCta.label}
              </span>
              <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src="/assets/hero/lets-talk.svg"
                  alt="Avatar"
                  width={22}
                  height={22}
                  className="w-5 h-5 rounded-full"
                />
                <span>{slide.primaryCta.hoverLabel}</span>
              </span>
            </>
          ) : (
            <span>{slide.primaryCta.label}</span>
          )}
        </Link>

        {/* Secondary CTA Button */}
        <Link
          href={slide.secondaryCta.href}
          className="group inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full border border-[#2F2F35] bg-black/40 px-5 py-3.5 text-base font-semibold tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#1374DF] hover:bg-white/[0.04] hover:text-[#1374DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] sm:w-auto sm:px-8 md:text-[17px]"
        >
          <span>{slide.secondaryCta.label}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm">
            ↗
          </span>
        </Link>
      </div>
    </div>
  );
}

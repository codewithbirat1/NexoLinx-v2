'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { HERO_SLIDES } from '@/constants/hero';
import { HeroBadge } from './HeroBadge';
import { HeroSlide } from './HeroSlide';
// import { HeroTabs } from './HeroTabs';

const SLIDE_DURATION = 3500;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    // Reset timer on manual selection
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    }
  };

  // Keyboard navigation for accessible switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  // Automatic slideshow cycle
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="hero-section relative w-full pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 overflow-hidden bg-transparent text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Abstract 3D Glass Blob Behind Hero Content */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-[17%] left-[3%] z-0 hidden w-[410px] opacity-65 sm:block md:w-[480px] lg:w-[520px] animate-hero-float mix-blend-screen"
      >
        <Image
          src="/assets/hero/hero-blob-abstract.webp"
          alt=""
          width={685}
          height={580}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="site-container relative z-10 flex flex-col items-center">
        {/* Top Trust Pill Badge */}
        <HeroBadge />

        {/* Hero Slides Container */}
        <div className="w-full relative min-h-[240px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center mt-4 sm:mt-[15px]">
          {HERO_SLIDES.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              isActive={activeSlide === index}
            />
          ))}
        </div>
      </div>

      {/* 3 Interactive Mode Tabs
      <HeroTabs
        activeIndex={activeSlide}
        onSelectTab={selectSlide}
        durationMs={SLIDE_DURATION}
        isPaused={isPaused}
      /> */}

    </section>
  );
}


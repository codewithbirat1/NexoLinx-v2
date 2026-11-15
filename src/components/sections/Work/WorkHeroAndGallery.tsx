'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  SHOWCASE_HEADER,
} from '@/constants/showcase';
import { WORK_PAGE_HEADER, WORK_BENTO_PROJECTS } from '@/constants/work';

/**
 * Repeating 5-card bento pattern (3 cols × 3 rows):
 *   [ A  A ] [ B ]
 *   [ A  A ] [ C ]
 *   [ D ] [ E ] [ C ]
 */
const BENTO_PATTERN = [
  'md:col-span-2 md:row-span-2',   // A — large feature
  'md:col-span-1 md:row-span-1',   // B — small top-right
  'md:col-span-1 md:row-span-2',   // C — tall right
  'md:col-span-1 md:row-span-1',   // D — small bottom-left
  'md:col-span-1 md:row-span-1',   // E — small bottom-mid
];

function getBentoClass(index: number) {
  return BENTO_PATTERN[index % BENTO_PATTERN.length];
}

export function WorkHeroAndGallery() {
  const [activeCategory, setActiveCategory] = useState('All categories');

  const filteredProjects =
    activeCategory === 'All categories'
      ? WORK_BENTO_PROJECTS
      : WORK_BENTO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="showcase"
      aria-label="Project Showcase"
      className="relative w-full bg-black text-white pt-4 sm:pt-6 md:pt-10 pb-10 sm:pb-16 lg:pb-24"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] rounded-full blur-[140px] opacity-25 z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(19, 116, 223, 0.4) 0%, rgba(15, 101, 197, 0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Header — Left Aligned */}
        <div className="flex flex-col items-start text-left max-w-4xl mb-6 sm:mb-8 md:mb-10">
          <span className="text-xs sm:text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase text-[#1374DF] mb-3 sm:mb-4">
            {SHOWCASE_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] max-w-3xl">
            {SHOWCASE_HEADER.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A0A0A0] font-normal tracking-tight mt-4 sm:mt-5 max-w-2xl leading-relaxed">
            {SHOWCASE_HEADER.description}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 md:mb-12">
          {WORK_PAGE_HEADER.categoryPills.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'bg-[#18181B] text-[#A0A0A0] hover:text-white hover:bg-[#27272A] border border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[280px] gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`col-span-1 row-span-1 ${getBentoClass(index)}`}
              >
                <BentoCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  project,
}: {
  project: {
    id: string;
    badge: string;
    title: string;
    description: string;
    image: string;
    category: string;
    href?: string;
  };
}) {
  return (
    <Link
      href={project.href || '#'}
      className="group relative block w-full h-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
    >
      {/* Full-bleed background image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-70"
      />

      {/* Gradient overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Badge top-left */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
        <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-white border border-white/10">
          {project.badge}
        </span>
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 lg:p-6 z-10">
        <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white leading-tight tracking-tight mb-1.5 drop-shadow-lg">
          {project.title}
        </h3>
        <p className="text-[11px] sm:text-xs lg:text-sm text-white/60 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

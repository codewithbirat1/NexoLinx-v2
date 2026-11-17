'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SHOWCASE_HEADER,
  SHOWCASE_PROJECTS,
} from '@/constants/showcase';

export function ProjectShowcase() {
  const leftColumnProjects = [SHOWCASE_PROJECTS[0], SHOWCASE_PROJECTS[2]];
  const rightColumnProjects = [SHOWCASE_PROJECTS[1], SHOWCASE_PROJECTS[3]];

  return (
    <section
      id="showcase"
      aria-label="Project Showcase"
      className="relative w-full bg-black text-white pt-4 sm:pt-6 md:pt-10 pb-5 sm:pb-10 lg:pb-15"
    >
      {/* Subtle brand blue radial ambient glow behind header */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] rounded-full blur-[140px] opacity-25 z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(19, 116, 223, 0.4) 0%, rgba(15, 101, 197, 0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Header Introduction */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-2 sm:mb-4 md:mb-8">
          {/* Eyebrow */}
          <span className="text-xs sm:text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase text-[#1374DF] mb-3 sm:mb-4">
            {SHOWCASE_HEADER.eyebrow}
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] max-w-3xl">
            {SHOWCASE_HEADER.title}
          </h2>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#A0A0A0] font-normal tracking-tight mt-4 sm:mt-5 max-w-2xl leading-relaxed">
            {SHOWCASE_HEADER.description}
          </p>
        </div>

        {/* Staggered Masonry Grid: Left column starts higher, right column is offset downward */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column (Ship Track + Villa Vault) */}
          <div className="flex flex-col space-y-14 sm:space-y-20 lg:space-y-24">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Right Column (Gig Desk + Bloom Money) - Staggered offset downward on md+ */}
          <div className="flex flex-col space-y-14 sm:space-y-20 lg:space-y-24 md:pt-20 lg:pt-28">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    id: string;
    category: string;
    title: string;
    image: string;
    alt: string;
    href?: string;
  };
}) {
  return (
    <Link
      href={project.href || '#'}
      className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-3xl"
    >
      {/* Image Preview Container */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0F0F12] border border-[#222222] group-hover:border-[#1374DF]/50 transition-all duration-500 shadow-xl group-hover:shadow-[0_20px_50px_rgba(19,116,223,0.15)]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Subtle hover gradient sheen */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Project Metadata Text */}
      <div className="mt-5 sm:mt-6 px-1">
        {/* Category Label */}
        <span className="text-xs sm:text-[13px] font-medium tracking-[0.04em] text-[#888888] group-hover:text-[#1374DF] transition-colors duration-300 block">
          {project.category}
        </span>

        {/* Project Title / Value Proposition */}
        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1.5 leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
          {project.title}
        </h4>
      </div>
    </Link>
  );
}


'use client';
import {
  CAREER_ROLES,
  FILTER_CATEGORIES,
} from '@/constants/career';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  MapPin,
  Clock,
  Layers,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';



/* =============================================================================
 * ANIMATION VARIANTS
 * ============================================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

/* =============================================================================
 * PAGE COMPONENT
 * ============================================================================= */

export default function Career() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredRoles =
    activeFilter === 'All'
      ? CAREER_ROLES
      : CAREER_ROLES.filter((r) => r.category === activeFilter);

  return (
    <main className="w-full min-h-screen bg-black">

      {/* ===================================================================
       * SECTION 4 — OPEN POSITIONS
       * =================================================================== */}
      <section
        id="positions"
        className="relative w-full overflow-hidden bg-black text-white py-4 md:py-8 border-b border-[#1A1A1A]"
      >
        {/* Blue Spotlights & Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[800px] max-w-[90vw] rounded-full blur-[140px] opacity-25"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(19, 116, 223, 0.7) 0%, rgba(15, 101, 197, 0.25) 45%, transparent 75%)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(19, 116, 223, 0.5) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-10 -left-24 h-[380px] w-[380px] rounded-full blur-[120px] opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(19, 116, 223, 0.45) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
                Open to Talent
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
                Find Your Place at Nexo Linx
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A1A1AA] sm:text-lg [text-wrap:pretty]">
                Explore opportunities to work on meaningful digital experiences
                and grow alongside a team of creative thinkers and
                problem-solvers.
              </p>
            </div>

            <p className="text-sm text-[#A1A1AA] whitespace-nowrap shrink-0">
              <Clock className="inline-block w-4 h-4 mr-1.5 -mt-0.5 text-[#1374DF]" aria-hidden="true" />
              All positions: <strong className="text-white">Rolling review</strong>
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Filter positions by category"
          >
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  activeFilter === cat
                    ? 'bg-[#1374DF] text-white shadow-[0_0_20px_-3px_rgba(19,116,223,0.5)]'
                    : 'bg-[#0E0E11] text-[#A1A1AA] border border-white/10 hover:border-[#1374DF]/40 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-5">
            {filteredRoles.length === 0 && (
              <p className="text-center text-[#A1A1AA] py-12 text-base">
                No open positions in this category right now. Check back soon or
                send us your portfolio below.
              </p>
            )}

            {filteredRoles.map((role, index) => (
              <motion.article
                key={role.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D14]/90 p-6 sm:p-8 hover:border-[#1374DF]/50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_-5px_rgba(19,116,223,0.22)] backdrop-blur-sm transition-all duration-300"
              >
                {/* Subtle card spotlight highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(19,116,223,0.18)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Top Row — Title + Tags */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#1374DF] transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="rounded-full bg-[#1374DF]/15 border border-[#1374DF]/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#E8F2FF]">
                        {role.department}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#A1A1AA]">
                        {role.type}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={`mailto:info@nexolinx.com?subject=${role.emailSubject}&body=Hello%20Nexo%20Linx%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(role.title)}%20role.`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1374DF] hover:text-[#529ff3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-1"
                    >
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={`mailto:info@nexolinx.com?subject=${role.emailSubject}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#1374DF] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* Meta Grid */}
                <div className="relative z-10 mt-6 pt-5 border-t border-white/10">
                  <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1374DF] shrink-0">
                        <Layers className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#71717A] block">
                          Arrangement
                        </span>
                        <span className="font-semibold text-white">
                          {role.arrangement}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1374DF] shrink-0">
                        <TrendingUp className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#71717A] block">
                          Experience
                        </span>
                        <span className="font-semibold text-white">
                          {role.level}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1374DF] shrink-0">
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#71717A] block">
                          Location
                        </span>
                        <span className="font-semibold text-white">
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1374DF] shrink-0">
                        <Briefcase className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#71717A] block">
                          About the Role
                        </span>
                        <span className="text-[#A1A1AA] text-[13px] leading-relaxed line-clamp-2">
                          {role.description}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#D4D4D8] hover:border-[#1374DF]/40 hover:text-white hover:bg-[#1374DF]/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Don't See Your Role? CTA */}
          <div className="relative overflow-hidden mt-8 rounded-2xl border border-[#1374DF]/30 bg-[#090D16] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-[0_0_40px_-10px_rgba(19,116,223,0.25)]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(19,116,223,0.2),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Don&apos;t see your role?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] max-w-lg">
                We&apos;re always open to hearing from talented people. Send
                your portfolio, CV, and a short note about your work — we&apos;d
                love to keep you in mind.
              </p>
            </div>
            <a
              href="mailto:info@nexolinx.com?subject=General%20Application"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#1374DF] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0F65C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] focus-visible:ring-offset-2 focus-visible:ring-offset-black whitespace-nowrap shrink-0 shadow-[0_0_24px_-4px_rgba(19,116,223,0.5)]"
            >
              Send Your Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

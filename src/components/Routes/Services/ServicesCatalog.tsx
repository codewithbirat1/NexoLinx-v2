'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  SERVICES_DATA,
  SERVICES_PAGE_CATALOG_HEADER,
} from '@/constants/services';

export function ServicesCatalog() {
  return (
    <section
      id="catalog"
      aria-label="All Nexo Linx Services"
      className="relative w-full bg-[#050507] py-16 sm:py-20 lg:py-28"
    >
      <div className="site-container">
        {/* Section Header matching standard Nexo Linx section headers */}
        <div className="mb-14 lg:mb-20">
          <span className="text-xs font-semibold text-[#1374DF] uppercase block mb-3 tracking-normal">
            {SERVICES_PAGE_CATALOG_HEADER.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
            {SERVICES_PAGE_CATALOG_HEADER.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg [text-wrap:pretty]">
            {SERVICES_PAGE_CATALOG_HEADER.subheading}
          </p>
        </div>

        {/* 7 Services Clusters */}
        <div className="space-y-20 lg:space-y-28">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="relative scroll-mt-24 pt-4 border-t border-white/10 first:border-t-0 first:pt-0"
            >
              {/* Service Header Row */}
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-14 mb-10">
                {/* Visual Preview / Feature Card */}
                <div className="lg:col-span-4">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D13] p-6 transition-all duration-300 hover:border-[#1374DF]/40">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1374DF]">
                        Capability {service.categoryNumber}
                      </span>
                      <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#A1A1AA]">
                        Available Now
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-white group-hover:text-[#1374DF] transition-colors sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                      {service.shortDescription}
                    </p>

                    {/* Quick Image / Graphic Accent */}
                    <div className="relative mt-6 h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-[#06080C]">
                      <Image
                        src={service.galleryImages?.[0] || service.heroImage}
                        alt={`${service.title} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-transparent to-transparent" />
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1374DF] hover:text-[#529ff3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-1"
                      >
                        <span>Full Service Deep-Dive</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <span className="text-xs text-[#888888] font-mono">
                        {service.subServices.length} offerings
                      </span>
                    </div>
                  </div>
                </div>

                {/* Offerings Grid: Clean 2x2 Sub-Services Cards */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    {service.subServices.map((sub, subIdx) => (
                      <div
                        key={sub.id}
                        className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0D14]/90 p-6 transition-all duration-300 hover:border-[#1374DF]/50 hover:bg-[#0D121D] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-medium text-[#1374DF] group-hover:bg-[#1374DF] group-hover:text-white transition-colors">
                              0{subIdx + 1}
                            </span>
                            <span className="h-px flex-1 bg-white/5" aria-hidden="true" />
                          </div>

                          <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#1374DF] transition-colors">
                            {sub.title}
                          </h3>

                          <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
                            {sub.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                          <Link
                            href={`/services/${service.slug}#offerings`}
                            className="inline-flex items-center gap-1 font-semibold text-[#888888] hover:text-white transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                          >
                            <span>Explore deliverable</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                          <span className="text-[#555555]">Included in scope</span>
                        </div>
                      </div>
                    ))}

                    {/* Contextual mini-banner to round out the grid */}
                    <div className="sm:col-span-2 rounded-2xl border border-[#1374DF]/20 bg-[#090E18] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Looking for tailored {service.title.toLowerCase()} for your business?
                        </h4>
                        <p className="text-xs text-[#A1A1AA] mt-1">
                          We assemble dedicated cross-functional design and engineering scopes based on your milestones.
                        </p>
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/10 hover:bg-[#1374DF] text-white px-5 py-2.5 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                      >
                        <span>View Deliverables &amp; Process</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

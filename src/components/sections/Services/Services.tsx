'use client';

import React, { useState } from 'react';
import { SERVICES_LIST } from '@/constants/services';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const [activeCardId, setActiveCardId] = useState<string>(
    SERVICES_LIST[0]?.id || 'saas-ui-ux-design'
  );

  const leftColumnServices = SERVICES_LIST.filter((_, idx) => idx % 2 === 0);
  const rightColumnServices = SERVICES_LIST.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="relative w-full overflow-hidden bg-[#F9F8F4] py-1 text-[#121212] sm:py-2 md:py-4 lg:py-8"
    >
      <div className="site-container">
        {/* Section Header Introduction */}
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center text-center sm:mb-6 md:mb-8">
          <span className="mb-2 text-sm font-semibold tracking-[0.14em] uppercase text-[#1374DF] sm:mb-3 lg:text-base">
            WE ARE GREAT AT
          </span>
          <h2 className="max-w-3xl px-1 text-[clamp(1.75rem,6vw,3.375rem)] font-bold leading-[1.12] tracking-tight text-[#111111]">
            UI UX Design and Product Experience Services
          </h2>
          <p className="mt-2 text-sm font-normal tracking-tight text-[#666666] sm:mt-3 sm:text-base md:text-xl">
            Designs with Exceptional User Experiences
          </p>
        </div>

        {/* Services Grid with Subtle Dividers */}
        <div className="relative w-full">
          {/* Mobile Single Column: Sequential 1 to 6 */}
          <div className="flex flex-col md:hidden divide-y divide-[#E4E4DC]">
            {SERVICES_LIST.map((service) => (
              <div key={`mobile-${service.id}`} className="py-2">
                <ServiceCard
                  service={service}
                  isActive={activeCardId === service.id}
                  onMouseEnter={() => setActiveCardId(service.id)}
                  activeBackgroundId="services-active-card-mobile"
                />
              </div>
            ))}
          </div>

          {/* Desktop Two-Column Layout */}
          <div className="hidden md:grid grid-cols-2 relative">
            {/* Center Vertical Divider Line on Desktop */}
            <div
              className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#E4E4DC] pointer-events-none"
              aria-hidden="true"
            />

            {/* Left Column */}
            <div className="flex flex-col md:pr-6 lg:pr-10">
              {leftColumnServices.map((service, idx) => (
                <React.Fragment key={service.id}>
                  {idx > 0 && (
                    <div className="w-full h-px bg-[#E4E4DC] my-1" aria-hidden="true" />
                  )}
                  <div className="py-2">
                    <ServiceCard
                      service={service}
                      isActive={activeCardId === service.id}
                      onMouseEnter={() => setActiveCardId(service.id)}
                      activeBackgroundId="services-active-card-desktop"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col md:pl-6 lg:pl-10 mt-2 md:mt-0">
              {rightColumnServices.map((service, idx) => (
                <React.Fragment key={service.id}>
                  {idx > 0 && (
                    <div className="w-full h-px bg-[#E4E4DC] my-1" aria-hidden="true" />
                  )}
                  <div className="py-2">
                    <ServiceCard
                      service={service}
                      isActive={activeCardId === service.id}
                      onMouseEnter={() => setActiveCardId(service.id)}
                      activeBackgroundId="services-active-card-desktop"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

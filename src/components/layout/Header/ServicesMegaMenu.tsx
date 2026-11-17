'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES_MEGA_MENU } from '@/constants/navigation';
import { DynamicIcon } from '@/components/common/DynamicIcon';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnterMenu: () => void;
  onMouseLeaveMenu: () => void;
}

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onMouseEnterMenu,
  onMouseLeaveMenu,
}: ServicesMegaMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    SERVICES_MEGA_MENU[0].id
  );

  const activeCategory =
    SERVICES_MEGA_MENU.find((cat) => cat.id === activeCategoryId) ||
    SERVICES_MEGA_MENU[0];

  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      onMouseEnter={onMouseEnterMenu}
      onMouseLeave={onMouseLeaveMenu}
      className={`absolute left-0 right-0 top-full z-50 w-full transform-gpu transition-[opacity,transform] duration-500 ease-brand ${
        isOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-2 opacity-0 pointer-events-none'
      }`}
    >
      {/* Invisible hover bridge to eliminate any gap between nav item and mega menu */}
      <div className="w-full h-1 bg-transparent pointer-events-auto" />

      {/* Main Mega Menu Container - Full hero-section height */}
      <div className="w-full bg-[#070709] border-t border-b border-[#222225] shadow-[0_32px_64px_rgba(0,0,0,0.95)] h-[calc(100dvh-5.5rem)] overflow-y-auto">
        <div className="site-container h-full py-9">
          <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start h-full">
            {/* Left Column: Vertical Category Navigation */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-2 border-r border-[#222225]/80 pr-6">
              {SERVICES_MEGA_MENU.map((category) => {
                const isActive = category.id === activeCategoryId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onMouseEnter={() => setActiveCategoryId(category.id)}
                    onFocus={() => setActiveCategoryId(category.id)}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] ${
                      isActive
                        ? 'bg-[#141418] border border-[#2B2B30] text-white shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        isActive ? 'text-[#1374DF]' : 'text-white/50'
                      }`}
                    >
                      <DynamicIcon name={category.iconName} className="w-5 h-5" />
                    </span>
                    <span
                      className={`text-[16px] tracking-tight font-semibold transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-white/80'
                      }`}
                    >
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Multiple Columns of Service Listings */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9 pl-0 md:pl-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-7">
                {activeCategory.services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    onClick={onClose}
                    className="group flex flex-col p-2 -m-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                  >
                    {/* Service Title with Left Icon */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 text-white/75 group-hover:text-[#1374DF] transition-colors duration-200">
                        <DynamicIcon name={service.iconName} className="w-4 h-4" />
                      </span>
                      <h4 className="text-[18px] font-bold text-white group-hover:text-[#1374DF] transition-colors duration-200 tracking-tight leading-snug">
                        {service.title}
                      </h4>
                    </div>

                    {/* Service Description */}
                    <p className="text-sm sm:text-[16px] text-[#888888] leading-relaxed mt-1.5 pl-7 line-clamp-2">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

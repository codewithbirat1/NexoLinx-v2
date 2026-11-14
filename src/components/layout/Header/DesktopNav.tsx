'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';

interface DesktopNavProps {
  isServicesOpen: boolean;
  onMouseEnterServices: () => void;
  onMouseLeaveServices: () => void;
  onToggleServices: () => void;
}

export function DesktopNav({
  isServicesOpen,
  onMouseEnterServices,
  onMouseLeaveServices,
  onToggleServices,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        if (item.isServices) {
          return (
            <div
              key={item.label}
              className="relative py-2"
              onMouseEnter={onMouseEnterServices}
              onMouseLeave={onMouseLeaveServices}
            >
              <button
                type="button"
                onClick={onToggleServices}
                className={`group flex items-center gap-1.5 text-base font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-md ${
                  isServicesOpen
                    ? 'text-[#1374DF]'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-mega-menu"
              >
                <span>{item.label}</span>
               
              </button>
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="text-base font-medium text-white/90 hover:text-[#1374DF] transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-md"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

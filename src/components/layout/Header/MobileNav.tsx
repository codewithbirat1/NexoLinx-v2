'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, SERVICES_MEGA_MENU } from '@/constants/navigation';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { HeaderCta } from './HeaderCta';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  // Prevent background scroll when mobile navigation is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to dismiss
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesExpanded(false);
    setExpandedCategoryId(null);
  };

  const toggleCategory = (id: string) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  return (
    <div className="lg:hidden flex items-center gap-3">
 

      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#252525] bg-[#0F0F12] text-white hover:border-[#1374DF] hover:text-[#1374DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
      >
        {isOpen ? <X className="w-5 h-5 text-[#1374DF]" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full h-[calc(100dvh-4rem)] w-full bg-[#080809] bg-opacity-98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overscroll-contain px-4 py-5 sm:h-[calc(100dvh-5rem)] sm:px-6 sm:py-6 border-t border-[#252525] z-50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Navigation Links List */}
          <div className="space-y-3">
            {NAV_ITEMS.map((item) => {
              if (item.isServices) {
                return (
                  <div key={item.label} className="border-b border-[#252525]/70 pb-2.5">
                    <button
                      type="button"
                      onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                      className={`w-full flex items-center justify-between text-base font-semibold py-2 transition-colors ${
                        isServicesExpanded ? 'text-[#1374DF]' : 'text-white/95 hover:text-[#1374DF]'
                      }`}
                      aria-expanded={isServicesExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesExpanded ? 'rotate-180 text-[#1374DF]' : 'text-white/50'
                        }`}
                      />
                    </button>

                    {/* Services Categories */}
                    {isServicesExpanded && (
                      <div className="mt-2 pl-3 space-y-3 border-l-2 border-[#1374DF]/40 animate-in fade-in duration-150">
                        {SERVICES_MEGA_MENU.map((category) => {
                          const isCatOpen = expandedCategoryId === category.id;
                          return (
                            <div key={category.id} className="space-y-2">
                              <button
                                type="button"
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full flex items-center justify-between text-sm font-semibold py-1 transition-colors ${
                                  isCatOpen ? 'text-[#1374DF]' : 'text-white/85 hover:text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <DynamicIcon name={category.iconName} className="w-4 h-4" />
                                  <span>{category.label}</span>
                                </span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 text-white/50 transition-transform ${
                                    isCatOpen ? 'rotate-180 text-[#1374DF]' : ''
                                  }`}
                                />
                              </button>

                              {isCatOpen && (
                                <div className="pl-4 space-y-2 border-l border-[#252525] py-1 animate-in fade-in duration-150">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.id}
                                      href={service.href}
                                      onClick={closeMenu}
                                      className="block py-1 text-xs text-[#A3A3A3] hover:text-[#1374DF] transition-colors"
                                    >
                                      <div className="font-medium text-white/90">
                                        {service.title}
                                      </div>
                                      <div className="text-[11px] text-[#71717A] line-clamp-1">
                                        {service.description}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="border-b border-[#252525]/70 pb-2.5">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-base font-semibold text-white/95 hover:text-[#1374DF] py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-5 border-t border-[#252525] space-y-4">
            <HeaderCta className="w-full py-3.5 text-base" onClick={closeMenu} />
            <div className="flex items-center justify-between text-xs text-[#888888] pt-1">
              <span>Nexo Linx Pvt. Ltd.</span>
              <span className="text-[#1374DF] font-medium">Build • Optimize • Outrank</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

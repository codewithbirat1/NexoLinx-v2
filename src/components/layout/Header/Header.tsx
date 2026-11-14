'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/common/Logo';
import { DesktopNav } from './DesktopNav';
import { HeaderCta } from './HeaderCta';
import { MobileNav } from './MobileNav';
import { ServicesMegaMenu } from './ServicesMegaMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: ESC key closes mega-menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mega-menu is open
  useEffect(() => {
    if (isServicesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isServicesOpen]);

  const openServicesMenu = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesMenuWithDelay = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const closeServicesMenuImmediately = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 sm:h-20 lg:h-[88px] transition-all duration-300 ease-in-out ${
        isScrolled || isServicesOpen
          ? 'bg-black/100 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08]'
      }`}
    >
      <div className="site-container flex h-full items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <DesktopNav
            isServicesOpen={isServicesOpen}
            onMouseEnterServices={openServicesMenu}
            onMouseLeaveServices={closeServicesMenuWithDelay}
            onToggleServices={toggleServicesMenu}
          />
        </div>

        {/* Right Action Elements */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <HeaderCta />
        </div>

        {/* Mobile / Tablet Navigation */}
        <MobileNav />
      </div>

      {/* Services Full-Width Mega Menu */}
      <ServicesMegaMenu
        isOpen={isServicesOpen}
        onClose={closeServicesMenuImmediately}
        onMouseEnterMenu={openServicesMenu}
        onMouseLeaveMenu={closeServicesMenuWithDelay}
      />
    </header>
  );
}

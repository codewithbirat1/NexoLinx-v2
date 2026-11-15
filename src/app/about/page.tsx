import React from 'react';
import type { Metadata } from 'next';
import {
  AboutHero,
  AboutBelief,
  AboutWorkTypes,
  AboutBanner,
  AboutReasons,
  AboutDifferentiators,
} from '@/components/sections/About';
import { Partners } from '@/components/sections/Partners';
import { BusinessContact } from '@/components/sections/BusinessContact';
import { ContactSection } from '@/components/sections/Contact';
export const metadata: Metadata = {
  title: 'About Us | Nexo Linx - Digital Products That Scale Businesses',
  description:
    'Learn about Nexo Linx, our beliefs, standard of engineering quality, and why industry leaders partner with us to design and scale intelligent digital products.',
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      {/* 1. Hero Section with stats & bento grid */}
      <AboutHero />

      {/* 2. Belief Statement Section */}
      <AboutBelief />

      {/* 3. Partner & Client Logos Row */}
      <Partners />

      {/* 4. Three Types of Work Section (Clean light contrast background) */}
      <AboutWorkTypes />

      {/* 5. Statement Banner (Adapted to Nexo Linx brand blue) */}
      <AboutBanner />

      {/* 6. Six Reasons Section */}
      <AboutReasons />

      {/* 7. What Makes Us Different From Others */}
      <AboutDifferentiators />

      <ContactSection />

 
    </main>
  );
}

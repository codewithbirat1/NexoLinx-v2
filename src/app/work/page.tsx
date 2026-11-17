import React from "react";
import type { Metadata } from "next";
import { WorkHeroAndGallery } from "@/components/Routes/Work";
import { Partners } from "@/components/sections/Partners";
import { BusinessContact } from "@/components/sections/BusinessContact";
import { ContactSection } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Work & Case Studies | Nexo Linx - Selected Digital Products",
  description:
    "Explore our portfolio of digital products, modern web apps, and high-impact software experiences crafted by Nexo Linx for founders and enterprises worldwide.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      {/* 1. Curated Work Portfolio & Asymmetric Showcase with Filter Bar */}
      <WorkHeroAndGallery />

      {/* 2. Brand & Enterprise Partners Marquee */}
      <Partners />

      <ContactSection />

      {/* 4. Let's Talk About Your Business (Local Office Contact Bridge) */}
      <BusinessContact />
    </main>
  );
}

import React from "react";
import type { Metadata } from "next";
import  Career  from "@/components/Routes/Careers/Career";
import { BusinessContact } from "@/components/sections/BusinessContact";
import { CareerHero } from "@/components/Routes/Careers/CareerHero";
import { DiscoveryBanner } from "@/components/sections/DiscoveryBanner/DiscoveryBanner";
export const metadata: Metadata = {
  title: "Contact Us | Nexo Linx - Digital Products That Scale Businesses",
  description:
    "Get in touch with Nexo Linx. Learn about our services, and how we can help scale your digital products.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <CareerHero />     
      <Career/>
      <BusinessContact />
      <DiscoveryBanner />
      
    </main>
  );
}

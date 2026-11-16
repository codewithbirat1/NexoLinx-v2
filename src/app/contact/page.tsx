import React from "react";
import type { Metadata } from "next";

import { BusinessContact } from "@/components/sections/BusinessContact";
import { ContactSection } from "@/components/sections/Contact";
import { DiscoveryBanner } from "@/components/sections/DiscoveryBanner/DiscoveryBanner";
import { ContactHeader } from "@/components/sections/Contact/ContactHeader";
export const metadata: Metadata = {
  title: "Contact Us | Nexo Linx - Digital Products That Scale Businesses",
  description:
    "Get in touch with Nexo Linx. Learn about our services, and how we can help scale your digital products.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-black">
 <ContactHeader />     
      <ContactSection />
      <BusinessContact />
      <DiscoveryBanner />
      
    </main>
  );
}

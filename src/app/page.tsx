import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { Faq } from '@/components/sections/Faq';
import { ContactSection } from '@/components/sections/Contact';
import { DiscoveryBanner } from '@/components/sections/DiscoveryBanner/DiscoveryBanner';
import { BusinessContact } from '@/components/sections/BusinessContact';
// import { ProjectCtaCard } from '@/components/sections/ProjectCtaCard/ProjectCtaCard';
export default function HomePage() {
  return (
    <main className="w-full relative min-h-screen">
      {/* Complete Nexo Linx Hero & Above-the-Fold Section */}
      <Hero />

      {/* Trusted Partners Logo Marquee */}
      <Partners />

      {/* Smooth Dark → Light Background Transition */}
      <div className="section-transition-dark-to-light" aria-hidden="true" />

      {/* Complete Services Section */}
      <Services />

      {/* Smooth Light → Dark Background Transition */}
      <div className="section-transition-light-to-dark" aria-hidden="true" />

      {/* Our Process, Your Advantage Section */}
      <Process />

      {/* Project Showcase Section */}
      <ProjectShowcase />

       {/* <ProjectCtaCard /> */}
      <DiscoveryBanner />

      {/* Frequently Asked Questions Section */}
      <Faq />

      {/* Contact & Project Inquiry Section */}
      <ContactSection />

      {/* Let's Talk About Your Business Section */}
      <BusinessContact />
    </main>
  );
}

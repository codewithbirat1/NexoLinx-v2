import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

export interface ContactLink {
  label: string;
  href: string;
  isExternal?: boolean;
  ariaLabel?: string;
  isWhatsApp?: boolean;
}

export interface ContactCardItem {
  id: string;
  title: string;
  description: string;
  icon: 'mapPin' | 'phone' | 'mail';
  links: ContactLink[];
  highlightGlow?: boolean;
}

export interface BusinessContactData {
  cards: ContactCardItem[];
}

/**
 * Easily customizable content object.
 * Ready for translation or future updates.
 */
export const BUSINESS_CONTACT_DATA: BusinessContactData = {
  cards: [
    {
      id: 'visit-us',
      title: 'Visit Us',
      description: 'Tillottama-4, Rupandehi, Nepal',
      icon: 'mapPin',
      links: [
        {
          label: 'Get Directions',
          href: 'https://maps.google.com/?q=Tillottama-4,+Rupandehi,+Nepal',
          isExternal: true,
          ariaLabel: 'Get directions to Nexo Linx office on Google Maps',
        },
      ],
    },
    {
      id: 'call-or-whatsapp',
      title: 'Call or WhatsApp',
      description: 'Sun-Fri, 10:00 AM - 6:00 PM',
      icon: 'phone',
      highlightGlow: true,
      links: [
        {
          label: '+977 9743406723',
          href: 'tel:+9779743406723',
          ariaLabel: 'Call Nexo Linx at +977 9743406723',
        },
        {
          label: 'WhatsApp Us',
          href: 'https://wa.me/9779743406723',
          isExternal: true,
          isWhatsApp: true,
          ariaLabel: 'Chat with Nexo Linx on WhatsApp',
        },
      ],
    },
    {
      id: 'email-us',
      title: 'Email Us',
      description: 'We reply within 24 hours',
      icon: 'mail',
      links: [
        {
          label: 'hello@nexolinx.com',
          href: 'mailto:hello@nexolinx.com',
          ariaLabel: 'Send an email to hello@nexolinx.com',
        },
      ],
    },
  ],
};

function renderCardIcon(icon: ContactCardItem['icon']) {
  const iconProps = {
    className: 'w-6 h-6 text-white group-hover:text-[#1374DF] transition-colors',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };

  switch (icon) {
    case 'mapPin':
      return <MapPin {...iconProps} />;
    case 'phone':
      return <Phone {...iconProps} />;
    case 'mail':
      return <Mail {...iconProps} />;
    default:
      return null;
  }
}

export interface BusinessContactProps {
  className?: string;
  data?: BusinessContactData;
}

export function BusinessContact({
  className = '',
  data = BUSINESS_CONTACT_DATA,
}: BusinessContactProps) {
  return (
    <section
      aria-labelledby="business-contact-heading"
      className={`w-full bg-black text-white relative py-12 sm:py-16 lg:py-20 border-t border-white/10 ${className}`}
    >
      <div className="site-container">
      

        {/* 3-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.cards.map((card) => {
            const hasGlow = card.highlightGlow;

            return (
              <div
                key={card.id}
                className={`group relative rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 ${
                  hasGlow
                    ? 'border-white/15 bg-[#0C1019] hover:border-[#1374DF]/60'
                    : 'border-white/10 bg-[#0B0B0C] hover:border-[#1374DF]/40'
                }`}
              >
                {/* Subtle dark-blue radial glow on hover */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    hasGlow
                      ? 'bg-[radial-gradient(circle_at_center,rgba(19,116,223,0.18),transparent_70%)]'
                      : 'bg-[radial-gradient(circle_at_center,rgba(19,116,223,0.1),transparent_70%)]'
                  }`}
                />

                {/* Card Top: Icon & Text Info */}
                <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                  {/* Clean line-art icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#1374DF]/40 group-hover:bg-[#1374DF]/10 transition-all duration-300">
                    {renderCardIcon(card.icon)}
                  </div>

                  {/* Header & Body */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Clickable Blue Links */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {card.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={link.ariaLabel || link.label}
                      className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#1374DF] hover:text-[#0F65C5] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF] rounded-sm py-0.5"
                    >
                      {link.isWhatsApp && (
                        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      )}
                      <span>{link.label}</span>
                      {link.isExternal && !link.isWhatsApp && (
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 shrink-0" aria-hidden="true" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BusinessContact;

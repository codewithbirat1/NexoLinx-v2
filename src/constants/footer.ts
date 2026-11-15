/**
 * Official Nexo Linx Footer Constants & Data
 * Faithfully reproducing the structure and content from reference
 */

export interface OfficeLocation {
  id: string;
  region: string;
  address: string;
  phone: string;
  telLink: string;
  landmark: 'liberty' | 'bigben' | 'mosque';
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterNavColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'dribbble' | 'youtube' | 'facebook' | 'linkedin' | 'instagram';
}

export const FOOTER_OFFICES: OfficeLocation[] = [
  {
    id: 'north-america',
    region: 'North America',
    address: '316 W 12th St, 4th floor, Austin, Texas, 78701',
    phone: '+1 (737) 277 5447',
    telLink: 'tel:+17372775447',
    landmark: 'liberty',
  },
  {
    id: 'europe',
    region: 'Europe',
    address: 'West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom',
    phone: '+44 (746) 0766-922',
    telLink: 'tel:+447460766922',
    landmark: 'bigben',
  },
  {
    id: 'asia',
    region: 'Asia',
    address: '144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792',
    phone: '042-37888403',
    telLink: 'tel:04237888403',
    landmark: 'mosque',
  },
];

export const FOOTER_BIO = {
  text: 'We transform ideas into user-centered digital experiences for businesses worldwide, from Fortune 500s to startups, using Next.js, AI solutions, and cutting-edge design.',
};

export const FOOTER_NAV_COLUMNS: FooterNavColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
      { label: 'Insights', href: '#insights' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'UI UX Design', href: '#services' },
      { label: 'UX Research', href: '#services-research' },
      { label: 'Design System', href: '#services' },
      { label: 'Web App Design', href: '#services-web-design' },
      { label: 'Mobile App Design', href: '#services-mobile-design' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Fintech', href: '#industries' },
      { label: 'AI & ML', href: '#ai-solutions' },
      { label: 'Technology & SaaS', href: '#industries' },
      { label: 'Logistics and Transportations', href: '#industries' },
      { label: 'Real Estate', href: '#industries' },
      { label: 'E Commerce', href: '#industries' },
    ],
  },
];

export const FOOTER_LEGAL = {
  copyright: '© 2026 Copyright Nexo Linx Private Limited. All rights reserved.',
  privacyPolicy: {
    label: 'Privacy Policy',
    href: '/privacy',
  },
};

export const FOOTER_SOCIALS: SocialLink[] = [
  {
    id: 'dribbble',
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: 'dribbble',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'facebook',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: 'instagram',
  },
];

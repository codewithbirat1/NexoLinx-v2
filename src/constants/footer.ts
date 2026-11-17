/**
 * Official Nexo Linx Footer Constants & Data
 * Faithfully reproducing official company details from nexolinx.com
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
    id: 'nepal-hq',
    region: 'Headquarters (Nepal)',
    address: 'Tilottama-4, Dinganagar, Rupandehi, Lumbini 32900',
    phone: '+977 9743406723',
    telLink: 'tel:+9779743406723',
    landmark: 'liberty',
  },
  {
    id: 'global-support',
    region: 'Digital & Remote Client Support',
    address: 'Serving clients across Nepal, US, UK, Australia & Worldwide',
    phone: '+977 9749890500',
    telLink: 'tel:+9779749890500',
    landmark: 'bigben',
  },
];

export const FOOTER_BIO = {
  text: 'Nexo Linx Pvt. Ltd. is a leading IT and digital solutions company in Butwal and Tilottama. We engineer scalable web platforms, native mobile applications, intuitive UI/UX design, and growth marketing that drives measurable impact.',
};

export const FOOTER_NAV_COLUMNS: FooterNavColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Projects & Case Studies', href: '/work' },
      { label: 'Meet Our Team', href: '/team' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'Graphics Design', href: '/services/graphics-design' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: '3D Modeling', href: '/services/3d-modeling' },
      { label: 'Editing', href: '/services/editing' },
    ],
  },
  {
    title: 'Solutions & Stack',
    links: [
      { label: 'Next.js & React Apps', href: '/services/web-development' },
      { label: 'E-Commerce & Payments', href: '/services/web-development' },
      { label: 'React Native Mobile', href: '/services/app-development' },
      { label: 'Brand Design Systems', href: '/services/graphics-design' },
      { label: 'Campaign Design', href: '/services/digital-marketing' },
      { label: 'Social Media Management', href: '/services/social-media-management' },
    ],
  },
];

export const FOOTER_LEGAL = {
  copyright: '© 2026 Nexo Linx Pvt. Ltd. All rights reserved.',
  privacyPolicy: {
    label: 'Privacy Policy',
    href: '/privacy',
  },
};

export const FOOTER_SOCIALS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nexolinx',
    icon: 'linkedin',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/nexolinx',
    icon: 'facebook',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/nexolinx',
    icon: 'instagram',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: 'youtube',
  },
];

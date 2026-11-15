export interface ServiceCardData {
  id: string;
  category: string;
  title: string;
  href: string;
  isInitialActive?: boolean;
}

export const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'web-development',
    category: 'FOR SCALABLE PLATFORMS & E-COMMERCE',
    title: 'Web Design & Development',
    href: '#contact',
    isInitialActive: true,
  },
  {
    id: 'mobile-app-development',
    category: 'FOR IOS, ANDROID & CROSS-PLATFORM',
    title: 'Mobile App Development',
    href: '#contact',
  },
  {
    id: 'custom-software',
    category: 'FOR ENTERPRISE AUTOMATION & SAAS',
    title: 'Custom Software Development',
    href: '#contact',
  },
  {
    id: 'ui-ux-branding',
    category: 'FOR INTUITIVE DIGITAL EXPERIENCES',
    title: 'UI/UX Design & Branding',
    href: '#contact',
  },
  {
    id: 'seo-digital-marketing',
    category: 'FOR SEARCH VISIBILITY & REVENUE',
    title: 'SEO & Digital Marketing',
    href: '#contact',
  },
  {
    id: 'video-editing-media',
    category: 'FOR VISUAL STORYTELLERS & 3D',
    title: 'Video Editing & 3D Media',
    href: '#contact',
  },
];

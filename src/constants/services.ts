export interface ServiceCardData {
  id: string;
  category: string;
  title: string;
  href: string;
  isInitialActive?: boolean;
}

export const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'saas-ui-ux-design',
    category: 'FOR DIGITAL EXPERIENCES',
    title: 'Saas UI UX Design',
    href: '#services-saas-ui-ux',
    isInitialActive: true,
  },
  {
    id: 'product-revamp',
    category: 'FOR STARTUPS & EXISTING COMPANIES',
    title: 'Product Revamp',
    href: '#services-product-revamp',
  },
  {
    id: 'brand-design',
    category: 'FOR VISUAL STORYTELLERS',
    title: 'Brand Design',
    href: '#services-brand-design',
  },
  {
    id: 'no-code-dev',
    category: 'FOR RAPID APP BUILDERS',
    title: 'No Code Development',
    href: '#services-no-code',
  },
  {
    id: 'mvp-design',
    category: 'FOR STARTUPS & FOUNDERS',
    title: 'MVP Design',
    href: '#services-mvp-design',
  },
  {
    id: 'team-extension',
    category: 'DEDICATED UX UI TEAM',
    title: 'Team Extension',
    href: '#services-team-extension',
  },
];


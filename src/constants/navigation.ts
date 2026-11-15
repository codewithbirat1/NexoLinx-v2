export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  iconName: string;
  services: ServiceItem[];
}

export const SERVICES_MEGA_MENU: ServiceCategory[] = [
  {
    id: 'ui-ux-design',
    label: 'UI UX Design',
    iconName: 'Lightbulb',
    services: [
      {
        id: 'ux-consultation',
        title: 'UX Consultation',
        description: 'Shape your product vision with insights, market analysis, and growth strategies.',
        href: '#services-consultation',
        iconName: 'Compass',
      },
      {
        id: 'ux-research',
        title: 'UX Research',
        description: 'Uncover user needs and behaviors through research that drives design decisions.',
        href: '#services-research',
        iconName: 'SearchCheck',
      },
      {
        id: 'ux-audit',
        title: 'UX Audit',
        description: 'Align goals and deliverables into a strategic roadmap for market success.',
        href: '#services-audit',
        iconName: 'ClipboardCheck',
      },
      {
        id: 'experience-architecture',
        title: 'Experience Architecture',
        description: 'Design intuitive structures and user flows that make products effortless.',
        href: '#services-architecture',
        iconName: 'Workflow',
      },
      {
        id: 'user-experience-design',
        title: 'User Experience Design',
        description: 'Information architecture, user flows, wireframes, and interaction design.',
        href: '#services-ux-design',
        iconName: 'Layout',
      },
      {
        id: 'web-design',
        title: 'Web Design',
        description: 'Deliver striking, functional interfaces that enhance user satisfaction.',
        href: '#services-web-design',
        iconName: 'Monitor',
      },
      {
        id: 'mobile-design',
        title: 'Mobile Design',
        description: 'User-centric mobile app interfaces crafted for iOS and Android platforms.',
        href: '#services-mobile-design',
        iconName: 'Smartphone',
      },
      {
        id: 'saas-ui-ux-design',
        title: 'SaaS UI UX Design',
        description: 'Scalable, multi-tenant digital interfaces built for modern cloud software.',
        href: '#services-saas-design',
        iconName: 'Layers',
      },
    ],
  },
  {
    id: 'brand-design',
    label: 'Brand Design',
    iconName: 'Palette',
    services: [
      {
        id: 'brand-strategy',
        title: 'Brand Strategy',
        description: 'Clarify positioning, core value proposition, and competitive market edge.',
        href: '#services-brand-strategy',
        iconName: 'Sparkles',
      },
      {
        id: 'brand-guidelines',
        title: 'Brand Guidelines',
        description: 'Comprehensive documentation ensuring consistent brand execution across channels.',
        href: '#services-brand-guidelines',
        iconName: 'BookOpen',
      },
      {
        id: 'visual-identity',
        title: 'Visual Identity',
        description: 'Distinctive logo marks, color systems, and cohesive visual language.',
        href: '#services-visual-identity',
        iconName: 'Palette',
      },
      {
        id: 'marketing-collateral',
        title: 'Marketing Collateral',
        description: 'High-impact social assets, pitch decks, and digital campaign media.',
        href: '#services-marketing-collateral',
        iconName: 'Megaphone',
      },
      {
        id: 'design-systems',
        title: 'Design Systems',
        description: 'Reusable component libraries, design tokens, and scalable style guides.',
        href: '#services-design-systems',
        iconName: 'Boxes',
      },
      {
        id: 'iconography-assets',
        title: 'Iconography & Assets',
        description: 'Custom vector icon sets and bespoke digital illustrations for product surfaces.',
        href: '#services-iconography',
        iconName: 'Shapes',
      },
      {
        id: 'typography-systems',
        title: 'Typography Systems',
        description: 'Curated font pairings, scales, and expressive typographic hierarchies.',
        href: '#services-typography',
        iconName: 'Type',
      },
      {
        id: 'rebranding-evolution',
        title: 'Rebranding & Evolution',
        description: 'Modernizing legacy brands for digital-first platforms and modern growth.',
        href: '#services-rebranding',
        iconName: 'RefreshCw',
      },
    ],
  },
  {
    id: 'no-code-dev',
    label: 'No-Code Development',
    iconName: 'Code2',
    services: [
      {
        id: 'nextjs-react-apps',
        title: 'Next.js & React Apps',
        description: 'High-performance, SSR/SSG web applications built to scale effortlessly.',
        href: '#services-nextjs',
        iconName: 'Code2',
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'Sub-second load times, Core Web Vitals, and top-tier SEO efficiency.',
        href: '#services-performance',
        iconName: 'Zap',
      },
      {
        id: 'webflow-development',
        title: 'Webflow Development',
        description: 'Pixel-perfect, responsive marketing websites with dynamic CMS power.',
        href: '#services-webflow',
        iconName: 'LayoutDashboard',
      },
      {
        id: 'interactive-3d-motion',
        title: 'Interactive 3D & Motion',
        description: 'Spatial depth, glassmorphic UI, and buttery-smooth GSAP scroll animations.',
        href: '#services-motion',
        iconName: 'Move3d',
      },
      {
        id: 'framer-websites',
        title: 'Framer Websites',
        description: 'Interactive, animated product marketing sites designed and published fast.',
        href: '#services-framer',
        iconName: 'Wand2',
      },
      {
        id: 'headless-cms-setup',
        title: 'Headless CMS Setup',
        description: 'Flexible content workflows with Sanity, Strapi, or headless CMS backends.',
        href: '#services-cms',
        iconName: 'Database',
      },
      {
        id: 'fullstack-engineering',
        title: 'Full-Stack Engineering',
        description: 'Robust APIs, cloud architecture, and secure serverless microservices.',
        href: '#services-fullstack',
        iconName: 'Server',
      },
      {
        id: 'maintenance-support',
        title: 'Maintenance & Support',
        description: 'Continuous updates, security hardening, and 99.9% uptime monitoring.',
        href: '#services-support',
        iconName: 'ShieldCheck',
      },
    ],
  },
];

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isServices?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '#services',
    isServices: true,
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

export const LANGUAGES = [
  { code: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'NP', name: 'Nepali', flag: '🇳🇵' },
];

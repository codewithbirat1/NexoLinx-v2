export interface HeroSlideData {
  id: string;
  tabNumber: string;
  tabLabel: string;
  tag: string;
  heading: string[];
  subtitlePrefix: string;
  highlightWord?: string;
  subtitleSuffix?: string;
  hasTypewriter?: boolean;
  typewriterWords?: string[];
  primaryCta: {
    label: string;
    hoverLabel?: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    hoverLabel?: string;
    href: string;
  };
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 'creative',
    tabNumber: '01',
    tabLabel: 'Tech Solution',
    tag: 'Your Tech Solution',
    heading: ['Leading IT & Software', 'Company in Butwal'],
    subtitlePrefix: 'We craft ',
    hasTypewriter: true,
    typewriterWords: ['scalable', 'stunning', 'intuitive', 'high-impact', 'future-ready'],
    subtitleSuffix: ' digital solutions for businesses in Nepal & worldwide.',
    primaryCta: {
      label: 'Schedule Call',
      hoverLabel: "Let's Talk 🤙",
      href: 'https://calendly.com/biratpandey9/new-meeting',
    },
    secondaryCta: {
      label: 'Explore Work',
      hoverLabel: 'Open ↗',
      href: '#work',
    },
  },
  {
    id: 'full-stack',
    tabNumber: '02',
    tabLabel: 'Web & Mobile',
    tag: 'Full-Stack Apps',
    heading: ['Engineering Scalable Platforms', '& Mobile Experiences'],
    subtitlePrefix: 'Next.js, React Native, Cloud APIs and ',
    highlightWord: 'Custom Software',
    subtitleSuffix: ' crafted for growing brands and startups.',
    primaryCta: {
      label: 'Explore Services',
      href: '#services',
    },
    secondaryCta: {
      label: 'See Our Work',
      href: '#work',
    },
  },
  {
    id: 'end-to-end',
    tabNumber: '03',
    tabLabel: 'End to End',
    tag: 'End to End',
    heading: ['From Idea To', 'Shipped Product'],
    subtitlePrefix: 'Strategy, UI/UX Design, Full-Stack Builds, and ',
    highlightWord: 'SEO Growth',
    subtitleSuffix: ' from one dedicated engineering team.',
    primaryCta: {
      label: 'Book a Discovery Call',
      href: 'https://calendly.com/biratpandey9/new-meeting',
    },
    secondaryCta: {
      label: 'Our Process',
      href: '#services',
    },
  },
];

export interface PartnerLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'VaultSkin', src: '/assets/startups/cli-1.webp', width: 138, height: 32 },
  { name: 'Crimson', src: '/assets/startups/cli-2.webp', width: 153, height: 32 },
  { name: 'Band Jhankar', src: '/assets/startups/cli-3.webp', width: 143, height: 32 },
  { name: 'Avante', src: '/assets/startups/cli-4.webp', width: 199, height: 32 },
  { name: 'Velvet', src: '/assets/startups/cli-5.webp', width: 176, height: 30 },
  { name: 'R.V Cafe', src: '/assets/startups/cli-6.webp', width: 150, height: 24 },
  { name: 'Somang', src: '/assets/startups/cli-7.svg', width: 88, height: 30 },
  { name: 'Vault Skin', src: '/assets/startups/cli-8.png', width: 156, height: 36 },
  { name: 'Revive Hub', src: '/assets/startups/cli-9.png', width: 165, height: 36 },
];
export const TOOL_ICONS = [
  { name: 'VaultSkin', src: '/assets/hero/clients/1.png', width: 32, height: 32 },
  { name: 'Avante', src: '/assets/hero/clients/7.png', width: 32, height: 32 },
  { name: 'GyanJyoti', src: '/assets/hero/clients/8.webp', width: 32, height: 32 },
  { name: 'Crimson', src: '/assets/hero/clients/2.png', width: 32, height: 32 },
  { name: 'Band Jhankar', src: '/assets/hero/clients/3.png', width: 32, height: 32 },
  { name: 'Somang', src: '/assets/hero/clients/4.png', width: 32, height: 32 },
  { name: 'Velvet', src: '/assets/hero/clients/5.png', width: 32, height: 32 },
  { name: 'R.V Cafe', src: '/assets/hero/clients/6.png', width: 32, height: 32 },
  
];

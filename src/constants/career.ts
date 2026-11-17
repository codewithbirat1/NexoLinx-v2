
import {
  Lightbulb,
  GraduationCap,
  Users,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Globe,
  HeartHandshake,
  Rocket,
  Monitor,
  type LucideIcon,
} from 'lucide-react';


export interface CareerHeroContent {
  badge: string;
  headline: string;
  highlightedHeadline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const CAREER_HERO: CareerHeroContent = {
  badge: 'Careers at Nexo Linx',
  headline: "Build What's Next.",
  highlightedHeadline: 'Build It With Us.',
  description:
    'We bring ideas to life through design, technology, and collaboration. Join a team that values creativity, curiosity, and meaningful digital experiences.',
  primaryCta: {
    label: 'Explore Opportunities',
    href: '#positions',
  },
  secondaryCta: {
    label: 'Discover Our Culture',
    href: '#culture',
  },
};


/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface CareerRole {
  title: string;
  department: string;
  category: 'Engineering' | 'Design' | 'Marketing';
  type: 'Full-time' | 'Project-based' | 'Part-time';
  arrangement: 'Hybrid' | 'Remote' | 'On-site';
  level: string;
  location: string;
  description: string;
  skills: string[];
  emailSubject: string;
}

 export interface WorkAdvantage {
  icon: LucideIcon;
  title: string;
  body: string;
}

 export interface HeroHighlight {
  icon: LucideIcon;
  label: string;
  detail: string;
}

/* =============================================================================
 * STATIC DATA
 * ============================================================================= */

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    icon: Globe,
    label: 'Remote-Friendly',
    detail: 'Work from anywhere in Nepal or fully remote',
  },
  {
    icon: HeartHandshake,
    label: 'Mentorship',
    detail: 'Learn directly from senior designers & engineers',
  },
  {
    icon: Rocket,
    label: 'Real Client Work',
    detail: 'Ship products used by real businesses, day one',
  },
  {
    icon: Monitor,
    label: 'Modern Stack',
    detail: 'Next.js, TypeScript, Figma, and cutting-edge tools',
  },
];

 export const WORK_ADVANTAGES: WorkAdvantage[] = [
  {
    icon: Lightbulb,
    title: 'Creative Freedom',
    body: 'Bring your ideas forward and contribute to meaningful digital experiences that shape real products and businesses.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    body: 'Explore new technologies, deepen your skills, and keep growing through hands-on experience and thoughtful mentorship.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    body: 'Work alongside people who value teamwork, clear communication, and sharing wins across the process.',
  },
  {
    icon: Briefcase,
    title: 'Meaningful Projects',
    body: 'Contribute to work that has purpose — from strategy and design to product development and launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Ownership & Responsibility',
    body: 'Take initiative, make decisions, and see the direct impact of the work you care about most.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    body: 'Build experience, sharpen capability, and create momentum that supports long-term career development.',
  },
];

export const CULTURE_PRINCIPLES: string[] = [
  'Collaboration across product, design, and engineering',
  'Creative thinking grounded in research and clarity',
  'Problem-solving with ownership and accountability',
  'Technical excellence without unnecessary complexity',
  'Open communication and thoughtful feedback',
  'Continuous improvement and learning through real work',
];

export const CAREER_ROLES: CareerRole[] = [
  {
    title: 'Frontend Developer',
    department: 'Frontend Development',
    category: 'Engineering',
    type: 'Full-time',
    arrangement: 'Hybrid',
    level: 'Mid to Senior',
    location: 'Butwal / Remote',
    description:
      'Help craft polished, high-performing digital experiences with careful attention to UX, accessibility, and product detail.',
    skills: ['React', 'Next.js', 'TypeScript', 'Performance', 'UI Systems'],
    emailSubject: 'Frontend%20Developer%20Application',
  },
  {
    title: 'Product Designer',
    department: 'UI/UX Design',
    category: 'Design',
    type: 'Full-time',
    arrangement: 'Hybrid',
    level: 'Mid to Senior',
    location: 'Butwal / Remote',
    description:
      'Shape thoughtful experiences, clarify product direction, and turn complex needs into elegant, useful interfaces.',
    skills: ['UX Strategy', 'Figma', 'Research', 'Wireframes', 'Design Systems'],
    emailSubject: 'Product%20Designer%20Application',
  },
  {
    title: 'Full-Stack Engineer',
    department: 'Full-Stack Development',
    category: 'Engineering',
    type: 'Project-based',
    arrangement: 'Remote',
    level: 'Mid to Senior',
    location: 'Remote',
    description:
      'Build scalable, reliable product experiences across front and back end with a focus on performance and maintainability.',
    skills: ['Node.js', 'API Design', 'Databases', 'Architecture', 'Delivery'],
    emailSubject: 'Full-Stack%20Engineer%20Application',
  },
];

export const FILTER_CATEGORIES = ['All', 'Engineering', 'Design', 'Marketing'] as const;
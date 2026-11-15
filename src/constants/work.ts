/**
 * Complete Nexo Linx Work Portfolio Dataset
 * Faithfully reproducing the exact 7-row asymmetrical Bento Grid from reference image.
 */

export interface WorkProject {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  colSpan: string; // Tailwind grid span
  aspectRatio: string;
  category: string;
  href?: string;
}

export const WORK_PAGE_HEADER = {
  badge: 'Portfolio & Case Studies',
  headline: 'Our recent work. A sample of products we\'ve shipped worldwide.',
  subheading:
    'From venture-backed MVPs to enterprise platforms, explore how we partner with founders and product teams to craft high-conversion software, modern mobile apps, and robust design systems.',
  topFilters: ['All work', 'Websites', 'UI / UX', 'Mobile apps', 'Branding'] as string[],
  categoryPills: [
    'All categories',
    'AI',
    'Creative SaaS',
    'E-commerce',
    'Entertainment',
    'FinTech',
    'Gaming',
    'HR Tech',
    'Logistics',
    'Real Estate',
    'Transportation',
  ] as string[],
};

export const WORK_CATEGORIES = [
  'All categories',
  'AI',
  'Creative SaaS',
  'E-commerce',
  'Entertainment',
  'FinTech',
  'Gaming',
  'HR Tech',
  'Logistics',
  'Real Estate',
  'Transportation',
] as const;

export const WORK_BENTO_PROJECTS: WorkProject[] = [
  // --- ROW 1: [6 cols] + [3 cols] + [3 cols] ---
  {
    id: 'ebike-rental-app',
    badge: 'TRANSPORTATION',
    title: 'E-Bike Rental App',
    description: 'Find, unlock and ride an E-Bike in under a minute.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/10]',
    category: 'Transportation',
  },
  {
    id: 'personal-budget-app',
    badge: 'FINTECH',
    title: 'Personal Budget App',
    description: 'Helping People Track Spending and Save Toward Their Goals.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'FinTech',
  },
  {
    id: 'fantasy-rpg-game',
    badge: 'GAMING',
    title: 'Fantasy RPG Game',
    description: 'Designing an Epic Hero-Collecting Game for Mobile.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'Gaming',
  },

  // --- ROW 2: [6 cols] + [6 cols] ---
  {
    id: 'real-estate-dashboard',
    badge: 'REAL ESTATE',
    title: 'Real Estate Dashboard',
    description: 'Giving Property Teams Clear View of Sales, Rentals and Listings.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/9]',
    category: 'Real Estate',
  },
  {
    id: 'luxury-jewellery-website',
    badge: 'E-COMMERCE',
    title: 'Luxury Jewellery Website',
    description: 'Crafting an Online Experience as Refined as the Jewellery Itself.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/9]',
    category: 'E-commerce',
  },

  // --- ROW 3: [3 cols] + [6 cols] + [3 cols] ---
  {
    id: 'bloom-money',
    badge: 'FINTECH',
    title: 'Bloom Money',
    description: 'Empowering communities with financial solutions.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'FinTech',
  },
  {
    id: 'ai-automation-dashboard',
    badge: 'CREATIVE SAAS',
    title: 'AI Automation Dashboard',
    description: 'Helping Teams Run, Track and Measure Their AI Agents.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/9]',
    category: 'Creative SaaS',
  },
  {
    id: 'mobile-gaming-rewards',
    badge: 'ENTERTAINMENT',
    title: 'Mobile Gaming Rewards',
    description: 'Turning Quizzes and Trending Games into an Engaging Mobile Experience.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'Entertainment',
  },

  // --- ROW 4: [6 cols] + [6 cols] ---
  {
    id: 'ai-legal-intake',
    badge: 'AI',
    title: 'AI Legal Intake',
    description: 'A Website That Shows Law Firms How AI Can Handle Client Calls 24/7.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/9]',
    category: 'AI',
  },
  {
    id: 'ai-songwriting-platform',
    badge: 'CREATIVE SAAS',
    title: 'AI Songwriting Platform',
    description: 'Helping Songwriters at Every Level Write Lyrics Faster With AI.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/9]',
    category: 'Creative SaaS',
  },

  // --- ROW 5: [6 cols] + [3 cols] + [3 cols] ---
  {
    id: 'trading-decision-journal',
    badge: 'FINTECH',
    title: 'Trading Decision Journal',
    description: 'Helping Traders Build Discipline by Documenting Every Decision.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-6',
    aspectRatio: 'aspect-[16/10]',
    category: 'FinTech',
  },
  {
    id: 'slot-demo-platform',
    badge: 'ENTERTAINMENT',
    title: 'Slot Demo Platform',
    description: 'Helping Gaming Operators Discover and Try Slot Games.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'Entertainment',
  },
  {
    id: 'land-listing-marketplace',
    badge: 'REAL ESTATE',
    title: 'Land Listing Marketplace',
    description: 'Making It Simple to Buy and Sell Rural Land Across the Country.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
    aspectRatio: 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]',
    category: 'Real Estate',
  },

  // --- ROW 6: [4 cols] + [4 cols] + [4 cols] ---
  {
    id: 'ai-applicant-tracking',
    badge: 'HR TECH',
    title: 'AI Applicant Tracking',
    description: 'HR Teams Automate Hiring Pipelines, Tasks, and Follow-Ups With AI.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectRatio: 'aspect-[4/3]',
    category: 'HR Tech',
  },
  {
    id: 'ship-track',
    badge: 'LOGISTICS',
    title: 'Ship Track',
    description: 'Real-time shipment tracking and delivery management at your fingertips.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    aspectRatio: 'aspect-[4/3]',
    category: 'Logistics',
  },
  {
    id: 'gig-desk',
    badge: 'FINTECH',
    title: 'Gig Desk',
    description: 'All-in-one dashboard to manage gigs, tours, venues, and payrolls.',
    image: '/image.png',
    colSpan: 'col-span-12 sm:col-span-12 lg:col-span-4',
    aspectRatio: 'aspect-[4/3]',
    category: 'FinTech',
  },

  // --- ROW 7: [4 cols] + [8 cols] ---
  {
    id: 'villa-vault',
    badge: 'REAL ESTATE',
    title: 'Villa Vault',
    description: 'Discover and book the world\'s finest luxury villas with ease.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-4',
    aspectRatio: 'aspect-[4/3]',
    category: 'Real Estate',
  },
  {
    id: 'web3-freelance-marketplace',
    badge: 'FINTECH',
    title: 'Web3 Freelance Marketplace',
    description: 'A Web3 Freelance Marketplace with a Built-in Crypto Wallet.',
    image: '/image.png',
    colSpan: 'col-span-12 lg:col-span-8',
    aspectRatio: 'aspect-[16/9] lg:aspect-[21/10]',
    category: 'FinTech',
  },
];

// Backwards compatibility aliases
export const WORK_PROJECTS = WORK_BENTO_PROJECTS;

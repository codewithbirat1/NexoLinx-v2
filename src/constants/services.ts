/**
 * Services Experience Constants & Datasets — Nexo Linx Pvt. Ltd.
 * Centralized, typed single source of truth for /services and /services/[slug]
 */

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  categoryNumber: string;
  heroImage: string;
  galleryImages: string[];
  subServices: ServiceOffering[];
  whatWeDeliver: string[];
  keyBenefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  relatedServices: string[];
  faq: ServiceFAQ[];
}

export interface ServicesHeroData {
  breadcrumb: {
    homeLabel: string;
    servicesLabel: string;
  };
  badge: string;
  headline: string;
  description: string;
  coreFocusList: string[];
  calloutCard: {
    badge: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export interface ServicesApproachPillar {
  number: string;
  title: string;
  description: string;
}

export interface ServicesApproachData {
  tagline: string;
  headline: string;
  subheading: string;
  pillars: ServicesApproachPillar[];
}

export interface ServicesWhyCard {
  tag: string;
  title: string;
  body: string;
}

export interface ServicesWhyData {
  tagline: string;
  headline: string;
  subheading: string;
  cards: ServicesWhyCard[];
}

export interface ServicesCTAData {
  tagline: string;
  headline: string;
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

/* =============================================================================
 * 1. SERVICES OVERVIEW PAGE DATA
 * ============================================================================= */

export const SERVICES_PAGE_HERO: ServicesHeroData = {
  breadcrumb: {
    homeLabel: 'Home',
    servicesLabel: 'Services',
  },
  badge: 'Nexo Linx Capabilities',
  headline: 'Growth-Driven Digital & Technology Services',
  description:
    'From strategy, bespoke design, and modern web applications to mobile software, 3D modeling, and marketing — we engineer digital products that perform, convert, and scale for ambitious brands.',
  coreFocusList: [
    'Web & Mobile Architecture',
    'Spatial 3D & Motion',
    'Data-Driven Growth',
  ],
  calloutCard: {
    badge: 'Direct Collaboration',
    title: 'Ready to build a product users love?',
    description:
      "Book a discovery conversation with our engineering and design team. We'll evaluate your product roadmap, technical architecture, and growth timeline.",
    primaryCta: {
      label: 'Schedule Free Discovery',
      href: 'https://calendly.com/biratpandey9/new-meeting',
    },
    secondaryCta: {
      label: 'Inquiry Form',
      href: '/contact',
    },
  },
};

export const SERVICES_PAGE_CATALOG_HEADER = {
  tagline: 'What We Deliver',
  headline: 'Comprehensive Digital Capabilities',
  subheading:
    'Explore our seven core disciplines engineered to build, launch, and scale modern products.',
};

export const SERVICES_PAGE_APPROACH: ServicesApproachData = {
  tagline: 'Our Approach',
  headline: 'What Sets Our Approach Apart',
  subheading:
    'How we partner with founders and product teams — from first discovery call to final deployment and handoff.',
  pillars: [
    {
      number: '01',
      title: 'Strategic Vision',
      description:
        'We partner to clarify business goals, unit economics, and target audience needs before committing to engineering lines.',
    },
    {
      number: '02',
      title: 'Senior Execution',
      description:
        'Experienced engineers and designers who understand modern product velocity, maintainable patterns, and high-conversion UX.',
    },
    {
      number: '03',
      title: 'Build to Learn & Scale',
      description:
        'Rapid deployment loops and prototype sprints that put working software in user hands to gather truthful feedback early.',
    },
    {
      number: '04',
      title: 'Seamless Integration',
      description:
        'Transparent communication via Slack, Figma, and GitHub, integrating with your internal teams without friction.',
    },
  ],
};

export const SERVICES_PAGE_WHY: ServicesWhyData = {
  tagline: 'Why Nexo Linx',
  headline: 'Why Ambitious Brands Partner With Us',
  subheading:
    'Hundreds of agencies can write code or draw screens. Here is how our commitment to craftsmanship makes a real business difference.',
  cards: [
    {
      tag: 'Craft & Polish',
      title: 'High-Converting Craftsmanship',
      body: 'Digital products designed with obsessive visual rhythm, clean typography, fast performance, and zero bloat.',
    },
    {
      tag: 'Engineering',
      title: 'Modern Architecture Standards',
      body: 'Built on Next.js, React, TypeScript, and robust cloud APIs ensuring longevity, stability, and fast page loads.',
    },
    {
      tag: 'Collaboration',
      title: 'Transparent Direct Communication',
      body: 'No bureaucratic layers. You speak directly with the architects, designers, and engineers executing your roadmap.',
    },
    {
      tag: 'Location Advantage',
      title: 'Global Delivery from Nepal',
      body: 'World-class digital engineering headquartered in Butwal & Tilottama, serving local enterprises and international startups.',
    },
    {
      tag: 'Full Spectrum',
      title: 'All Core Capabilities in One Place',
      body: 'From branding, 3D spatial models, and mobile apps to technical SEO and marketing, we bridge design and code under one roof.',
    },
    {
      tag: 'Ownership',
      title: 'Long-Term Partnership Mentality',
      body: 'We treat your launch, security, uptime, and user adoption with the same dedication as if it were our own proprietary product.',
    },
  ],
};

export const SERVICES_PAGE_CTA: ServicesCTAData = {
  tagline: 'Start Your Project',
  headline: "Let's build something remarkable together.",
  description:
    "Tell us about your product goals, technical hurdles, or timeline. We'll schedule an insightful discovery call to outline the right scope and engineering approach.",
  primaryCta: {
    label: 'Book a Free Discovery Call',
    href: 'https://calendly.com/biratpandey9/new-meeting',
  },
  secondaryCta: {
    label: 'Submit Project Inquiry',
    href: '/contact',
  },
};

/* =============================================================================
 * 2. SEVEN DETAILED SERVICES (SOURCE OF TRUTH)
 * ============================================================================= */

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Custom websites and web applications built for speed, conversion, and scale.',
    shortDescription:
      'Custom websites and web applications that improve online presence and user experience. Includes custom web design, e-commerce solutions, SEO optimization, and responsive design.',
    overview:
      'We architect, design, and engineer bespoke web platforms tailored to ambitious businesses in Nepal and worldwide. From blazing-fast marketing websites to complex cloud applications and e-commerce systems, our engineering focuses on high-conversion design, accessibility, performance, and maintainable clean code.',
    categoryNumber: '01',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-bloom-money.jpg',
      '/assets/showcase/project-villa-vault.jpg',
    ],
    subServices: [
      {
        id: 'custom-web-applications',
        title: 'Custom Web Applications',
        description:
          'Scalable web apps crafted with Next.js, React, and TypeScript engineered for performance and clean business logic.',
      },
      {
        id: 'ecommerce-solutions',
        title: 'E-Commerce Solutions',
        description:
          'High-converting online stores with streamlined checkout, secure payment gateway integrations, and catalog management.',
      },
      {
        id: 'seo-speed-optimization',
        title: 'SEO & Performance Engineering',
        description:
          'Sub-second load times, Core Web Vitals optimization, semantic schema markup, and search-first site architecture.',
      },
      {
        id: 'responsive-design-systems',
        title: 'Responsive Web Design',
        description:
          'Pixel-precise interfaces that adapt smoothly across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      },
    ],
    whatWeDeliver: [
      'Tailored Next.js / React application codebase with clean TypeScript architecture',
      'Fully responsive, mobile-first layouts tested across modern devices and browsers',
      'SEO foundational setup with metadata, OpenGraph, sitemap, and JSON-LD schema',
      'Lightning-fast page load speeds achieving 90+ Google PageSpeed Core Web Vitals',
      'Integrated CMS or database solution for intuitive self-serve content updates',
      'Deployment pipeline setup on Vercel, AWS, or custom cloud servers with SSL',
    ],
    keyBenefits: [
      {
        title: 'Higher Conversion Rates',
        description:
          'Clean user flows, fast interactions, and intentional visual hierarchy convert visitors into paying inquiries.',
      },
      {
        title: 'Future-Proof Architecture',
        description:
          'Built with modern industry standards, modular components, and maintainable code that scales as your business grows.',
      },
      {
        title: 'Search Engine Visibility',
        description:
          'Engineered for crawlability and indexation so your brand ranks higher in competitive local and global search results.',
      },
      {
        title: 'Zero Bloat Performance',
        description:
          'Optimized bundle sizes, clean asset delivery, and efficient caching keep your website responsive under peak traffic.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        description:
          'We evaluate your business goals, target audience, technical specifications, and content structure.',
      },
      {
        step: '02',
        title: 'UI/UX & Interactive Design',
        description:
          'We craft user journeys, wireframes, and high-fidelity prototypes aligned with your brand identity.',
      },
      {
        step: '03',
        title: 'Modern Front-End & Backend',
        description:
          'Clean, component-driven engineering with robust API integration, validation, and performance tuning.',
      },
      {
        step: '04',
        title: 'QA, Launch & Handoff',
        description:
          'Rigorous testing across screen sizes, accessibility audits, deployment configuration, and client training.',
      },
    ],
    relatedServices: ['app-development', 'graphics-design', 'digital-marketing'],
    faq: [
      {
        question: 'What modern technologies do you use for web development?',
        answer:
          'We primarily build using modern React, Next.js, TypeScript, Tailwind CSS, Node.js, and cloud platforms. We choose the right stack based on your product needs.',
      },
      {
        question: 'Do you build custom designs or use generic templates?',
        answer:
          'Every website we engineer is designed bespoke for your brand. We do not use cookie-cutter pre-made themes.',
      },
      {
        question: 'Can you optimize or redesign our existing website?',
        answer:
          'Yes. We can refactor existing codebases, improve load speeds, enhance user journeys, and modernize the visual aesthetic.',
      },
    ],
  },
  {
    slug: 'graphics-design',
    title: 'Graphics Design',
    tagline: 'Distinctive visual identities and graphic systems that build memorable brand recognition.',
    shortDescription:
      'Eye-catching designs that help a brand stand out. Cohesive branding, marketing collateral, digital assets, and visual systems.',
    overview:
      'Your visual presence communicates your standard of quality before a visitor reads a single word. Nexo Linx crafts comprehensive brand identity systems, marketing assets, and digital design collateral that establish trust, elevate perception, and leave a lasting impression in competitive markets.',
    categoryNumber: '02',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-bloom-money.jpg',
      '/assets/showcase/project-gig-desk.png',
    ],
    subServices: [
      {
        id: 'brand-identity-systems',
        title: 'Brand Identity & Guidelines',
        description:
          'Logo design, typography systems, color palettes, and comprehensive brand books for consistent cross-channel presence.',
      },
      {
        id: 'marketing-collateral',
        title: 'Marketing & Campaign Collateral',
        description:
          'High-impact social banners, brochures, print materials, presentation decks, and event branding assets.',
      },
      {
        id: 'packaging-merchandise',
        title: 'Packaging & Print Design',
        description:
          'Tactile physical packaging, product labels, and branded merchandise crafted with print-ready precision.',
      },
      {
        id: 'digital-product-branding',
        title: 'Digital Asset Design',
        description:
          'Custom vector iconography, illustration systems, and UI assets aligned with your product interface.',
      },
    ],
    whatWeDeliver: [
      'Comprehensive vector logo suite (horizontal, stacked, icon marks in SVG, PNG, EPS)',
      'Brand guidelines handbook specifying typography, color systems, clear space, and misuse rules',
      'Digital social media templates and marketing collateral formatted for standard platforms',
      'Print-ready stationery files including business cards, letterheads, and presentation templates',
      'Organized source design files in Figma, Adobe Illustrator, and Photoshop',
    ],
    keyBenefits: [
      {
        title: 'Instant Brand Recognition',
        description:
          'A cohesive visual language ensures your brand is immediately identifiable across web, social, and print.',
      },
      {
        title: 'Professional Credibility',
        description:
          'Polished graphic craftsmanship signals reliability and high standards to clients, partners, and investors.',
      },
      {
        title: 'Execution Consistency',
        description:
          'Clear guidelines give internal teams and external partners an exact blueprint to maintain brand integrity.',
      },
      {
        title: 'Multi-Channel Versatility',
        description:
          'Assets engineered to reproduce cleanly from tiny mobile app icons to large-format outdoor billboards.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Brand Discovery & Brief',
        description:
          'We understand your audience, market positioning, competitors, and aesthetic aspirations.',
      },
      {
        step: '02',
        title: 'Concept Development',
        description:
          'We explore visual territories, typography combinations, color palettes, and directional sketches.',
      },
      {
        step: '03',
        title: 'System Refinement',
        description:
          'We refine the selected concept into a robust visual system with collateral mockups.',
      },
      {
        step: '04',
        title: 'Guidelines & Asset Export',
        description:
          'Final production files are packaged in all industry-standard formats alongside usage documentation.',
      },
    ],
    relatedServices: ['web-development', 'social-media-management', 'editing'],
    faq: [
      {
        question: 'What source files will we receive after project completion?',
        answer:
          'You receive full master source files (Figma, AI, EPS, PDF) along with web-optimized PNG, JPG, and SVG exports.',
      },
      {
        question: 'Can you work with our existing brand guidelines?',
        answer:
          'Absolutely. We frequently create new marketing collateral, campaigns, and digital assets respecting established brand systems.',
      },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'High-performance mobile applications engineered for seamless iOS and Android user experiences.',
    shortDescription:
      'User-friendly mobile apps for Nepal and global markets that work seamlessly across devices with intuitive UX and stable architecture.',
    overview:
      'We engineer native and cross-platform mobile apps that combine fluid native interactions with resilient backend architecture. Whether launching an early-stage startup MVP or extending an established business platform into mobile, we build reliable, secure, and user-centric iOS and Android applications.',
    categoryNumber: '03',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-gig-desk.png',
      '/assets/showcase/project-ship-track.jpg',
    ],
    subServices: [
      {
        id: 'cross-platform-apps',
        title: 'Cross-Platform App Engineering',
        description:
          'Cost-effective single-codebase development using modern frameworks delivering native feel on both iOS and Android.',
      },
      {
        id: 'native-mobile-interfaces',
        title: 'Mobile UI/UX Design',
        description:
          'Touch-optimized user journeys, gesture-driven interfaces, and accessibility following Apple HIG and Google Material guidelines.',
      },
      {
        id: 'backend-api-integration',
        title: 'Cloud Backend & APIs',
        description:
          'Scalable REST / GraphQL endpoints, real-time WebSockets, push notifications, and resilient offline data synchronization.',
      },
      {
        id: 'store-submission-maintenance',
        title: 'App Store Deployment',
        description:
          'End-to-end guidance through Apple App Store and Google Play Store review processes, testing, and continuous maintenance.',
      },
    ],
    whatWeDeliver: [
      'Production-ready iOS and Android app binaries signed and configured for app store release',
      'Complete frontend mobile source code with structured state management and clean components',
      'Integration with push notifications, payment gateways, authentication, and analytics',
      'Comprehensive app store assets including screenshots, metadata, and privacy policies',
      'Post-launch stabilization, crash monitoring, and version maintenance support',
    ],
    keyBenefits: [
      {
        title: 'Direct Audience Engagement',
        description:
          'Push notifications, homescreen presence, and fast native gestures keep users connected to your product daily.',
      },
      {
        title: 'Seamless Device Performance',
        description:
          'Smooth 60fps animations, optimized memory usage, and background synchronization deliver a premium experience.',
      },
      {
        title: 'Secure Cloud Architecture',
        description:
          'Encrypted local storage, secure token authentication, and hardened endpoints safeguard user data.',
      },
      {
        title: 'Faster Time to Market',
        description:
          'Modern cross-platform development enables concurrent iOS and Android launches without duplicating engineering overhead.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Product Scope & User Flows',
        description:
          'Defining core feature loops, screen architecture, technical requirements, and target OS versions.',
      },
      {
        step: '02',
        title: 'Interactive Prototyping',
        description:
          'Clickable mobile prototypes in Figma to validate touch gestures, navigation patterns, and user ergonomics.',
      },
      {
        step: '03',
        title: 'Mobile Engineering & Testing',
        description:
          'Building features in sprint cycles with continuous device testing on physical iOS and Android hardware.',
      },
      {
        step: '04',
        title: 'Store Publishing & Launch',
        description:
          'Submission to TestFlight, Google Play internal tracks, and final production release with crash tracking.',
      },
    ],
    relatedServices: ['web-development', 'graphics-design', 'digital-marketing'],
    faq: [
      {
        question: 'Do you build for both iOS and Android simultaneously?',
        answer:
          'Yes. We leverage modern cross-platform architectures (such as React Native) to deliver high-performance applications for both platforms from a unified codebase.',
      },
      {
        question: 'Will you help us get approved on the App Store and Google Play?',
        answer:
          'Yes, we manage the complete submission process, ensuring all guidelines, privacy disclosures, and signing certificates meet store requirements.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Targeted marketing strategies to grow online presence, acquire qualified leads, and connect with audiences.',
    shortDescription:
      'Targeted marketing strategies to grow online presence and connect with the audience through data-driven campaigns and optimization.',
    overview:
      'Traffic without intent doesn’t grow a business. Nexo Linx develops tailored digital marketing strategies that connect your brand with the right audience across search engines, social channels, and advertising networks. We focus on measurable conversion, sustainable customer acquisition, and brand visibility.',
    categoryNumber: '04',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-bloom-money.jpg',
      '/assets/showcase/project-ship-track.jpg',
    ],
    subServices: [
      {
        id: 'search-engine-optimization',
        title: 'Search Engine Optimization (SEO)',
        description:
          'On-page, technical, and local SEO strategies to rank your services prominently for relevant high-intent search queries.',
      },
      {
        id: 'performance-advertising',
        title: 'Performance Paid Ads (PPC)',
        description:
          'Targeted Google Search, Display, and Meta advertising campaigns engineered to maximize return on ad spend (ROAS).',
      },
      {
        id: 'conversion-rate-optimization',
        title: 'Conversion Rate Optimization (CRO)',
        description:
          'Landing page audits, heatmaps, and funnel optimization to turn existing visitors into qualified business leads.',
      },
      {
        id: 'content-growth-strategy',
        title: 'Content & Inbound Strategy',
        description:
          'Strategic editorial calendars, copywriting, and value-focused content that positions your brand as an authority.',
      },
    ],
    whatWeDeliver: [
      'Comprehensive market and keyword research targeting high-intent commercial terms',
      'Technical SEO audit and implementation plan resolving indexation and metadata gaps',
      'Configured ad campaigns across Google and Meta platforms with targeted audience cohorts',
      'Conversion-focused landing page recommendations and performance tracking setup',
      'Transparent monthly analytics reports highlighting traffic, leads, and acquisition cost',
    ],
    keyBenefits: [
      {
        title: 'Measurable Business Growth',
        description:
          'Every campaign is tied to concrete business metrics: leads, phone calls, form submissions, and revenue.',
      },
      {
        title: 'Compound Search Traffic',
        description:
          'Organic SEO enhancements build sustainable, compounding visibility that lowers reliance on paid ads over time.',
      },
      {
        title: 'Audience Precision',
        description:
          'Laser-focused demographic, geographical, and intent-based targeting prevents wasted budget on unqualified clicks.',
      },
      {
        title: 'Clear ROI Transparency',
        description:
          'Understand exactly where your marketing spend goes and how each channel contributes to bottom-line results.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Market Research',
        description:
          'Analyzing existing traffic, competitor positioning, keyword opportunities, and conversion roadblocks.',
      },
      {
        step: '02',
        title: 'Strategy & Tracking Setup',
        description:
          'Setting up Google Analytics, tag managers, conversion pixels, and mapping campaign funnels.',
      },
      {
        step: '03',
        title: 'Campaign Execution',
        description:
          'Launching targeted ad sets, publishing optimized content, and conducting technical on-site improvements.',
      },
      {
        step: '04',
        title: 'Iterate & Scale',
        description:
          'Reviewing performance data weekly, reallocating budget toward winning channels, and scaling volume.',
      },
    ],
    relatedServices: ['social-media-management', 'web-development', 'editing'],
    faq: [
      {
        question: 'How long before we see results from SEO?',
        answer:
          'While technical fixes often reflect in indexation within weeks, sustainable organic growth typically builds momentum over 3 to 6 months of consistent strategy.',
      },
      {
        question: 'Do you manage ad budgets directly?',
        answer:
          'We manage campaign strategy, ad creatives, audience targeting, and bidding optimizations while ad spend is billed transparently directly to your account.',
      },
    ],
  },
  {
    slug: '3d-modeling',
    title: '3D Modeling',
    tagline: 'Realistic 3D models and spatial visual assets that bring ideas to life with precision and detail.',
    shortDescription:
      'Realistic 3D models that bring ideas to life with precision and detail for product visualizations, architecture, and interactive web.',
    overview:
      'Static photos often fail to capture the depth, craft, and scale of innovative products and architectural concepts. Nexo Linx produces realistic 3D models, product renders, and interactive web assets that showcase products from every angle with photorealistic lighting, materials, and anatomical detail.',
    categoryNumber: '05',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-villa-vault.jpg',
      '/assets/showcase/project-bloom-money.jpg',
    ],
    subServices: [
      {
        id: 'product-visualization',
        title: 'Photorealistic Product Renders',
        description:
          'High-resolution studio renders of industrial and consumer products showcasing materials, finishes, and angles.',
      },
      {
        id: 'architectural-visualization',
        title: 'Architectural & Spatial Models',
        description:
          'Exterior and interior 3D modeling and lighting simulations for commercial properties and residential spaces.',
      },
      {
        id: 'realtime-web-3d',
        title: 'Real-Time Web 3D Assets',
        description:
          'Optimized lightweight 3D models ready for interactive web viewers (glTF/GLB) with smooth interactive performance.',
      },
      {
        id: '3d-concept-prototyping',
        title: '3D Prototyping & CAD Conversion',
        description:
          'Translating design sketches and engineering schematics into accurate 3D visual models for presentations.',
      },
    ],
    whatWeDeliver: [
      'High-resolution rendered imagery in print-ready and web-optimized formats',
      'Clean 3D geometry files (OBJ, FBX, glTF, GLB) with organized hierarchy and UV mapping',
      'Photorealistic PBR material maps (diffuse, roughness, normal, ambient occlusion)',
      'Lighting and camera setups calibrated for commercial marketing and catalog presentations',
      '360-degree turntable renders or interactive browser-compatible model packages',
    ],
    keyBenefits: [
      {
        title: 'Pre-Production Showcase',
        description:
          'Market and validate physical products before committing to expensive manufacturing and physical photoshoots.',
      },
      {
        title: 'Total Creative Control',
        description:
          'Change colors, materials, studio lighting, and camera perspectives on demand without restaging physical sets.',
      },
      {
        title: 'Interactive Engagement',
        description:
          'Give web visitors the ability to rotate, inspect, and explore products in three dimensions, boosting confidence.',
      },
      {
        title: 'Flawless Visual Fidelity',
        description:
          'Eliminate physical imperfections, dust, and reflections for pristine, high-end commercial presentations.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Reference & CAD Ingestion',
        description:
          'Reviewing physical dimensions, blueprints, photo references, and material specifications.',
      },
      {
        step: '02',
        title: 'Geometry & Topo Modeling',
        description:
          'Building accurate poly geometry with clean edge flow and proper scale proportions.',
      },
      {
        step: '03',
        title: 'Materials, Shading & Lighting',
        description:
          'Applying realistic physically-based materials, custom textures, and photographic studio lighting.',
      },
      {
        step: '04',
        title: 'Rendering & Post-Production',
        description:
          'High-bitrate final rendering, color grading, and format optimization for digital and print distribution.',
      },
    ],
    relatedServices: ['graphics-design', 'web-development', 'editing'],
    faq: [
      {
        question: 'Can you work from basic 2D sketches or photographs?',
        answer:
          'Yes. We can model directly from reference photographs, dimensioned sketches, or existing CAD engineering files.',
      },
      {
        question: 'Are your 3D models suitable for interactive websites?',
        answer:
          'Yes. We specialize in low-poly optimized glTF/GLB models with compressed textures specifically for interactive web 3D experiences.',
      },
    ],
  },
  {
    slug: 'editing',
    title: 'Editing',
    tagline: 'High-quality video and photo editing that transforms raw footage into compelling brand stories.',
    shortDescription:
      'High-quality video and photo editing. Transforming raw visuals into cinematic, polished media assets for commercial campaigns and social channels.',
    overview:
      'In a crowded digital ecosystem, high-production media captivates attention and reinforces standard of quality. Nexo Linx provides professional video and photo post-production — cutting raw footage, calibrating color, refining audio, and designing visual rhythm that tells your story with clarity and emotional impact.',
    categoryNumber: '06',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-bloom-money.jpg',
      '/assets/showcase/project-gig-desk.png',
    ],
    subServices: [
      {
        id: 'commercial-video-editing',
        title: 'Commercial & Brand Video Editing',
        description:
          'Narrative pacing, dynamic cuts, and cinematic assembly for corporate reels, commercials, and brand films.',
      },
      {
        id: 'social-video-reels',
        title: 'Short-Form Social Content (Reels/TikTok)',
        description:
          'Fast-paced, hook-driven vertical video editing with engaging captions and motion accents designed for social retention.',
      },
      {
        id: 'color-grading-correction',
        title: 'Professional Color Grading',
        description:
          'Precise skin-tone matching, exposure balancing, and artistic color styling that creates a cohesive cinematic look.',
      },
      {
        id: 'commercial-photo-retouching',
        title: 'Commercial Photo Retouching',
        description:
          'Product cleanup, background manipulation, lighting correction, and composite retouching for advertising.',
      },
    ],
    whatWeDeliver: [
      'Master commercial video files exported in 4K / 1080p formatted for web, broadcast, and social',
      'Vertical aspect ratio variations (9:16) tailored for Instagram Reels, YouTube Shorts, and TikTok',
      'Professional audio mix with balanced dialogue, royalty-free licensed music, and sound design',
      'Clean graphic title cards, lower-thirds, and synchronized closed captions where required',
      'High-resolution retouched imagery in web-ready and print-ready lossless formats',
    ],
    keyBenefits: [
      {
        title: 'Elevated Brand Perception',
        description:
          'Crisp pacing, balanced color, and clear sound design project the poise and polish of a market leader.',
      },
      {
        title: 'Higher Social Retention',
        description:
          'Short-form edits engineered with immediate hooks and seamless motion keep viewers watching through completion.',
      },
      {
        title: 'Multi-Platform Versatility',
        description:
          'One production shoot yields multiple aspect ratios and cut lengths maximizing the mileage of your media assets.',
      },
      {
        title: 'Fast Turnaround Reliability',
        description:
          'Structured post-production workflows ensure dependable delivery deadlines without compromising craftsmanship.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Footage Review & Storyboarding',
        description:
          'Organizing media, selecting the best takes, and establishing the narrative arc and pacing direction.',
      },
      {
        step: '02',
        title: 'Rough Cut Assembly',
        description:
          'Structuring the sequence, timing the cuts to music, and shaping the core message.',
      },
      {
        step: '03',
        title: 'Audio, Color & Graphics',
        description:
          'Color grading, audio dialogue mastering, sound effects, and integrating branded title elements.',
      },
      {
        step: '04',
        title: 'Final Export & Delivery',
        description:
          'Delivering final high-bitrate masters along with platform-specific aspect ratio cuts.',
      },
    ],
    relatedServices: ['social-media-management', 'graphics-design', '3d-modeling'],
    faq: [
      {
        question: 'Do you provide licensed background music for videos?',
        answer:
          'Yes, we source and license royalty-free commercial audio tracks that are fully cleared for corporate and social use.',
      },
      {
        question: 'What turnaround times do you typically work within?',
        answer:
          'Turnaround depends on project scope, but short-form social reels are typically completed in 2 to 4 business days.',
      },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Growing and managing social media presence to engage target audiences and build brand loyalty.',
    shortDescription:
      'Growing and managing social media presence to engage the audience through strategic content planning, community management, and consistent visual execution.',
    overview:
      'Social media is the daily front door of your brand. Nexo Linx manages and scales your presence across Instagram, LinkedIn, Facebook, and modern channels with cohesive design, targeted copywriting, proactive community interaction, and continuous performance tracking.',
    categoryNumber: '07',
    heroImage: '/image.png',
    galleryImages: [
      '/assets/showcase/project-bloom-money.jpg',
      '/assets/showcase/project-villa-vault.jpg',
    ],
    subServices: [
      {
        id: 'content-calendar-strategy',
        title: 'Strategic Content Planning',
        description:
          'Monthly editorial calendars organized around brand pillars, educational insights, and customer conversion.',
      },
      {
        id: 'visual-asset-production',
        title: 'Branded Social Creatives',
        description:
          'Cohesive carousel graphics, quote cards, motion snippets, and stories aligned with your brand identity.',
      },
      {
        id: 'community-management',
        title: 'Community & Audience Engagement',
        description:
          'Active comment monitoring, direct message handling, and community interaction that humanizes your brand.',
      },
      {
        id: 'growth-analytics-reporting',
        title: 'Analytics & Growth Optimization',
        description:
          'Data-driven monthly performance reviews assessing follower growth, reach, engagement, and click-throughs.',
      },
    ],
    whatWeDeliver: [
      'Full monthly editorial content calendar approved prior to publishing',
      'Custom visual creatives (carousels, graphics, reels) designed for maximum platform reach',
      'Engaging, voice-matched captions with strategic hashtag research and calls to action',
      'Scheduled publishing across your core social platforms at optimal audience engagement windows',
      'Monthly performance insights breakdown detailing impressions, engagement rate, and growth',
    ],
    keyBenefits: [
      {
        title: 'Consistent Brand Presence',
        description:
          'Never leave your channels inactive; maintain a steady stream of high-quality content that keeps you top of mind.',
      },
      {
        title: 'Real Audience Connection',
        description:
          'Thoughtful content and prompt community responses build trust and transform passive followers into clients.',
      },
      {
        title: 'Time & Resource Savings',
        description:
          'Free your core internal team from daily posting obligations while ensuring professional execution.',
      },
      {
        title: 'Cross-Channel Cohesion',
        description:
          'Unified brand messaging and visual aesthetics across LinkedIn, Instagram, Facebook, and digital touchpoints.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Channel Audit & Persona Profiling',
        description:
          'Evaluating existing metrics, defining target customer personas, and establishing brand voice guidelines.',
      },
      {
        step: '02',
        title: 'Monthly Calendar & Production',
        description:
          'Developing themes, writing persuasive captions, and designing visual assets for the upcoming month.',
      },
      {
        step: '03',
        title: 'Client Review & Scheduling',
        description:
          'Presenting the content calendar for review and scheduling approved posts via automated publishing tools.',
      },
      {
        step: '04',
        title: 'Engagement & Reporting',
        description:
          'Monitoring responses, engaging with community conversations, and reviewing monthly performance analytics.',
      },
    ],
    relatedServices: ['digital-marketing', 'editing', 'graphics-design'],
    faq: [
      {
        question: 'Which social media platforms do you manage?',
        answer:
          'We manage Facebook, Instagram, LinkedIn, YouTube, and X (Twitter), focusing on the platforms that matter most for your audience.',
      },
      {
        question: 'Do we get to approve posts before they go live?',
        answer:
          'Yes. All monthly content calendars and visual assets are submitted for your review and approval prior to scheduled publishing.',
      },
    ],
  },
];

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

/* Helper query functions */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((service) => service.slug);
}

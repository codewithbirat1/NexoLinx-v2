export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ContactHeaderData {
  eyebrow: string;
  title: string;
  description: string;
}
export const CONTACT_HERO = {
  badge: 'Let’s Connect',
  headline: 'Have an idea? Let’s make it happen.',
  description:
    'Whether you have a project in mind, need a digital solution, or simply want to explore possibilities, we’re here to help. Tell us what you’re thinking, and let’s create something meaningful together.',
  primaryCta: {
    label: 'Start a project',
    href: '#contact-form',
  },
  secondaryCta: {
    label: 'Explore our work',
    href: '/work',
  },
};


export const CONTACT_HEADER: ContactHeaderData = {
  eyebrow: 'Contact Us',
  title: "Let's work on what you care about!",
  description:
    "Got a project in mind? From a full custom web application to a brand-new digital experience, our team in Butwal is ready to help turn your vision into reality.",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'somang-korean',
    quote:
      '“Nexo Linx delivered our complete learning platform on time with exceptional dedication. Their engineering team managed the project flawlessly, provided clear communication, and built an interactive system that our students and instructors love using every day.”',
    author: 'Somang Team',
    role: 'Director',
    company: 'Somang Korean Bhasa',
    avatar: '/assets/hero/clients/4.png',
  },
  {
    id: 'crimson-consultancy',
    quote:
      '“The technical expertise and UI/UX capability at Nexo Linx is remarkable. They took our complex requirements and delivered an intuitive, responsive web experience that immediately boosted our client inquiries. Highly recommended for any serious business.”',
    author: 'Crimson Team',
    role: 'Managing Director',
    company: 'Crimson Consultancy',
    avatar: '/assets/hero/clients/2.png',
  },
  {
    id: 'gyanjyoti-initiative',
    quote:
      '“Partnering with Nexo Linx was a game changer for our education initiative. Their deep technical grasp, high performance optimization, and reliable support allowed us to scale seamlessly across thousands of active learners.”',
    author: 'GyanJyoti Lead',
    role: 'Platform Coordinator',
    company: 'GyanJyoti',
    avatar: '/assets/hero/clients/8.webp',
  },
];

export const COUNTRIES = [
  'Nepal',
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'Germany',
  'India',
  'Japan',
  'South Korea',
  'United Arab Emirates',
  'Other',
];

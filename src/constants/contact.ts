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

export const CONTACT_HEADER: ContactHeaderData = {
  eyebrow: 'Contact Us',
  title: "Let's work on what you care about!",
  description:
    "Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we're ready to help. Let's turn your vision into reality",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'manuel-dot-simple',
    quote:
      '“ZeeFrames delivered on time with exceptional commitment and dedication. The team managed the project exemplarily, provided daily updates, and responded swiftly to every need. Their innovative, user-centric approach and ability to blend modern design trends with intuitive functionality results in seamless digital experiences that truly impressed us”',
    author: 'Manuel J.',
    role: 'Founder',
    company: 'Dot.simple',
    avatar: '/assets/hero/clients/1.png',
  },
  {
    id: 'philip-predicthire',
    quote:
      '“The abilities of the UX designer were impressive. ZeeFrames delivered high-quality wireframes with an excellent understanding of our needs, resulting in a truly successful engagement. The team was professional, timely, and brought a positive attitude their UX/UI expertise genuinely stood out throughout the collaboration.”',
    author: 'Philip Leth-Sørensen',
    role: 'CEO',
    company: 'PredictHire',
    avatar: '/assets/hero/clients/2.png',
  },
  {
    id: 'sarah-techflow',
    quote:
      '“Working with the team was an absolute game changer for our SaaS platform. Their deep grasp of multi-tenant workflows and design systems helped us accelerate our launch by nearly two months while doubling user engagement.”',
    author: 'Sarah Jenkins',
    role: 'Head of Product',
    company: 'TechFlow',
    avatar: '/assets/hero/clients/3.png',
  },
];

export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'Netherlands',
  'United Arab Emirates',
  'Singapore',
  'Other',
];

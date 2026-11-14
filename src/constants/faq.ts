export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqHeaderData {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  reviewCount: string;
  reviewScore: string;
}

export const FAQ_HEADER: FaqHeaderData = {
  eyebrow: 'FAQS',
  title: "Questions? We've Got Answers",
  description:
    'ZeeFrames reduces design complexity & speeds up product launches with clear UX workflows, scalable visual systems, and no-code execution.',
  buttonLabel: 'Book a free call',
  buttonHref: '#contact',
  reviewCount: '8 REVIEWS',
  reviewScore: '5.0',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-ui-ux-design',
    question: 'What is UI UX design, and why is it important?',
    answer:
      'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.',
  },
  {
    id: 'ux-design-process-and-timeline',
    question: 'What is the UX design process, and how long does it take?',
    answer:
      'Our UX design process typically spans 4 to 12 weeks depending on scope, starting with discovery and user research, moving into information architecture and wireframing, high-fidelity UI design systems, and rigorous usability testing before development handoff.',
  },
  {
    id: 'types-of-ux-services',
    question: 'What types of UX design services do you offer?',
    answer:
      'We offer comprehensive end-to-end design solutions including UX research, heuristic audits, user journey mapping, wireframing, SaaS product design, cross-platform mobile app UI/UX, scalable design systems, and seamless no-code implementation.',
  },
  {
    id: 'how-zeeframes-differs',
    question: 'How does ZeeFrames UI UX Design differ from other design solutions?',
    answer:
      'We combine rigorous research-driven usability frameworks with agile production speed. Unlike traditional agencies, we integrate deep SaaS workflows, battle-tested design tokens, and direct developer handoff to ensure measurable business conversions.',
  },

];

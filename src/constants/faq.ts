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
    'Nexo Linx provides end-to-end IT services, custom software, web and mobile app development, and digital marketing in Butwal, Tilottama, and beyond.',
  buttonLabel: 'Book a free call',
  buttonHref: 'https://calendly.com/biratpandey9/new-meeting',
  reviewCount: '15+ PROJECTS',
  reviewScore: '5.0',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-services-does-nexolinx-provide',
    question: 'What services does Nexo Linx provide?',
    answer:
      'We provide complete digital solutions including custom Web Design & Development (Next.js, React, Node.js), Native & Cross-Platform Mobile App Development (React Native), Custom Software & ERP Systems, UI/UX Design & Branding in Figma, SEO Optimization, and Digital Marketing.',
  },
  {
    id: 'where-is-nexolinx-located',
    question: 'Where is Nexo Linx located and do you work with remote/international clients?',
    answer:
      'Our headquarters is located at Tilottama-4, Dinganagar, Rupandehi (Butwal area), Lumbini, Nepal. We work with both local enterprises across Nepal and international clients worldwide across the US, UK, Australia, and Asia.',
  },
  {
    id: 'project-timeline-and-process',
    question: 'What is the development timeline for a new project?',
    answer:
      'Timelines vary depending on project complexity. Standard business websites and landing experiences typically take 2 to 4 weeks, while complex full-stack web platforms, mobile apps, and SaaS systems range between 6 to 12 weeks with structured sprint milestones and weekly check-ins.',
  },
  {
    id: 'how-nexolinx-differs',
    question: 'How does Nexo Linx differ from other IT companies?',
    answer:
      'We focus on product-first thinking, clean architecture, and measurable ROI rather than generic templates. We combine technical rigor (Next.js, TypeScript, cloud deployments) with high-end modern design, complete transparency, and dedicated post-launch support.',
  },
];

export interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  href?: string;
}

export const SHOWCASE_HEADER = {
  eyebrow: "PROVEN IMPACT IN BUTWAL & BEYOND",
  title: "Our Project Showcase",
  description:
    "From educational platforms and Web3 systems to full-scale corporate web solutions, discover how Nexo Linx engineers impactful digital experiences.",
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "somang-korean-bhasa",
    category: "Education & E-Learning",
    title: "Somang Korean Bhasa:Somang Korean Bhasa: Digital Korean Education & Online Exam Preparation",
    image: "/assets/showcase/project-ship-track.jpg",
    alt: "Somang Korean Bhasa Center Learning Platform",
    href: "https://www.nexolinx.com",
  },
  {
    id: "gyanjyoti",
    category: "Free Education Initiative",
    title: "GyanJyoti: Accessible Digital E-Learning Hub for Students",
    image: "/assets/showcase/project-gig-desk.png",
    alt: "GyanJyoti E-Learning Platform",
    href: "https://www.nexolinx.com",
  },
  {
    id: "revive-hub",
    category: "Automotive & Vehicle Care",
    title: "Revive Hub: Premium Auto Repair, Dent Restoration & Professional Vehicle Care",
    image: "/assets/showcase/project-villa-vault.jpg",
    alt: "Revive Hub Digital Platform",
    href: "https://www.nexolinx.com",
  },
  {
    id: "avante-firm",
    category: "Healthcare & Business Automation",
    title: "Avante Firm: Smart Business Automation & Workflow Solutions",
    image: "/assets/showcase/project-bloom-money.jpg",
    alt: "Avante Firm Digital Presence",
    href: "https://www.nexolinx.com",
  },
];

export const SHOWCASE_CTA_BOX = {
  title: "Have a project in mind?",
  subtitle: "The proof is in our work. Explore",
  linkText: "Nexo Linx case studies",
  afterText: "and let's build yours next.",
  href: "https://calendly.com/biratpandey9/new-meeting",
};

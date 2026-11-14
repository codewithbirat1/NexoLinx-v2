export interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  href?: string;
}

export const SHOWCASE_HEADER = {
  eyebrow: "HOW WE HELPED OTHERS SUCCEED",
  title: "Our Creative Showcase",
  description:
    "We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do.",
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "ship-track",
    category: "Ship Track",
    title: "Real-time shipment tracking and delivery management at your fingertips",
    image: "/assets/showcase/project-ship-track.jpg",
    alt: "Ship Track mobile interface design showing current shipments and delivery tracking",
    href: "#",
  },
  {
    id: "gig-desk",
    category: "Gig Desk",
    title: "All-in-one dashboard to manage gigs, tours, venues, and payrolls.",
    image: "/assets/showcase/project-gig-desk.jpg",
    alt: "Gig Desk dashboard management interface on tablet",
    href: "#",
  },
  {
    id: "villa-vault",
    category: "Villa Vault",
    title: "Discover and book the world's finest luxury villas with ease",
    image: "/assets/showcase/project-villa-vault.jpg",
    alt: "Villa Vault luxury property rental web platform",
    href: "#",
  },
  {
    id: "bloom-money",
    category: "Bloom Money",
    title: "Empowering communities with financial solutions.",
    image: "/assets/showcase/project-bloom-money.jpg",
    alt: "Bloom Money cryptocurrency wallet and mobile swap interface",
    href: "#",
  },
];

export const SHOWCASE_CTA_BOX = {
  title: "Your project here",
  subtitle: "The proof is in our work. Check out",
  linkText: "Nexo Linx' case studies",
  afterText: "to learn how",
  href: "#contact",
};


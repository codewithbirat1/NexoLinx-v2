export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

export const PROCESS_HEADER = {
  eyebrow: "Our Process, Your Advantage",
  title: "From Idea To Execution",
  description:
    "We turn ambitious concepts into scalable, reliable digital platforms. We build with clean architecture, design with purpose, and engineer for measurable business growth.",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Research & Domain Analysis",
    description:
      "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
    image: "/assets/process/process-01-discovery.jpg",
    alt: "Discovery and user experience research mapping session",
  },
  {
    number: "02",
    title: "Flows",
    subtitle: "User Journey Map Sitemap",
    description:
      "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
    image: "/assets/process/process-02-flows.jpg",
    alt: "User journey and system flow diagrams sketch",
  },
  {
    number: "03",
    title: "Wireframes",
    subtitle: "Low - Fidelity Design",
    description:
      "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
    image: "/assets/process/process-03-wireframes.jpg",
    alt: "Low fidelity wireframe structure layouts",
  },
  {
    number: "04",
    title: "Mockups",
    subtitle: "High - Fidelity Design",
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: "/assets/process/process-04-mockups.jpg",
    alt: "High fidelity UI mockups and visual design",
  },
  {
    number: "05",
    title: "Prototyping",
    subtitle: "Interaction Design",
    description:
      "UX Designers create clickable prototypes for your product using tools like Figma to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
    image: "/assets/process/process-05-prototyping.jpg",
    alt: "Clickable interactive design prototyping flows in Figma",
  },
  {
    number: "06",
    title: "Testing",
    subtitle: "Usability Testing",
    description:
      "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
    image: "/assets/process/process-06-testing.jpg",
    alt: "Usability testing on real mobile interfaces",
  },
];


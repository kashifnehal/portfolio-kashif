export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  year: string;
  category: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "barbara-scerbo",
    title: "Barbara Scerbo",
    summary: "A bespoke website to spotlight her branding & art direction prowess.",
    role: ["UX/UI Design", "Development"],
    year: "2024",
    category: "UX/UI Design, Development",
    image: {
      src: "/heroWrap.jpg",
      alt: "Barbara Scerbo Project",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "beatrice-cortese",
    title: "Beatrice Cortese",
    summary: "A new website with a tailored design and development for an Italian winemaking excellence.",
    role: ["UX/UI Design", "Development"],
    year: "2024",
    category: "UX/UI Design, Development",
    image: {
      src: "/ship2.jpg",
      alt: "Beatrice Cortese Project",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "viceversa",
    title: "Viceversa",
    summary: "Tailored user-friendly and visually appealing UX/UI for Viceversa's revenue-based financing platform.",
    role: ["UX/UI Design"],
    year: "2023",
    category: "UX/UI Design",
    image: {
      src: "/jarvis.jpeg",
      alt: "Viceversa Project",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "codeway-ch",
    title: "Codeway CH",
    summary: "A dynamic tailored website blending tech prowess with engaging brand identity.",
    role: ["UX/UI Design", "Development"],
    year: "2023",
    category: "UX/UI Design, Development",
    image: {
      src: "/chegg.jpg",
      alt: "Codeway CH Project",
      width: 1600,
      height: 1000,
    },
    featured: true,
  },
  {
    slug: "miranda-biondi",
    title: "Miranda Biondi",
    summary: "A catchy portfolio spotlighting her creative prowess in graphic identity and visual.",
    role: ["UX/UI Design"],
    year: "2023",
    category: "UX/UI Design",
    image: {
      src: "/burger.jpg",
      alt: "Miranda Biondi Project",
      width: 1600,
      height: 1000,
    },
    featured: false,
  },
];

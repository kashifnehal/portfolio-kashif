export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  year?: string;
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
    slug: "project-one",
    title: "Project One",
    summary: "A placeholder project record for the first portfolio case study.",
    role: ["Design", "Development"],
    year: "2026",
    image: {
      src: "/heroWrap.jpg",
      alt: "Abstract placeholder project artwork",
      width: 1600,
      height: 900,
    },
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "A placeholder project record with replaceable content and media.",
    role: ["Product Design"],
    year: "2026",
    image: {
      src: "/ship2.jpg",
      alt: "Placeholder project image",
      width: 1600,
      height: 900,
    },
  },
];

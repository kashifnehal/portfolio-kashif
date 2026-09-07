export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "wide" | "square" | "tall";
};

export type ProjectOutcome = {
  metric: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  client?: string;
  deliverables: string[];
  role: string[];
  year: string;
  category: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  overview?: {
    challenge: string;
    solution: string;
  };
  outcomes?: ProjectOutcome[];
  gallery?: ProjectGalleryItem[];
  liveUrl?: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "barbara-scerbo",
    title: "Barbara Scerbo",
    summary: "A bespoke website to spotlight her branding & art direction prowess.",
    description:
      "A bespoke digital experience crafted to highlight Barbara Scerbo's portfolio in art direction, visual strategy, and brand identities. Built with hyper-condensed typography, seamless page transitions, and fluid editorial grids.",
    client: "Barbara Scerbo Studio",
    deliverables: ["UX/UI Design", "Creative Engineering", "Design System", "Motion Design"],
    role: ["Lead UX/UI Design", "Frontend Engineering"],
    year: "2024",
    category: "UX/UI Design, Creative Engineering",
    image: {
      src: "/heroWrap.jpg",
      alt: "Barbara Scerbo Project Cover",
      width: 1600,
      height: 1000,
    },
    overview: {
      challenge:
        "The primary challenge was designing an interactive portfolio that felt like an ultra-high-end fashion magazine, maintaining lightning-fast page load times while orchestrating high-resolution full-bleed media and complex typography reveals.",
      solution:
        "We built a modular Next.js application leveraging custom GSAP animation pipelines, WebGL hover distortions, and server-side image optimization. The result is a seamless 60fps editorial experience across desktop and touch devices.",
    },
    outcomes: [
      { metric: "+45%", label: "Average Session Duration" },
      { metric: "100/100", label: "Performance & Accessibility Score" },
      { metric: "2x", label: "Client Inquiries Increase" },
    ],
    gallery: [
      {
        src: "/heroWrap.jpg",
        alt: "Barbara Scerbo Full Desktop View",
        caption: "Main hero showcase layout with ultra-condensed headline typography.",
        aspect: "wide",
      },
      {
        src: "/ship2.jpg",
        alt: "Barbara Scerbo Editorial Grid",
        caption: "Asymmetric grid layout displaying project case studies.",
        aspect: "square",
      },
      {
        src: "/chegg.jpg",
        alt: "Barbara Scerbo Detail Interaction",
        caption: "Custom transition overlay and hover preview behavior.",
        aspect: "square",
      },
    ],
    liveUrl: "https://kashifnehal.com",
    featured: true,
  },
  {
    slug: "beatrice-cortese",
    title: "Beatrice Cortese",
    summary: "A new website with a tailored design and development for an Italian winemaking excellence.",
    description:
      "Digital experience designed for Italian winemaking estate Beatrice Cortese. Combining historical heritage with modern e-commerce interactions, rich photography, and custom storytelling flows.",
    client: "Beatrice Cortese Estates",
    deliverables: ["Brand Strategy", "UX/UI Design", "E-Commerce Frontend"],
    role: ["Lead Designer", "Full-Stack Developer"],
    year: "2024",
    category: "UX/UI Design, Development",
    image: {
      src: "/ship2.jpg",
      alt: "Beatrice Cortese Winemaking Showcase",
      width: 1600,
      height: 1000,
    },
    overview: {
      challenge:
        "Communicating a centuries-old artisanal heritage to an international audience without relying on generic wine site templates or slow multi-megabyte video backgrounds.",
      solution:
        "Crafted a bespoke visual narrative around earth tones, serene micro-animations, and minimal typography, guiding visitors through vineyard history directly to vintage purchase flows.",
    },
    outcomes: [
      { metric: "3.2x", label: "International Mobile Sales Growth" },
      { metric: "< 0.8s", label: "First Contentful Paint" },
    ],
    gallery: [
      {
        src: "/ship2.jpg",
        alt: "Beatrice Cortese Hero Visual",
        caption: "Hero section with serene wine estate photography.",
        aspect: "wide",
      },
      {
        src: "/burger.jpg",
        alt: "Beatrice Cortese Mobile Interface",
        caption: "Touch-optimized vintage selector interface.",
        aspect: "square",
      },
    ],
    liveUrl: "https://kashifnehal.com",
    featured: true,
  },
  {
    slug: "viceversa",
    title: "Viceversa",
    summary: "Tailored user-friendly and visually appealing UX/UI for Viceversa's revenue-based financing platform.",
    description:
      "A comprehensive design overhaul for Viceversa — a European fintech pioneer in revenue-based financing. Designed to simplify financial telemetry and investment dashboards for hyper-growth founders.",
    client: "Viceversa Fintech Ltd.",
    deliverables: ["Product Strategy", "Dashboard UX/UI", "Design System"],
    role: ["Principal Product Designer"],
    year: "2023",
    category: "Fintech UX/UI Design",
    image: {
      src: "/jarvis.jpeg",
      alt: "Viceversa Fintech Dashboard",
      width: 1600,
      height: 1000,
    },
    overview: {
      challenge:
        "Fintech founders were overwhelmed by dense spreadsheets and fragmented analytics. Viceversa needed an intuitive command center that converted revenue data into actionable funding insights.",
      solution:
        "Designed a dark-mode first telemetry platform with clear data visualization hierarchy, real-time capital projection sliders, and automated agreement generation.",
    },
    outcomes: [
      { metric: "€25M+", label: "Capital Deployed via Platform" },
      { metric: "-60%", label: "Onboarding Completion Time" },
    ],
    gallery: [
      {
        src: "/jarvis.jpeg",
        alt: "Viceversa Main Telemetry Screen",
        caption: "Real-time analytics dashboard with revenue trajectory graphs.",
        aspect: "wide",
      },
    ],
    liveUrl: "https://kashifnehal.com",
    featured: true,
  },
  {
    slug: "codeway-ch",
    title: "Codeway CH",
    summary: "A dynamic tailored website blending tech prowess with engaging brand identity.",
    description:
      "Brand identity and web platform for Swiss tech agency Codeway CH. Highlights engineering precision, custom cloud architecture services, and interactive client case studies.",
    client: "Codeway CH AG",
    deliverables: ["Brand Identity", "UX/UI Design", "Next.js Web Development"],
    role: ["UX/UI Designer", "Frontend Developer"],
    year: "2023",
    category: "UX/UI Design, Development",
    image: {
      src: "/chegg.jpg",
      alt: "Codeway CH Web Platform",
      width: 1600,
      height: 1000,
    },
    overview: {
      challenge:
        "Positioning a high-end Swiss software firm apart from traditional IT agencies by emphasizing design sophistication alongside enterprise engineering capability.",
      solution:
        "Developed a monochrome dark-theme design system featuring sharp typography grid lines, smooth kinetic hover effects, and interactive code showcase modules.",
    },
    outcomes: [
      { metric: "+80%", label: "Inbound Enterprise Inquiries" },
      { metric: "99%", label: "User Satisfaction Score" },
    ],
    gallery: [
      {
        src: "/chegg.jpg",
        alt: "Codeway CH Hero Section",
        caption: "Swiss minimal grid system with kinetic typography.",
        aspect: "wide",
      },
    ],
    liveUrl: "https://kashifnehal.com",
    featured: true,
  },
  {
    slug: "miranda-biondi",
    title: "Miranda Biondi",
    summary: "A catchy portfolio spotlighting her creative prowess in graphic identity and visual.",
    description:
      "Interactive digital monograph and portfolio for graphic artist Miranda Biondi. Designed to put high-contrast print typography and experimental editorial layouts into a digital environment.",
    client: "Miranda Biondi Studio",
    deliverables: ["Visual Direction", "Portfolio Design", "Animation"],
    role: ["Creative Technologist", "UX Designer"],
    year: "2023",
    category: "UX/UI Design, Visual Art",
    image: {
      src: "/burger.jpg",
      alt: "Miranda Biondi Portfolio",
      width: 1600,
      height: 1000,
    },
    overview: {
      challenge:
        "Translating print tactile qualities and experimental poster typography into an accessible, responsive web layout.",
      solution:
        "Utilized fluid scale typography variables, dark mode contrast controls, and smooth wheel scroll transitions.",
    },
    outcomes: [
      { metric: "Featured", label: "Awwwards Site of the Day Candidate" },
    ],
    gallery: [
      {
        src: "/burger.jpg",
        alt: "Miranda Biondi Poster Showcase",
        caption: "High-contrast visual gallery with typography zoom.",
        aspect: "wide",
      },
    ],
    liveUrl: "https://kashifnehal.com",
    featured: false,
  },
];

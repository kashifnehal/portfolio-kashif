"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { useProjectTransition } from "../ProjectTransitionContext";

interface ProjectNextFooterProps {
  nextProject: Project;
}

export default function ProjectNextFooter({ nextProject }: ProjectNextFooterProps) {
  const { startTransition } = useProjectTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startTransition(e, {
      slug: nextProject.slug,
      title: nextProject.title,
      imageSrc: nextProject.image.src,
    });
  };

  return (
    <div className="mt-32 border-t border-white/10 pt-16">
      <p className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Next Project</p>
      <Link
        href={`/projects/${nextProject.slug}`}
        onClick={handleClick}
        className="group mt-6 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display-condensed text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6] transition-colors group-hover:text-[#f3dbc7]">
            {nextProject.title}
          </h2>
          <span className="font-display-condensed text-4xl lg:text-6xl text-[#a09a94] transition-transform duration-300 group-hover:translate-x-4 group-hover:text-[#f5eee6]">
            →
          </span>
        </div>
        <p className="mt-4 max-w-xl font-mono text-xs uppercase tracking-wider text-[#a09a94]">
          {nextProject.category} • {nextProject.year}
        </p>
      </Link>
    </div>
  );
}

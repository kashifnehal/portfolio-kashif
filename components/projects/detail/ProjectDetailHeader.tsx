import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectDetailHeaderProps {
  project: Project;
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <header className="space-y-8">
      {/* Top back navigation */}
      <div>
        <Link
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#a09a94] transition-colors hover:text-[#f5eee6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="/#work"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Projects
        </Link>
      </div>

      {/* Meta tags bar */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-[#a09a94]">
        <span>{project.category}</span>
        <span className="text-white/20">•</span>
        <span>{project.year}</span>
        {project.client && (
          <>
            <span className="text-white/20">•</span>
            <span className="text-[#f5eee6]">{project.client}</span>
          </>
        )}
      </div>

      {/* Project Main Title */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="font-display-condensed text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6]">
          {project.title}
        </h1>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#f5eee6] transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Visit Live Site ↗
          </a>
        )}
      </div>
    </header>
  );
}

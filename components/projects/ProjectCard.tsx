"use client";

import Link from "next/link";
import ProjectMedia from "./ProjectMedia";
import ProjectMeta from "./ProjectMeta";
import ProjectHoverInteraction from "./ProjectHoverInteraction";
import { Project } from "@/data/projects";
import { useProjectTransition } from "./ProjectTransitionContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { startTransition } = useProjectTransition();

  // Staggered asymmetric layouts matching reference https://bepatrickdavid.com/
  // Layout 0: Image Left (cols 1-6), Title Right (cols 7-12)
  // Layout 1: Image Center (cols 4-9), Title Right (cols 10-12)
  // Layout 2: Title Left (cols 1-5), Image Right (cols 6-12)
  const variant = index % 3;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startTransition(e, {
      slug: project.slug,
      title: project.title,
      imageSrc: project.image.src,
    });
  };

  return (
    <ProjectHoverInteraction className="border-b border-white/10 pb-24 lg:pb-36">
      {variant === 0 && (
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <ProjectMedia
                src={project.image.src}
                alt={project.image.alt}
                priority={index < 2}
              />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="group/link block space-y-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <h3 className="font-display-condensed text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6] transition-colors group-hover/link:text-[#f3dbc7]">
                {project.title}
              </h3>
              <ProjectMeta category={project.category} year={project.year} />
            </Link>
          </div>
        </div>
      )}

      {variant === 1 && (
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 lg:col-start-4">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <ProjectMedia
                src={project.image.src}
                alt={project.image.alt}
              />
            </Link>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pl-6">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="group/link block space-y-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <h3 className="font-display-condensed text-6xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6] transition-colors group-hover/link:text-[#f3dbc7]">
                {project.title}
              </h3>
              <ProjectMeta category={project.category} year={project.year} />
            </Link>
          </div>
        </div>
      )}

      {variant === 2 && (
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-5 lg:pr-8">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="group/link block space-y-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <h3 className="font-display-condensed text-6xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6] transition-colors group-hover/link:text-[#f3dbc7]">
                {project.title}
              </h3>
              <ProjectMeta category={project.category} year={project.year} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleClick}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
            >
              <ProjectMedia
                src={project.image.src}
                alt={project.image.alt}
              />
            </Link>
          </div>
        </div>
      )}
    </ProjectHoverInteraction>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { useReveal } from "@/components/motion/useReveal";

interface ProjectDetailHeroProps {
  project: Project;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 30, duration: 0.8 });

  return (
    <div
      ref={containerRef}
      className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-900 border border-white/10 shadow-2xl"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 90vw"
        className="reference-img-filter object-cover transition-transform duration-1000 ease-out hover:scale-105"
        priority
      />
    </div>
  );
}

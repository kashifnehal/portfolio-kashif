"use client";

import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { useReveal } from "@/components/motion/useReveal";

interface ProjectDetailGalleryProps {
  project: Project;
}

export default function ProjectDetailGallery({ project }: ProjectDetailGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <section ref={containerRef} className="mt-24 space-y-12">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Project Showcase</h2>
        <span className="font-mono text-xs text-[#a09a94]">{project.gallery.length} Shots</span>
      </div>

      <div className="space-y-12">
        {project.gallery.map((item, index) => (
          <figure key={index} className="space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-900 border border-white/10">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="reference-img-filter object-cover transition-transform duration-700 hover:scale-102"
              />
            </div>
            {item.caption && (
              <figcaption className="font-mono text-xs text-[#a09a94]">
                — {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

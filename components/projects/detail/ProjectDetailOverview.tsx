"use client";

import { useRef } from "react";
import { Project } from "@/data/projects";
import { useReveal } from "@/components/motion/useReveal";

interface ProjectDetailOverviewProps {
  project: Project;
}

export default function ProjectDetailOverview({ project }: ProjectDetailOverviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  return (
    <section ref={containerRef} className="mt-20 space-y-16">
      {/* Description Summary Banner */}
      <div className="border-l-2 border-white/30 pl-6 lg:pl-8">
        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#f5eee6] font-light">
          {project.description}
        </p>
      </div>

      {/* Grid: Challenge vs Solution vs Sidebar Specs */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Challenge & Solution */}
        <div className="lg:col-span-8 space-y-12">
          {project.overview?.challenge && (
            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">The Challenge</h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#d4ceb8]">
                {project.overview.challenge}
              </p>
            </div>
          )}

          {project.overview?.solution && (
            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">The Solution</h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#d4ceb8]">
                {project.overview.solution}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Roles, Deliverables, & Year */}
        <div className="lg:col-span-4 space-y-8 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">My Role</h3>
            <p className="mt-2 text-sm text-[#f5eee6]">{project.role.join(" / ")}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Deliverables</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-[#f5eee6]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Year</h3>
            <p className="mt-2 text-sm text-[#f5eee6]">{project.year}</p>
          </div>
        </div>
      </div>

      {/* Key Outcomes / Metrics Strip */}
      {project.outcomes && project.outcomes.length > 0 && (
        <div className="border-y border-white/10 py-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#a09a94] mb-8">Key Outcomes & Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.outcomes.map((outcome, idx) => (
              <div key={idx} className="space-y-2">
                <span className="font-display-condensed text-5xl sm:text-6xl font-extrabold text-[#f5eee6] tracking-tighter">
                  {outcome.metric}
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-[#a09a94]">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [layoutMode, setLayoutMode] = useState<"editorial" | "grid" | "list">("editorial");

  useEffect(() => {
    // Sync with customizer layout mode if selected
    const handleLayoutChange = () => {
      const saved = localStorage.getItem("portfolio_layout_mode");
      if (saved === "grid" || saved === "list" || saved === "editorial") {
        setLayoutMode(saved);
      } else {
        setLayoutMode("editorial");
      }
    };

    handleLayoutChange();
    window.addEventListener("portfolio_layout_changed", handleLayoutChange);
    return () => window.removeEventListener("portfolio_layout_changed", handleLayoutChange);
  }, []);

  return (
    <div id="cases" className="pt-4 transition-all duration-300" data-layout={layoutMode}>
      {/* 1. Editorial Stack Layout (Default) */}
      {layoutMode === "editorial" && (
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}

      {/* 2. Compact 2-Column Grid Layout */}
      {layoutMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}

      {/* 3. Minimal List View Layout */}
      {layoutMode === "list" && (
        <div className="pt-8 divide-y divide-white/10 border-t border-b border-white/10 my-8">
          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 px-4 transition-colors hover:bg-white/5"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-display-condensed text-2xl md:text-4xl text-[#f5eee6] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-8 mt-2 md:mt-0 font-mono text-xs text-white/60">
                <span>{project.category}</span>
                <span>{project.year}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

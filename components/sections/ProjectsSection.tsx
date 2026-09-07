import Link from "next/link";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="px-gutter py-24 md:py-36"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="mt-4 font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold uppercase leading-[0.9] text-foreground"
            >
              Featured
              <br />
              Projects
            </h2>
          </div>
          <Link
            href="#"
            className="inline-block shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted underline underline-offset-4 transition-colors duration-fast hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="View project archive"
          >
            All projects →
          </Link>
        </div>

        {/* Project grid */}
        <ProjectGrid />
      </div>
    </section>
  );
}

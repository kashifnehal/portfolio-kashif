import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="px-gutter py-24 md:py-36 bg-[#0d0d0d]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-content">
        {/* Section label matching reference minimal header */}
        <p
          id="projects-heading"
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5eee6]/50 mb-12"
        >
          Selected work
        </p>

        {/* Asymmetric project grid */}
        <ProjectGrid />
      </div>
    </section>
  );
}

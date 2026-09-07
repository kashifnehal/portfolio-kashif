import { notFound } from "next/navigation";
import { getProject } from "@/lib/content";
import { projects } from "@/data/projects";
import ProjectDetailHeader from "@/components/projects/detail/ProjectDetailHeader";
import ProjectDetailHero from "@/components/projects/detail/ProjectDetailHero";
import ProjectDetailOverview from "@/components/projects/detail/ProjectDetailOverview";
import ProjectDetailGallery from "@/components/projects/detail/ProjectDetailGallery";
import ProjectNextFooter from "@/components/projects/detail/ProjectNextFooter";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Calculate Next project for navigation footer
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-[#0d0d0d] px-gutter pb-24 pt-32 text-[#f5eee6]">
      <div className="mx-auto max-w-6xl">
        <ProjectDetailHeader project={project} />
        <ProjectDetailHero project={project} />
        <ProjectDetailOverview project={project} />
        <ProjectDetailGallery project={project} />
        <ProjectNextFooter nextProject={nextProject} />
      </div>
    </article>
  );
}

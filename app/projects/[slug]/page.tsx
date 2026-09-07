import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/content";
import { projects } from "@/data/projects";

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

  return (
    <main className="min-h-screen bg-background px-[var(--space-gutter)] py-8 text-foreground">
      <Link className="text-sm underline underline-offset-4" href="/">
        Back home
      </Link>
      <article className="mx-auto mt-16 max-w-5xl">
        <p className="font-mono text-sm uppercase text-muted">
          {project.role.join(" / ")}
        </p>
        <h1 className="mt-4 text-6xl font-semibold tracking-tight sm:text-8xl">
          {project.title}
        </h1>
        <div className="relative mt-12 aspect-video overflow-hidden rounded">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-8 max-w-2xl text-lg text-muted">{project.summary}</p>
      </article>
    </main>
  );
}

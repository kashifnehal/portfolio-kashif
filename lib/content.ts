import { projects } from "@/data/projects";

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

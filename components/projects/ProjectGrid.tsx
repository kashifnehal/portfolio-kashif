import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div id="cases" className="space-y-24 py-12">
      {projects.map((project, index) => {
        // Alternate layout directions matching reference asymmetric composition
        const isImageLeft = index % 2 === 0;

        return (
          <article
            key={project.slug}
            className="group relative border-b border-white/10 pb-20"
          >
            <div
              className={`flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-center ${
                isImageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Project Image Cell */}
              <div
                className={`lg:col-span-7 ${
                  isImageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-md bg-surface/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="reference-img-filter object-cover"
                      priority={index < 2}
                    />
                  </div>
                </Link>
              </div>

              {/* Project Title & Category Info Cell */}
              <div
                className={`lg:col-span-5 ${
                  isImageLeft ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/link block space-y-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
                >
                  <h3 className="font-display-condensed text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.88] tracking-tight text-[#f5eee6] transition-colors group-hover/link:text-[#f3dbc7]">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5eee6]/70 pt-2">
                    {project.category}
                  </p>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

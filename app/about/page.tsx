import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { services } from "@/content/services";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kashif Nehal — a software engineer, UX/UI designer and frontend developer based in Bangalore, India. Background, expertise, projects, and professional approach.",
  alternates: {
    canonical: "https://kashifnehal.com/about",
  },
  openGraph: {
    type: "profile",
    url: "https://kashifnehal.com/about",
    title: "About Kashif Nehal — Software Engineer & Designer",
    description:
      "Learn about Kashif Nehal — a software engineer, UX/UI designer and frontend developer based in Bangalore, India. Background, expertise, projects, and professional approach.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kashif Nehal — Software Engineer & Designer" }],
  },
};

export default function AboutPage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f5eee6] px-gutter pt-32 pb-24">
      <div className="mx-auto max-w-4xl">

        {/* Name & Title */}
        <header className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">
            About
          </span>
          <h1 className="mt-4 font-display-condensed text-6xl sm:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6]">
            Kashif Nehal
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest text-[#f3dbc7]">
            {profile.title} · {profile.location}
          </p>
        </header>

        {/* Primary Bio */}
        <section aria-labelledby="about-bio-heading" className="mb-20 border-t border-white/10 pt-12">
          <h2 id="about-bio-heading" className="font-display-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-6">
            Who I Am
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#c9c3bd] max-w-2xl">
            {profile.introBio}
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#a09a94] max-w-2xl">
            I believe good engineering and good design are inseparable. Every project I take on gets careful attention to both the user experience and the underlying code quality — because what looks beautiful should also perform beautifully.
          </p>
        </section>

        {/* Capabilities */}
        <section aria-labelledby="about-capabilities-heading" className="mb-20 border-t border-white/10 pt-12">
          <h2 id="about-capabilities-heading" className="font-display-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-8">
            What I Do
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <li key={service.id} className="border border-white/10 rounded-sm p-6 bg-white/[0.02]">
                <h3 className="font-display-condensed text-xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#a09a94]">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Skills */}
        <section aria-labelledby="about-skills-heading" className="mb-20 border-t border-white/10 pt-12">
          <h2 id="about-skills-heading" className="font-display-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-8">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS",
              "GSAP", "Tailwind CSS", "Figma", "Webflow", "Node.js",
              "Design Systems", "Motion Design",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#f5eee6]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Selected Projects Preview */}
        <section aria-labelledby="about-projects-heading" className="mb-20 border-t border-white/10 pt-12">
          <h2 id="about-projects-heading" className="font-display-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-8">
            Selected Projects
          </h2>
          <ul className="space-y-4">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-colors duration-200"
                >
                  <div>
                    <span className="font-display-condensed text-2xl font-extrabold uppercase tracking-tight text-[#f5eee6] group-hover:text-[#f3dbc7] transition-colors">
                      {project.title}
                    </span>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#a09a94]">
                      {project.category} · {project.year}
                    </p>
                  </div>
                  <span className="text-[#f3dbc7] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/#cases"
              className="inline-block font-mono text-xs uppercase tracking-widest text-[#f3dbc7] border-b border-[#f3dbc7]/40 pb-0.5 hover:border-[#f3dbc7] transition-colors"
            >
              View all projects by Kashif Nehal ↗
            </Link>
          </div>
        </section>

        {/* Contact / Professional Links */}
        <section aria-labelledby="about-contact-heading" className="border-t border-white/10 pt-12">
          <h2 id="about-contact-heading" className="font-display-condensed text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5eee6] mb-8">
            Get in Touch
          </h2>
          <p className="text-sm leading-relaxed text-[#a09a94] mb-8 max-w-xl">
            Available for freelance projects, consulting engagements, and full-time opportunities. Reach out to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href={`mailto:${profile.contactEmail}`}
              className="inline-block rounded-full border border-white/30 bg-white/5 px-8 py-3 font-mono text-xs uppercase tracking-widest text-[#f5eee6] hover:bg-white hover:text-black transition-all duration-300"
            >
              {profile.contactEmail}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-block rounded-full border border-white/30 bg-white/5 px-8 py-3 font-mono text-xs uppercase tracking-widest text-[#f5eee6] hover:bg-white hover:text-black transition-all duration-300"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-block rounded-full border border-white/30 bg-white/5 px-8 py-3 font-mono text-xs uppercase tracking-widest text-[#f5eee6] hover:bg-white hover:text-black transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

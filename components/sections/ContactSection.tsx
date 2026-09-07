"use client";

import { useRef } from "react";
import { profile } from "@/content/profile";
import { services } from "@/content/services";
import { useReveal } from "@/components/motion/useReveal";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative px-gutter py-28 md:py-40 bg-[#0d0d0d] text-[#f5eee6] border-t border-white/10"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">
          Initiate Collaboration
        </span>
        <h2
          id="contact-heading"
          className="mt-4 font-display-condensed text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6]"
        >
          Let&apos;s build<br />something legendary.
        </h2>

        <div className="mt-16 space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">
            Select capability focus for inquiry:
          </p>

          {/* Service Interactive Buttons */}
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`mailto:${profile.contactEmail}?subject=Project%20Inquiry%20-%20${encodeURIComponent(service.title)}`}
                className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#f5eee6] transition-all duration-300 hover:border-[#f3dbc7] hover:bg-[#f3dbc7] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>{service.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Email & Location Grid */}
        <div className="mt-24 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Direct Email</span>
            <div>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="font-display-condensed text-4xl sm:text-6xl font-extrabold uppercase text-[#f5eee6] transition-colors hover:text-[#f3dbc7]"
              >
                {profile.contactEmail}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">Location &amp; Availability</span>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#f5eee6]">
              {profile.location} • {profile.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

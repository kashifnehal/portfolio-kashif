"use client";

import { useRef } from "react";
import { services } from "@/content/services";
import { useReveal } from "@/components/motion/useReveal";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  return (
    <section
      id="services"
      ref={containerRef}
      className="px-gutter py-24 md:py-36 bg-[#0d0d0d] text-[#f5eee6] border-t border-white/10"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Label & Headline Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">
              Capabilities &amp; Expertise
            </span>
            <h2
              id="services-heading"
              className="font-display-condensed text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6]"
            >
              What I<br />do best.
            </h2>
            <p className="max-w-md font-mono text-xs uppercase tracking-wider text-[#a09a94] pt-4">
              Combining visual direction with clean engineering to craft digital products that stand out.
            </p>
          </div>

          {/* Services List Column */}
          <ul className="md:col-span-7 divide-y divide-white/10">
            {services.map((service, index) => (
              <li
                key={service.id}
                className="group flex flex-col gap-4 py-8 transition-colors hover:bg-white/5 px-4 rounded-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#a09a94]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-[#a09a94] opacity-0 transition-opacity group-hover:opacity-100">
                    0{index + 1} — CAPABILITY
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display-condensed text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5eee6] transition-colors group-hover:text-[#f3dbc7]">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-[#a09a94]">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

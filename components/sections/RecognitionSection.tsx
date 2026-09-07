"use client";

import { useRef } from "react";
import { recognition } from "@/content/recognition";
import { useReveal } from "@/components/motion/useReveal";

export default function RecognitionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  return (
    <section
      id="awards"
      ref={containerRef}
      className="relative px-gutter py-24 md:py-36 border-t border-white/10 bg-[#0d0d0d] text-[#f5eee6]"
      aria-labelledby="recognition-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header row with section title and badge count */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a09a94]">
              Awards &amp; Recognition
            </span>
            <h2
              id="recognition-heading"
              className="mt-3 font-display-condensed text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.84] tracking-tighter text-[#f5eee6]"
            >
              Honored to collaborate with exceptional brands
            </h2>
          </div>

          {/* Awards Badge Count */}
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
            <svg
              className="h-6 w-6 animate-[spin_12s_linear_infinite] text-[#f3dbc7]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <div>
              <span className="font-display-condensed text-4xl font-extrabold text-[#f5eee6]">{recognition.length}</span>
              <span className="ml-2 font-mono text-xs uppercase tracking-wider text-[#a09a94]">
                Honors Received
              </span>
            </div>
          </div>
        </div>

        {/* Tabular Awards List */}
        <div className="mt-16 border-t border-white/10">
          <div className="hidden grid-cols-12 py-4 font-mono text-xs uppercase tracking-widest text-[#a09a94] md:grid">
            <div className="col-span-4">AWARD TITLE</div>
            <div className="col-span-4">PLATFORM</div>
            <div className="col-span-4 text-right">PROJECT</div>
          </div>

          <div className="divide-y divide-white/10">
            {recognition.map((item, index) => (
              <div
                key={`${item.project}-${index}`}
                className="group flex flex-col justify-between py-6 transition-colors duration-300 hover:bg-white/5 md:grid md:grid-cols-12 md:items-center px-2"
              >
                <div className="col-span-4 font-mono text-sm uppercase tracking-wider text-[#f5eee6] font-semibold">
                  {item.title}
                </div>
                <div className="col-span-4 mt-1 font-mono text-xs uppercase tracking-wider text-[#a09a94] md:mt-0">
                  {item.platform}
                </div>
                <div className="col-span-4 mt-2 flex items-center justify-between font-mono text-sm uppercase tracking-wider text-[#f3dbc7] md:mt-0 md:justify-end md:gap-3">
                  <span>{item.project}</span>
                  <span className="font-mono text-xs text-[#f5eee6] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

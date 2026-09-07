"use client";

const marqueeItems = [
  "UX/UI DESIGN",
  "FRONTEND ENGINEERING",
  "NEXT.JS 16",
  "REACT 19",
  "THREE.JS & WEBGL",
  "GSAP ANIMATIONS",
  "DESIGN SYSTEMS",
  "CREATIVE DIRECTION",
  "PERFORMANCE OPTIMIZATION",
  "TAILWIND CSS",
];

export default function MarqueeStrip() {
  return (
    <section id="featured" className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-6">
      <div className="group flex overflow-hidden whitespace-nowrap font-display-condensed text-2xl sm:text-4xl font-extrabold uppercase tracking-tighter text-[#a09a94]">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-12 pr-12">
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-12">
              <span className="transition-colors hover:text-[#f5eee6]">{item}</span>
              <span className="text-[#f3dbc7]">•</span>
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_25s_linear_infinite] gap-12 pr-12" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <span key={`dup-${item}-${index}`} className="inline-flex items-center gap-12">
              <span className="transition-colors hover:text-[#f5eee6]">{item}</span>
              <span className="text-[#f3dbc7]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

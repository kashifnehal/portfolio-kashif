"use client";

import { useRef } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { useReveal } from "@/components/motion/useReveal";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef, { y: 40, duration: 0.7 });

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative z-10 px-gutter py-28 bg-gradient-to-b from-transparent via-[#0d0d0d]/85 to-[#0d0d0d] text-[#f5eee6] transition-colors duration-500"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading & Large Uppercase Bio Copy */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-1">
              <h2
                id="intro-heading"
                className="font-display-condensed text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.82] text-[#f5eee6]"
              >
                {profile.introHeading}
              </h2>
              <span className="font-serif-accent text-xl text-[#f3dbc7] italic ml-2 mt-2">
                {profile.name}
              </span>
            </div>

            <p className="mt-14 font-sans font-extrabold text-xl sm:text-2xl lg:text-2xl uppercase leading-relaxed tracking-wider text-[#f5eee6]">
              {profile.introBio}
            </p>
          </div>

          {/* Right Column: 3D Michelangelo Bust Image */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-start pt-4">
            <div className="relative w-full max-w-sm overflow-hidden rounded-sm bg-black border border-white/10">
              <Image
                src="/heroWrap.jpg"
                alt="Bust reference — decorative"
                width={500}
                height={640}
                className="w-full object-cover reference-img-filter opacity-85"
                style={{ aspectRatio: "5/6" }}
              />
            </div>

            {/* Handwritten annotation matching reference */}
            <div className="mt-5 flex flex-col items-center gap-1 select-none">
              <span className="font-serif-accent text-base text-[#f3dbc7] italic">
                I am not this one
              </span>
              <span className="text-[#f3dbc7] text-lg opacity-60">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

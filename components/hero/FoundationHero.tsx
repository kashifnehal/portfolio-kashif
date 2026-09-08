"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export default function FoundationHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isClipped = !isLoaded || isHovered;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-[#0d0d0d] px-gutter pb-12 pt-[85px] text-[#f5eee6] max-w-full"
      aria-labelledby="hero-heading"
    >
      {/* Background artwork plane matching reference image — extends seamlessly into Intro section */}
      <div className="absolute inset-x-0 top-0 h-[170vh] z-0 overflow-hidden max-w-full pointer-events-none">
        <div
          className={`absolute inset-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.35,1)] ${
            isClipped
              ? "[clip-path:polygon(50%_0%,75%_50%,50%_100%,25%_50%)] opacity-90 scale-105"
              : "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] opacity-100 scale-100"
          }`}
        >
          <Image
            src="/heroWrap.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          />
        </div>
        {/* Soft dark gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-black/30" />
      </div>

      {/* Availability Widget (Large date pills + dynamic font themes matching Image 2) */}
      <div
        id="availability-widget"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute right-[5%] top-24 z-20 hidden md:flex flex-col items-end gap-2 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* 12-point star icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-[#f3dbc7] animate-[spin_16s_linear_infinite]"
          >
            <path
              fill="currentColor"
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            />
          </svg>

          {/* First Oval Pill Cutout "0" */}
          <div className="relative flex h-20 w-12 sm:h-24 sm:w-14 items-center justify-center rounded-full bg-[#f5eee6] shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-14 w-8 sm:h-18 sm:w-10 items-center justify-center rounded-full bg-[#0d0d0d] text-[#f5eee6]">
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-normal">0</span>
            </div>
          </div>

          {/* Second Oval Pill Cutout "7" */}
          <div className="relative flex h-20 w-12 sm:h-24 sm:w-14 items-center justify-center rounded-full bg-[#f5eee6] shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-14 w-8 sm:h-18 sm:w-10 items-center justify-center rounded-full bg-[#0d0d0d] text-[#f5eee6]">
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-normal">7</span>
            </div>
          </div>

          {/* Diagonal White Slash */}
          <div className="h-20 sm:h-24 w-3 sm:w-3.5 rotate-[25deg] rounded-sm bg-[#f5eee6]" />

          {/* Text Stack — Month (serif accent) + Available for work (mono/body) */}
          <div className="flex flex-col text-left pl-1">
            <span className="font-serif-accent text-xl sm:text-2xl italic text-[#f3dbc7] leading-none">
              sep
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#f5eee6] leading-tight mt-1.5">
              available
              <br />
              for work
            </span>
          </div>
        </div>

        {/* Subtitle hint matching reference site on hover */}
        <div className="text-[11px] font-mono text-[#f3dbc7]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pr-1">
          ☺ It&apos;s a fake availability. Contact me to check my actual status
        </div>
      </div>

      {/* Hero Top Content: Title & Eyebrow */}
      <div className="relative z-10 w-full max-w-content pt-4">
        {/* Eyebrow: serif italic "creative" */}
        <div className="font-serif-accent text-3xl text-[#f3dbc7] italic">
          <span>creative</span>
        </div>

        {/* Main Display Heading — Kashif Nehal, Designer & Developer */}
        <h1
          id="hero-heading"
          className="mt-1 font-display-condensed text-[clamp(3.5rem,11.5vw,10.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-[#f5eee6] break-words"
        >
          <span
            className="block font-mono text-xs font-normal uppercase tracking-[0.35em] text-[#f5eee6]/60 mb-2 not-italic"
            style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.85rem)", letterSpacing: "0.3em", fontFamily: "inherit" }}
          >
            Kashif Nehal
          </span>
          Designer
          <span className="font-serif-accent text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f3dbc7] italic ml-3 align-baseline">
            &amp;
          </span>
          <br />
          Developer
        </h1>
      </div>

      {/* Hero Bottom Content: Lower-right aligned bio copy + CONTACT ME button matching Image 2 */}
      <div className="relative z-10 w-full max-w-content mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-4">
        <div className="hidden lg:block" />

        {/* Right-aligned text block matching reference Image 2 */}
        <div className="flex flex-col items-start lg:items-end gap-6 max-w-xl lg:ml-auto">
          <p className="font-sans font-extrabold text-base sm:text-lg lg:text-xl uppercase tracking-wider text-[#f5eee6] leading-relaxed lg:text-right">
            {profile.shortBio}
          </p>

          <Link
            href="#footer"
            className="inline-block rounded-full border-2 border-white/80 bg-black/30 px-9 py-3.5 font-sans font-extrabold text-sm uppercase tracking-widest text-[#f5eee6] transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </section>
  );
}

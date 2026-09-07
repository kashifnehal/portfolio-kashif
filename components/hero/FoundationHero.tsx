"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export default function FoundationHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-[#0d0d0d] px-gutter pb-12 pt-[75px] text-[#f5eee6] max-w-full"
      aria-labelledby="hero-heading"
    >
      {/* Background artwork plane matching reference image */}
      <div className="absolute inset-0 z-0 overflow-hidden max-w-full">
        <div
          className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded
            ? "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] opacity-100 scale-100"
            : "[clip-path:polygon(50%_10%,60%_50%,50%_90%,40%_50%)] opacity-60 scale-105"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
      </div>

      {/* Availability Widget (Exact replicate of reference Image 2) */}
      <div className="absolute right-[6%] top-24 z-20 hidden md:flex items-center gap-4">
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

        {/* White Pill with Oval Cutout "07" */}
        <div className="relative flex h-14 w-28 items-center justify-center rounded-full bg-[#f5eee6] px-2 shadow-xl">
          <div className="flex h-9 w-20 items-center justify-center rounded-full border-2 border-black/20 font-sans text-xl font-extrabold text-black">
            07
          </div>
        </div>

        {/* Diagonal White Slash */}
        <div className="h-16 w-3.5 rotate-[28deg] rounded-sm bg-[#f5eee6]" />

        {/* Text Stack */}
        <div className="flex flex-col text-left pl-1">
          <span className="font-serif-accent text-lg italic text-[#f3dbc7] leading-none">
            sep
          </span>
          <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#f5eee6] leading-tight mt-1">
            available
            <br />
            for work
          </span>
        </div>
      </div>

      {/* Hero Top Content: Title & Eyebrow */}
      <div className="relative z-10 w-full max-w-content pt-4">
        {/* Eyebrow: serif italic "creative" */}
        <div className="font-serif-accent text-3xl text-[#f3dbc7] italic">
          <span>creative</span>
        </div>

        {/* Main Display Heading matching reference ultra-condensed typography */}
        <h1
          id="hero-heading"
          className="mt-1 font-display-condensed text-[clamp(3.5rem,11.5vw,10.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-[#f5eee6] break-words"
        >
          Designer
          <span className="font-serif-accent text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f3dbc7] italic ml-3 align-baseline">
            &amp;
          </span>
          <br />
          Developer
        </h1>
      </div>

      {/* Hero Bottom Content: Right-aligned 5-line block copy + Outline Pill Button */}
      <div className="relative z-10 w-full max-w-content mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="hidden lg:block" />

        {/* Right-aligned text block matching reference Image 2 */}
        <div className="flex flex-col items-start lg:items-end gap-6 max-w-xl lg:ml-auto">
          <p className="font-sans font-extrabold text-base sm:text-lg lg:text-xl uppercase tracking-wider text-[#f5eee6] leading-snug lg:text-right">
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

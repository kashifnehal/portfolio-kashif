"use client";

import HeroVisual from "./HeroVisual";

export default function FoundationHero() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-background px-[var(--space-gutter)] pb-8 text-foreground">
      <HeroVisual />
      <div className="relative z-10 w-full max-w-[var(--content-max-width)]">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Kashif Nehal / Digital portfolio
        </p>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(4rem,16vw,13rem)] font-semibold uppercase leading-[0.84]">
          Designer
          <br />
          Developer
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted sm:text-lg">
          A foundation for a customizable portfolio experience.
        </p>
      </div>
    </section>
  );
}

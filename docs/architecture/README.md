# Architecture Notes

## Current baseline

- Framework: Next.js `14.2.8` with App Router.
- Language: TypeScript with strict mode enabled.
- UI: React `18`, Tailwind CSS, styled-components.
- Root layout: `app/layout.tsx` loads local Geist fonts, global CSS, metadata, and `PortfolioModalBlocker`.
- Home page: `app/page.tsx` composes `HeroSection`, `Contributions`, `Projects`, and `Footer`.
- Assets: local fonts and images in `app/` and `public/`.
- Animation libraries: none currently declared.

Target architecture for the redesign: keep content/data separate from presentation, keep animation logic separate from content, preserve server/client boundaries, and use client-side JavaScript only for interactions that require it. Exact component and library choices are `Not yet verified`.

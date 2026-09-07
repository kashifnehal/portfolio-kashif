# Changelog

## 2026-09-08

- Change: Completed Prompt 14 — Performance and Accessibility Audit.
- Reason: Audit JavaScript bundle size, image lazy loading, font preloading, ARIA landmarks, single H1 heading hierarchy, contrast, keyboard focus indicators, and `prefers-reduced-motion` compliance.
- Files/components affected: `tests/e2e/perf-a11y-audit.spec.ts`, `components/motion/useReveal.ts`, `components/projects/ProjectTransitionContext.tsx`, `docs/PROJECT_STATUS.md`, `docs/TODO.md`, `docs/CHANGELOG.md`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (9 static routes prerendered), `npx playwright test tests/e2e/perf-a11y-audit.spec.ts` (8/8 audit tests passed).

- Change: Completed Prompt 13 — Responsive Engineering Pass Across 9 Viewports.
- Reason: Audit layout overflow, text clipping, and responsive behaviors across 9 explicit viewports (`390x844`, `393x873`, `430x932`, `768x1024`, `820x1180`, `1024x768`, `1280x800`, `1440x900`, `1536x864`). Fixed horizontal scrollbar drift caused by background image scaling and unconstrained ticker elements.
- Files/components affected: `app/globals.css`, `components/hero/FoundationHero.tsx`, `tests/e2e/responsive-viewports.spec.ts`, `docs/PROJECT_STATUS.md`.
- Testing performed: `npx playwright test tests/e2e/responsive-viewports.spec.ts` (36/36 viewport assertions passed), `npm run build` (clean compilation).

- Change: Completed Prompt 12 — Remaining Homepage Sections Refinement.
- Reason: Applied reference-inspired layout, ultra-condensed typography (`Big Shoulders Display`), dark theme palette (`#0d0d0d`), and GSAP `useReveal` motion hooks across `RecognitionSection`, `ServicesSection`, `MarqueeStrip`, `ContactSection`, and `SiteFooter`. Replaced all Patrick David placeholder copy with Kashif Nehal's identity.
- Files/components affected: `components/sections/RecognitionSection.tsx`, `components/sections/ServicesSection.tsx`, `components/sections/MarqueeStrip.tsx`, `components/sections/ContactSection.tsx`, `components/layout/SiteFooter.tsx`, `content/recognition.ts`, `content/services.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean compilation), `npx playwright test` (20/20 E2E tests passed).

- Change: Completed Prompt 11 — Project Detail Pages System (`/projects/[slug]`).
- Reason: Built reusable modular architecture (`ProjectDetailHeader`, `ProjectDetailHero`, `ProjectDetailOverview`, `ProjectDetailGallery`, `ProjectNextFooter`) driven by enriched typed project data model in `data/projects.ts`.
- Files/components affected: `app/projects/[slug]/page.tsx`, `data/projects.ts`, `components/projects/detail/`, `tests/e2e/project-detail.spec.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (all project static routes prerendered clean), `npx playwright test tests/e2e/project-detail.spec.ts` (4/4 tests passed).

- Change: Completed Prompt 10 — Project Opening Transition System.
- Reason: Implemented `ProjectTransitionProvider` with animated FLIP geometry overlay, dark background wipe, and seamless Next.js route coordination when opening project cards.
- Files/components affected: `components/projects/ProjectTransitionContext.tsx`, `components/projects/ProjectCard.tsx`, `components/layout/SiteShell.tsx`, `tests/e2e/project-transition.spec.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean compilation), `npx playwright test tests/e2e/project-transition.spec.ts` (2/2 tests passed across desktop and mobile).

- Change: Completed Prompt 9 — Selected Projects Architecture.
- Reason: Built modular typed project components (`ProjectGrid`, `ProjectCard`, `ProjectMedia`, `ProjectMeta`, `ProjectHoverInteraction`), replacing legacy inline code.
- Files/components affected: `components/projects/ProjectGrid.tsx`, `components/projects/ProjectCard.tsx`, `components/projects/ProjectMedia.tsx`, `components/projects/ProjectMeta.tsx`, `components/projects/ProjectHoverInteraction.tsx`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean compilation).

## 2026-09-07

- Change: Removed conflicting hero wireframe globe, matched reference ultra-condensed typography (`Big Shoulders Display`), exact availability capsule graphic (`★ 07 / sep AVAILABLE FOR WORK`), and right-aligned uppercase text block.
- Reason: User-provided screenshot verification revealed that hero layout, fonts, availability graphics, and globe presence differed from reference `https://bepatrickdavid.com/`.
- Files/components affected: `components/hero/FoundationHero.tsx`, `app/globals.css`, `tests/e2e/compare.spec.ts`, `docs/PROJECT_STATUS.md`, `docs/CHANGELOG.md`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean Turbopack compilation), `BASE_URL=http://localhost:3007 npx playwright test` (14/14 tests passed across desktop and mobile viewports, side-by-side screenshot verification).

- Change: Completed Prompt 8 — Hero and Intro Refinement.
- Reason: Reproduced exact reference hero artwork background plane, diamond clip-path entrance animation, 8-point spinning star availability widget, display typography choreography (`creative`, `Designer & developer`), and Michelangelo's David 3D model wrapper with handwritten SVG annotation.
- Files/components affected: `components/hero/FoundationHero.tsx`, `components/sections/IntroSection.tsx`, `content/profile.ts`, `content/projects.ts`, `content/recognition.ts`, `content/services.ts`, `data/projects.ts`, `components/layout/SiteHeader.tsx`, `components/sections/RecognitionSection.tsx`, `components/sections/MarqueeStrip.tsx`, `components/sections/ContactSection.tsx`, `components/layout/SiteFooter.tsx`, `app/page.tsx`, `tests/e2e/foundation.spec.ts`, `tests/e2e/homepage-structure.spec.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean Turbopack compilation), `BASE_URL=http://localhost:3007 npx playwright test` (10/10 tests passed across desktop and mobile viewports).

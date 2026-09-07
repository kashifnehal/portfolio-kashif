# Changelog

## 2026-09-07

- Change: Removed conflicting hero wireframe globe, matched reference ultra-condensed typography (`Big Shoulders Display`), exact availability capsule graphic (`★ 07 / sep AVAILABLE FOR WORK`), and right-aligned uppercase text block.
- Reason: User-provided screenshot verification revealed that hero layout, fonts, availability graphics, and globe presence differed from reference `https://bepatrickdavid.com/`.
- Files/components affected: `components/hero/FoundationHero.tsx`, `app/globals.css`, `tests/e2e/compare.spec.ts`, `docs/PROJECT_STATUS.md`, `docs/CHANGELOG.md`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean Turbopack compilation), `BASE_URL=http://localhost:3007 npx playwright test` (14/14 tests passed across desktop and mobile viewports, side-by-side screenshot verification).

- Change: Completed Prompt 8 — Hero and Intro Refinement.
- Reason: Reproduced exact reference hero artwork background plane, diamond clip-path entrance animation, 8-point spinning star availability widget, display typography choreography (`creative`, `Designer & developer`), and Michelangelo's David 3D model wrapper with handwritten SVG annotation.
- Files/components affected: `components/hero/FoundationHero.tsx`, `components/sections/IntroSection.tsx`, `content/profile.ts`, `content/projects.ts`, `content/recognition.ts`, `content/services.ts`, `data/projects.ts`, `components/layout/SiteHeader.tsx`, `components/sections/RecognitionSection.tsx`, `components/sections/MarqueeStrip.tsx`, `components/sections/ContactSection.tsx`, `components/layout/SiteFooter.tsx`, `app/page.tsx`, `tests/e2e/foundation.spec.ts`, `tests/e2e/homepage-structure.spec.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean Turbopack compilation), `BASE_URL=http://localhost:3007 npx playwright test` (10/10 tests passed across desktop and mobile viewports).

- Change: Implemented Prompt 7 — Homepage Structural Skeleton.
- Reason: Created semantic structural skeleton for persistent header navigation, hero, introduction/about, selected projects, recognition/achievements, services/capabilities, contact CTA, marquee divider, and footer.
- Files/components affected: `components/layout/SiteHeader.tsx`, `components/layout/SiteFooter.tsx`, `components/layout/SiteShell.tsx`, `components/hero/FoundationHero.tsx`, `components/sections/IntroSection.tsx`, `components/sections/ProjectsSection.tsx`, `components/sections/RecognitionSection.tsx`, `components/sections/ServicesSection.tsx`, `components/sections/ContactSection.tsx`, `components/sections/MarqueeStrip.tsx`, `content/profile.ts`, `content/recognition.ts`, `content/services.ts`, `app/page.tsx`, `app/layout.tsx`, `app/projects/[slug]/page.tsx`, `app/loading.tsx`, `app/not-found.tsx`, `app/error.tsx`, `tests/e2e/homepage-structure.spec.ts`.
- Testing performed: `npm run lint` (0 errors), `npm run build` (clean Turbopack compilation), `BASE_URL=http://localhost:3007 npx playwright test` (10/10 tests passed across desktop and mobile viewports).

- Change: Removed the last unused image copies from the deleted `app/components` tree and corrected migration bookkeeping.
- Reason: Complete legacy cleanup without touching `data/` or `public/` assets, and make commit history/status accurate.
- Files/components affected: `app/components/greek.jpg`, `app/components/heroWrap.jpg`, `docs/PROJECT_STATUS.md`, and `docs/CHANGELOG.md`.
- Testing performed: `npm run lint`, `npm run build`, `BASE_URL=http://localhost:3007 npm run test:e2e` with 6 tests passing, HTTP 200, and `git diff --check`.
- Commit: pending final cleanup commit and push.

- Change: Upgraded the project to Next.js `16.3.4`, React `19.2.0`, and ESLint `9`; removed deprecated/unused styled-components and legacy `app/components` code; added centralized `content/` placeholders, `AGENTS.md`, and the implementation prompt roadmap.
- Reason: Apply the approved framework upgrade and establish the documented one-prompt-at-a-time implementation workflow while preserving `data/` and `public/`.
- Files/components affected: `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `.eslintrc.json`, `app/projects/[slug]/page.tsx`, deleted `app/components/`, `content/`, `AGENTS.md`, `docs/IMPLEMENTATION_PROMPTS.md`, and associated docs.
- Testing performed: `npm run lint`, `npm run build`, `BASE_URL=http://localhost:3006 npm run test:e2e` with 6 tests passing, and successful Next 16 server responses on port 3006.
- Commit: superseded by final migration commit `11eb0da`.

- Change: Completed Next.js `16.3.4` migration and deleted disconnected legacy `app/components` source while preserving `data/` and `public/`.
- Reason: Use the approved Next 16/Vercel foundation and remove superseded implementation paths before the prompt-by-prompt UI build.
- Files/components affected: `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `app/projects/[slug]/page.tsx`, deleted `.eslintrc.json`, deleted `app/portfolioModalConfig.ts`, deleted `app/components/`, `content/`, `AGENTS.md`, and `docs/IMPLEMENTATION_PROMPTS.md`.
- Testing performed: `npm run lint`, `npm run build`, `BASE_URL=http://localhost:3007 npm run test:e2e` with 6 tests passing, HTTP 200, and clean Next 16 server logs.
- Commit: `11eb0da` at 2026-09-07T20:35:21+05:30.

- Change: Pushed the foundation implementation to `origin/main`.
- Reason: Publish the completed foundation and documentation baseline.
- Files/components affected: All staged foundation, legacy reset, dependency, test, and documentation files.
- Testing performed: `npm run lint`, `npm run build`, `npm run test:e2e` with 6 passing tests on a clean server, local HTTP 200, and `git diff --check`.
- Commit: `1becf92` at 2026-09-07T20:10:43+05:30.

- Change: Replaced the active home page with the foundation-only route, disconnected legacy portfolio composition, removed deprecated `@next/font`, and patched Next.js to `14.2.35`.
- Reason: Prevent old components/assets from affecting the new implementation and resolve the deprecated font and critical Next.js dependency issue.
- Files/components affected: `app/page.tsx`, `app/layout.tsx`, `app/components/HeroSection.tsx`, `components/hero/FoundationHero.tsx`, `package.json`, `package-lock.json`, and legacy `app/components/` files now disconnected from the active route.
- Testing performed: `npm run lint`, `npm run build`, Playwright foundation tests, and local HTTP checks.

- Change: Implemented the technical foundation from `docs/architecture.md`.
- Reason: Establish reusable tokens, typed data, routing, motion lifecycle, reduced-motion behavior, optional WebGL boundaries, and browser-test scaffolding before building all sections.
- Files/components affected: `components/`, `data/`, `lib/`, `styles/`, `app/projects/[slug]/`, `app/loading.tsx`, `app/error.tsx`, `app/not-found.tsx`, `playwright.config.ts`, `tests/e2e/`, `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`, `package.json`, and lockfiles.
- Testing performed: `npm run lint`, `npm run build`, `BASE_URL=http://localhost:3001 npx playwright test` with 6 tests passing, and local HTTP 200 verification.

- Change: Added explicit fade and slide motion hooks, standardized npm, and removed the stale Yarn lockfile.
- Reason: Complete the requested reusable motion utility surface and eliminate package-manager ambiguity.
- Files/components affected: `components/motion/useReveal.ts`, `components/motion/useFade.ts`, `components/motion/useSlide.ts`, `package.json`, `package-lock.json`, and `yarn.lock`.
- Testing performed: Final lint, production build, and Playwright browser smoke tests against a fresh server on port 3003.

- Change: Added the global CSS module declaration.
- Reason: Remove the editor TypeScript diagnostic for the root global stylesheet side-effect import.
- Files/components affected: `global.d.ts`.
- Testing performed: Workspace diagnostics report no errors for the changed source directories.

- Change: Added the proposed portfolio architecture and disabled the root `PortfolioModalBlocker` render.
- Reason: Establish extensible content/UI/animation/routing boundaries and make the local portfolio visible without the Tyler practice modal.
- Files/components affected: `docs/architecture.md`, `app/layout.tsx`, `docs/PROJECT_STATUS.md`, and `docs/TODO.md`; `app/components/PortfolioModalBlocker.tsx` was preserved unchanged as the Tyler practice artifact.
- Testing performed: `npm run lint`, `npm run build`, and `curl http://localhost:3000`; all completed successfully, with existing lint warnings documented in `PROJECT_STATUS.md`.

- Change: Added third-pass typography, color, spacing, asset, responsive, and visual-hierarchy specifications.
- Reason: Challenge and reconcile earlier reference observations with measured responsive and computed-style evidence.
- Files/components affected: `docs/reference/assets-required.md`, `docs/reference/responsive-spec.md`, `docs/reference/design-system.md`, `docs/reference/page-architecture.md`, and `docs/reference/README.md`.
- Testing performed: Browser computed-style measurements at desktop/tablet/mobile widths, stylesheet breakpoint and font extraction, DOM asset inventory, image/canvas inspection, and cross-document contradiction review.

- Change: Recorded the requested Kashif Nehal identity direction and the originality boundary for retained images and links.
- Reason: Clarify what can be customized before implementation without changing application functionality.
- Files/components affected: `docs/decisions/0004-portfolio-content-direction.md`, `docs/PROJECT_STATUS.md`, and `docs/TODO.md`.
- Testing performed: Documentation integrity and consistency review.

- Change: Added the second-pass animation, motion, interaction, and transition forensic specifications.
- Reason: Challenge unresolved first-pass assumptions and document recreation-level behavior before implementation.
- Files/components affected: `docs/reference/animation-spec.md`, `docs/reference/animation-map.md`, and synchronized reference/testing/status documentation.
- Testing performed: Repeated browser reload timing samples, desktop/mobile viewport checks, scroll checkpoints, pointer probes, project-open transition checks, runtime bundle inspection, and CSS keyframe inspection.

- Change: Completed browser-based forensic analysis of the supplied reference at five requested viewport settings.
- Reason: Produce a reconstruction specification before any portfolio implementation.
- Files/components affected: `docs/reference/page-architecture.md`, `docs/reference/design-system.md`, `docs/reference/interactions.md`, `docs/reference/technology.md`, and `docs/reference/screenshots/`.
- Testing performed: Browser DOM, computed-style, resource, interaction, navigation, keyboard-focus, viewport, and screenshot inspection.

- Change: Added the project documentation system under `docs/`.
- Reason: Establish a single source of truth for the portfolio development process before redesign implementation.
- Files/components affected: Documentation files only; no application functionality changed.
- Testing performed: Reviewed generated documentation, confirmed Git status, and retained the previously verified lint, build, and local HTTP results.

- Change: Removed stale generated `.next` output and restarted the local development server.
- Reason: The development server returned a missing generated module error after build output was reused.
- Files/components affected: Generated `.next/` output only; no tracked source files changed.
- Testing performed: `curl http://localhost:3000` returned HTTP 200.

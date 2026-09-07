# Changelog

## 2026-09-07

- Change: Pushed the foundation implementation to `origin/main`.
- Reason: Publish the completed foundation and documentation baseline.
- Files/components affected: All staged foundation, legacy reset, dependency, test, and documentation files.
- Testing performed: `npm run lint`, `npm run build`, `npm run test:e2e` with 6 passing tests on a clean server, local HTTP 200, and `git diff --check`.
- Commit: `1becf92` at 2026-09-07T14:36:42Z.

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

# Baseline Validation

Date: 2026-09-07

## Results

| Command/check                        | Result             | Details                                                                                                  |
| ------------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `npm run lint`                       | Pass with warnings | Two warnings in `app/components/HeroSection.tsx`: raw `<img>` usage and missing `alt`.                   |
| `npm run build`                      | Pass               | Compilation, linting, type checking, page data collection, and static generation completed successfully. |
| `curl http://localhost:3000`         | Pass               | Returned HTTP 200 after clearing stale `.next` output and restarting the dev server.                     |
| `yarn dev`                           | Retired            | npm is the canonical package manager and the stale Yarn lockfile was removed.                            |
| Automated test suite                 | Not yet verified   | No test script is defined in `package.json`.                                                             |
| Browser and visual regression checks | Not yet verified   | No browser test setup or baseline screenshots were found.                                                |

The warnings and Yarn failure predate this documentation-only change. No application functionality was modified.

## Reference forensic pass

| Check                         | Result  | Details                                                                                                                                                              |
| ----------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Required viewport sweep       | Pass    | Inspected requested 1440x900, 1280x800, 1024x768, 768x1024, and 390x844 settings. The browser reported effective CSS dimensions at 0.8x because of its device scale. |
| Loading and hero states       | Pass    | Captured initial/loading and post-animation hero states.                                                                                                             |
| Scroll and section geometry   | Pass    | Measured document height, section bounds, hash navigation, and scroll-triggered image state.                                                                         |
| Project interactions          | Partial | Case links and external targets verified; stable CSS hover state was not isolated because overlapping grid layers intercepted pointer events.                        |
| Navigation and keyboard focus | Pass    | Hash links, external links, mailto links, new-tab targets, and tab order/focus outlines inspected.                                                                   |
| Technology evidence           | Pass    | DOM, computed styles, loaded resources, fonts, WebGL canvas, Draco asset, image loading, and Matomo requests inspected.                                              |
| Reference screenshots         | Pass    | Required hero, post-animation, project, hover, and mobile captures saved under `docs/reference/screenshots/`.                                                        |

## Animation second pass

| Check                     | Result  | Details                                                                                                                                                    |
| ------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero timing checkpoints   | Pass    | Repeated desktop reload sampling observed loading class, background opacity, and plane clip-path progression.                                              |
| Mobile timing checkpoints | Pass    | Repeated mobile reload sampling observed the page loaded by approximately 500ms; desktop intermediate clip state was not exposed in sampled mobile states. |
| Scroll reveal checkpoints | Pass    | Repeated scroll positions measured progressive case image opacity and translateY values.                                                                   |
| Runtime mechanism scan    | Pass    | Minified bundle evidence found GSAP, ScrollTrigger, Three.js/WebGL, IntersectionObserver, mousemove, and requestAnimationFrame markers.                    |
| Marquee/CSS scan          | Pass    | CSS keyframes and exact authored durations were recovered for two marquee systems and line wipes.                                                          |
| Project open transition   | Pass    | Click produced `content--open` and `no-scroll`; back control animation was sampled at 600ms and 1,000ms.                                                   |
| Project close transition  | Partial | Five duplicate back controls prevented a reliable automated click on the active control.                                                                   |
| Project hover             | Partial | Overlapping grid layers intercepted pointer hover; exact hover transform remains unknown.                                                                  |

## Third visual/responsive pass

| Check                   | Result | Details                                                                                                                                         |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Typography measurements | Pass   | Computed font families, weights, sizes, line-heights, casing, and responsive display sizes inspected at desktop, tablet, and mobile widths.     |
| Color token extraction  | Pass   | Computed and stylesheet colors identified for foreground, dark surface, muted foreground, white utility, overlay, and focus outline.            |
| Spacing measurements    | Pass   | Gutters, section padding, grid dimensions, image container sizes, and footer margins compared across desktop/tablet/mobile.                     |
| Asset inventory         | Pass   | Raster images, WebP sources, inline SVG count, WebGL canvas, Draco request, video absence, and lazy-loading evidence inspected.                 |
| Responsive behavior     | Pass   | Hero background visibility, grid collapse, typography scaling, gutters, and marquee breakpoint behavior recorded.                               |
| Cross-document review   | Pass   | Earlier design and architecture notes reconciled; mobile hero background hiding and Three.js/GSAP classifications align with stronger evidence. |

## Architecture and modal update

| Check                        | Result                      | Details                                                                                                                                                                                             |
| ---------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run lint`               | Pass with existing warnings | No warning was introduced by removing the modal render. Existing warnings remain in `app/components/HeroSection.tsx`; TypeScript 5.5.4 is also newer than the declared ESLint parser support range. |
| `npm run build`              | Pass                        | Production compilation, linting, type checking, and static generation completed successfully.                                                                                                       |
| `curl http://localhost:3000` | Pass                        | Local development page returned HTTP 200 after the layout update.                                                                                                                                   |
| Modal usage check            | Pass                        | `PortfolioModalBlocker` remains defined only in its component file and is no longer imported/rendered by `app/layout.tsx`.                                                                          |

## Foundation implementation

| Check                       | Result                              | Details                                                                                                                                           |
| --------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run lint`              | Pass with existing warnings         | New foundation files introduced no lint errors. Existing `HeroSection.tsx` image warnings and TypeScript parser notice remain.                    |
| `npm run build`             | Pass                                | Production build generated the landing page, error/not-found boundaries, and two static project routes.                                           |
| `npm run test:e2e`          | Pass when targeting existing server | Playwright desktop/mobile projects ran 6 tests successfully with `BASE_URL=http://localhost:3001`.                                                |
| Reduced-motion browser test | Pass                                | Page remained usable under `prefers-reduced-motion: reduce`.                                                                                      |
| Runtime error smoke test    | Pass                                | Home page emitted no `pageerror` events in the browser test.                                                                                      |
| Project route smoke test    | Pass                                | `/projects/project-one` rendered the typed project title.                                                                                         |
| `npm audit --omit=dev`      | Partial                             | Reports 2 remaining high findings in the Next/PostCSS tree after upgrading Next to `14.2.35`; no non-major fix is available for the current line. |

## Foundation reset and dependency cleanup

| Check                      | Result   | Details                                                                                                                                              |
| -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Legacy route disconnection | Pass     | Active `app/page.tsx` no longer imports `ParallaxWrapper`, `HeroSection`, `Contributions`, `Projects`, or `Footer`; the legacy hero is comment-only. |
| Deprecated font dependency | Pass     | `@next/font` was removed; active code uses local `next/font`.                                                                                        |
| Next.js security patch     | Pass     | Next upgraded to `14.2.35` within the 14.x line.                                                                                                     |
| Production audit           | Partial  | Reduced from 4 findings to 2 high findings in the Next/PostCSS tree; forcing a major upgrade was not performed.                                      |
| Change tracking            | Recorded | Last committed baseline is `85e098c`; current changes are uncommitted as of the implementation update.                                               |

## Final foundation validation

| Check                         | Result   | Details                                                                                                                              |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fresh development server      | Pass     | Started with `PORT=3003 npm run dev`; local endpoint served successfully.                                                            |
| `npm run test:e2e`            | Pass     | 6 desktop/mobile foundation tests passed against `BASE_URL=http://localhost:3003`.                                                   |
| Stale-server diagnosis        | Resolved | An earlier run used stale server output; fresh-server rerun passed after restarting on port 3003.                                    |
| Final clean-server validation | Pass     | After clearing `.next`, `PORT=3004 npm run dev`, `BASE_URL=http://localhost:3004 npm run test:e2e`, and HTTP verification succeeded. |
| Workspace diagnostics         | Pass     | The CSS side-effect import diagnostic was resolved with `global.d.ts`; no errors remain for changed source directories.              |

# Portfolio Architecture

Status: Approved architecture; technical foundation implemented on 2026-09-07.
Date: 2026-09-07

## Goals and boundaries

Build a modern Next.js portfolio for Kashif Nehal with the interaction quality and visual language documented in `docs/reference/`, while keeping content, presentation, animation, and routing independently replaceable. Temporary practice content is allowed, but temporary images, fonts, and links must be local, original, licensed, user-owned, or generated. Reference-owned personal identity, artwork, fonts, project assets, and personal links are not implementation dependencies.

## Proposed structure

```text
app/
  layout.tsx
  page.tsx
  projects/[slug]/page.tsx
  not-found.tsx
components/
  motion/
    SmoothScroll.tsx
    MotionProvider.tsx
    useReducedMotion.ts
    useScrollReveal.ts
    useReveal.ts
    useFade.ts
    useSlide.ts
    useParallax.ts
  layout/
    SiteShell.tsx
    Section.tsx
    Footer.tsx
  hero/
    HeroSection.tsx
    HeroVisual.tsx
  projects/
    ProjectGrid.tsx
    ProjectCard.tsx
    ProjectHover.tsx
    ProjectTransition.tsx
    ProjectDetail.tsx
  navigation/
    Header.tsx
    AnchorNavigation.tsx
    CustomCursor.tsx
  contact/
    ContactSection.tsx
    ContactMarquee.tsx
lib/
  animation.ts
  content.ts
  media.ts
  routes.ts
  cn.ts
data/
  portfolio.ts
  projects.ts
  navigation.ts
  awards.ts
  site.ts
styles/
  tokens.css
  globals.css
public/
  images/
  icons/
```

The current repository uses `app/components/`; migration to the proposed root `components/` structure should be incremental. Do not create the entire tree until the first implementation slice needs it.

## Separation of concerns

- **Content:** `data/*.ts` owns site copy, project records, labels, image paths, and destination URLs. Components receive typed data and contain no portfolio-specific copy.
- **UI:** `components/` owns semantic markup, layout, visual states, and accessibility. UI components do not import GSAP directly unless they own a local animation boundary.
- **Animation:** `components/motion/` and small feature-level motion modules own GSAP contexts, ScrollTrigger instances, Lenis synchronization, and reduced-motion branching. The foundation provides reveal, fade, slide, and parallax hooks; split text and magnetic interaction are deferred until a concrete feature needs them.
- **Routing:** `app/` owns route composition, metadata, params, and navigation. `lib/routes.ts` centralizes route and slug helpers. Project cards link to `/projects/[slug]`; transitions must not replace normal links or back-button behavior.
- **Design tokens:** `styles/tokens.css` owns CSS custom properties. Tailwind consumes the same variables through `tailwind.config.ts`; repeated values must not be copied into components.

## Responsibility map

| Component           | Responsibility                                                                      | Must not own                                          |
| ------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `SmoothScroll`      | Initialize/destroy Lenis once at the client shell boundary; expose scroll lifecycle | Project content or route transitions                  |
| `MotionProvider`    | Coordinate global reduced-motion state and optional GSAP ticker integration         | Feature-specific timelines                            |
| `CustomCursor`      | Pointer position/state and desktop-only cursor presentation                         | Keyboard focus or essential interaction               |
| `Header`            | Semantic navigation, active hash state, focusable controls                          | Scroll engine internals                               |
| `HeroSection`       | Hero content and semantic heading hierarchy                                         | Global GSAP timeline                                  |
| `HeroVisual`        | Optional visual layer and fallback image                                            | Portfolio copy                                        |
| `ProjectGrid`       | Render typed project collection and grid layout                                     | Route navigation policy                               |
| `ProjectCard`       | Project presentation, image, metadata, accessible link                              | Global scroll state                                   |
| `ProjectHover`      | Pointer/focus visual response for a card                                            | Required information hidden from keyboard/touch users |
| `ProjectTransition` | Optional enhancement between card and detail route                                  | Owning project data                                   |
| `ProjectDetail`     | Detail-page semantic content and media                                              | Global animation loop                                 |
| `ContactSection`    | Contact CTA and service/contact data rendering                                      | Mail provider implementation                          |
| `Footer`            | Social/contact links and legal/asset credits as supplied                            | Reference-site identity                               |

## Design tokens

Represent tokens in `styles/tokens.css` and mirror semantic values in Tailwind:

```css
:root {
  --color-background: #000;
  --color-surface: #131313;
  --color-foreground: #f5eee6;
  --color-muted: rgb(245 238 230 / 0.5);
  --color-overlay: #f3dbc7;
  --color-accent: #e59700;
  --color-border: rgb(245 238 230 / 0.35);
  --font-display: "KashifDisplay", sans-serif;
  --font-body: "KashifBody", sans-serif;
  --space-gutter: 28px;
  --space-gutter-mobile: 20px;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 400ms;
  --duration-reveal: 900ms;
  --duration-page: 2400ms;
}
```

These are starting semantic tokens, not a license to copy the reference's exact font files or identity. Final font families and values are `Not yet verified`. Breakpoints should be named (`sm`, `md`, `lg`) and used through Tailwind/configuration, with CSS media queries only where component CSS requires them.

## Motion architecture

- Use a client boundary only for `SmoothScroll`, `MotionProvider`, and interactive feature components.
- Create a GSAP context with `gsap.context(() => ..., rootRef)` inside `useLayoutEffect`; return `ctx.revert()` on unmount.
- Register `ScrollTrigger` once in the motion module, not during render. Kill/revert all triggers on unmount.
- Use `gsap.matchMedia()` for responsive timelines and call its cleanup on unmount. Keep mobile timelines simpler and never rely on hover as the only way to reveal content.
- Respect `prefers-reduced-motion`: disable Lenis smoothing, WebGL, pointer-follow effects, and nonessential entrance/parallax motion; show final states immediately while preserving focus and content order.
- Synchronize Lenis and GSAP through one ticker owner. Do not run separate `requestAnimationFrame` loops for each component. If Lenis is used, its RAF is driven by the GSAP ticker or one shared loop, with `ScrollTrigger.update` on scroll.
- Route transitions are progressive enhancement: preserve native Next navigation and browser back behavior first; animate an overlay or exit state only after navigation intent is known. Do not block route changes indefinitely.
- Avoid animating layout-critical height/width when transforms or opacity suffice. Respect `visibility`, `pointer-events`, and focus management for overlays.

## WebGL decision

WebGL is **approved for the foundation as an isolated optional visual layer** because the reference investigation found a Three.js/WebGL canvas and the user explicitly approved implementing it. It remains nonessential: the portfolio must be complete and usable with the fallback image when WebGL is unavailable, disabled, or reduced motion is requested.

If later approved:

- Purpose: one decorative, nonessential hero visual layer only, not a source of content or navigation.
- Boundary: isolated `HeroVisual` canvas, dynamically imported with `ssr: false`.
- Fallback: static optimized hero image or CSS artwork, always available.
- Mobile: disable by default below the mobile breakpoint and for reduced motion.
- Performance: lazy-load after hero content, cap pixel ratio, avoid continuous work when offscreen, dispose geometry/materials/textures, and monitor frame rate.

## Routes

Required routes:

- `/`: complete portfolio landing page with hash anchors for major sections.
- `/projects/[slug]`: project detail page generated from typed project data.

Not required yet: CMS routes, API routes, authentication, blog, or admin pages. Add them only when a user workflow requires them.

## Typed data

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  year?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  href?: string;
  featured?: boolean;
};
```

All slugs must be unique. External destinations must be explicit and validated. Decorative images use `alt: ""`; informative images require meaningful alt text. Temporary records can use placeholder values without changing component APIs.

## Testing architecture

- **Unit:** slug validation, route helpers, project data validation, token/config helpers, and reduced-motion decision logic.
- **Component:** semantic headings, link destinations, image alt behavior, keyboard focus, project open/close state, and no content hidden only behind hover.
- **Browser:** landing-page navigation, project route navigation, browser back, scroll reveal, contact links, touch viewport behavior, and no-scroll overlay state.
- **Visual regression:** hero, project grid, project detail, footer, loading/final motion states at desktop/tablet/mobile.
- **Responsive:** 1440x900, 1280x800, 1024x768, 768x1024, 390x844 plus reduced-motion variants.
- **Reduced motion:** no smooth-scroll dependency, no nonessential motion, immediate final states, usable keyboard navigation, and no layout collapse.

## Performance

- Use `next/image` for local raster assets with explicit dimensions and responsive `sizes`.
- Load only licensed/project-owned fonts with `next/font/local`; subset and limit weights. Existing local Geist fonts are available; final design fonts are `Not yet verified`.
- Keep the landing page server-rendered where possible. Dynamically import client-only motion/WebGL code.
- Lazy-load below-fold project media and optional visual effects.
- Clean every GSAP context, ScrollTrigger, Lenis instance, event listener, observer, and WebGL resource.
- Avoid duplicate animation loops and avoid mounting global providers per route.

## Accessibility

- Use one meaningful `h1`, ordered section headings, landmarks, and descriptive link names.
- Keep all projects reachable by keyboard and touch; hover is enhancement only.
- Provide visible `:focus-visible` states with sufficient contrast.
- Use `aria-label` for icon-only controls and `aria-modal`/focus return for open project overlays if an overlay is used.
- Maintain at least 44x44 CSS px touch targets for controls.
- Ensure foreground/background contrast is checked after final token selection.
- Do not make CustomCursor the only pointer or focus signal.

## Senior review and risks

- **Unnecessary dependencies:** Do not add React Three Fiber, Three.js, Framer Motion, or a CMS for the first slice. GSAP, ScrollTrigger, and Lenis are justified only for measured motion requirements and must be added deliberately.
- **Hydration:** keep `window`, pointer, Lenis, GSAP, and canvas access inside client effects; do not render time- or viewport-dependent markup differently on server and client.
- **GSAP lifecycle:** use scoped contexts, `matchMedia`, cleanup, and stable refs; never create timelines during render.
- **Next.js:** keep `metadata` and route composition server-side; use client components only at interaction boundaries; dynamic-import WebGL with SSR disabled.
- **Performance:** hero animation and custom cursor can compete for the main thread; prefer transforms, one ticker, lazy media, and a static fallback.
- **Accessibility:** reduced motion, focus-visible states, touch behavior, alt text, and overlay focus return must be acceptance criteria, not polish tasks.
- **Current repo risks:** the project still contains styled-components even though the target architecture prefers Tailwind, and existing raw image handling has lint warnings. npm is now canonical and the stale Yarn lockfile has been removed. Resolve remaining legacy styling and image warnings in focused tasks rather than hiding them in the redesign.

## Implementation sequence

1. Standardize package manager and confirm temporary asset strategy.
2. Create typed data and token files with placeholder content.
3. Build semantic shell, header, hero, project grid, contact, and footer without advanced motion.
4. Add GSAP/ScrollTrigger/Lenis only for the approved essential motion, with reduced-motion tests.
5. Add project detail routing and progressive transition enhancement.
6. Keep WebGL behind its fallback and validate its performance before enabling more than the hero visual.
7. Run browser, responsive, visual, performance, and accessibility checks.

## Review outcome

This proposal intentionally avoids a giant global provider, a CMS, duplicated animation loops, and route transitions that replace native navigation. GSAP, ScrollTrigger, Lenis, and Three.js are approved because they correspond to measured reference behavior, but each remains isolated, cleaned up, and optional where possible. The architecture is extensible through typed data, semantic tokens, and isolated motion boundaries while remaining appropriate for the current small portfolio.

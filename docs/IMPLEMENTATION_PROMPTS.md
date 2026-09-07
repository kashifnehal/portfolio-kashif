# Implementation Prompt Roadmap

This file is a reference index for the approved implementation sequence. Execute one prompt at a time, update `/docs`, validate locally, report the result, and wait for approval before starting the next prompt.

## Prompt 0: Repository assessment

Inspect the repository, framework, dependencies, Node/package manager, TypeScript, linting, build, and Git state. Do not implement the website.

## Prompt 1: Documentation system

Create `/docs` as the project source of truth with status, changelog, TODO, reference, architecture, design, development, testing, and decisions records.

## Prompt 2: Reference forensic analysis

Inspect the live reference at desktop and mobile viewports. Document page architecture, design system, interactions, technology, screenshots, and originality boundaries.

## Prompt 3: Animation forensic analysis

Challenge the first pass with runtime and bundle inspection. Document load, hero, scroll, hover, project opening, marquee, WebGL, CSS animation, timing, trigger, and reduced-motion evidence.

## Prompt 4: Visual and responsive forensic analysis

Measure typography, colors, spacing, assets, image behavior, breakpoints, responsive layout, mobile substitutions, and visual hierarchy. Record asset requirements without redistributing protected assets.

## Prompt 5: Portfolio architecture

Define content/UI/animation/routing boundaries, responsibilities, design tokens, typed project data, motion lifecycle, WebGL decision, routes, testing, performance, accessibility, and implementation sequence.

## Prompt 6: Technical foundation

Implement only the foundation: tokens, typography system, responsive primitives, GSAP/ScrollTrigger, Lenis, reduced motion, reusable motion hooks, routing foundation, typed placeholder data, boundaries, and browser-test scaffolding.

## Prompt 7: Homepage structure

Build the semantic structural skeleton for navigation, hero, introduction, projects, recognition, services, contact, and footer using placeholder content. Keep animation minimal.

## Prompt 8: Hero and intro refinement

Implement the hero/intro composition and measured motion behavior. Compare initial, mid, settled, mobile, resize, navigation, and reduced-motion states against the reference specification.

## Prompt 9: Selected projects

Implement typed `ProjectGrid`, `ProjectCard`, media, metadata, and project interaction components. Support desktop hover, mobile touch, keyboard focus, reveal, and controlled transitions.

## Prompt 10: Project opening transition

Implement the connected project-card to project-detail transition with routing, geometry/media continuity, rapid-click protection, slow-network fallback, back behavior, mobile support, and reduced motion.

## Prompt 11: Project detail pages

Build the reusable `/projects/[slug]` template from typed project data with only the required hierarchy, controlled entrance/image/text motion, next-project navigation, and responsive behavior.

## Prompt 12: Remaining homepage sections

Complete about, recognition, press, services, contact, archive, and footer sections only where supported by the content model. Use original portfolio content and accessible controlled motion.

## Prompt 13: Responsive engineering pass

Test the full application at 390x844, 393x873, 430x932, 768x1024, 820x1180, 1024x768, 1280x800, 1440x900, and 1536x864. Fix overflow, clipping, touch, resize, ScrollTrigger, timing, and WebGL issues.

## Prompt 14: Performance and accessibility audit

Audit JavaScript, images, fonts, hydration, animation loops, Lenis, WebGL, memory, semantics, contrast, keyboard access, touch targets, and reduced motion. Fix and retest.

## Prompt 15: Automated browser test suite

Cover user-visible home, navigation, projects, detail routes, back/forward, responsive behavior, rapid interactions, reduced motion, console/page errors, critical requests, and deterministic screenshots.

## Prompt 16: Final visual and motion QA

Compare the implemented experience against the reference specification at all required viewports and classify P0-P4 differences. Fix evidence-based discrepancies and rerun regression.

## Prompt 17: Final senior review

Review architecture, lifecycle, dependencies, routing, accessibility, responsiveness, performance, security, SEO, tests, debug artifacts, and production readiness. Run every available validation command again.

## Working decisions

- Package manager: npm.
- Deployment target: Vercel with domain `kashifnehal.com`.
- Temporary copy/assets/links: use replaceable project-owned or generated placeholders now; replace final content later without repeatedly blocking implementation.
- WebGL: approved only as an isolated optional visual with a fallback and reduced-motion/mobile safeguards.
- Legacy components: delete disconnected `app/components` code when cleanup is requested; preserve `data/` and `public/`.
- Final identity: Kashif Nehal.

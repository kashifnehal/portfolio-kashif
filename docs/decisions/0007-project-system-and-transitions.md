# Decision 0007: Project System, FLIP Transitions, and Font Mapping

Date: 2026-09-08

## Status

Approved and implemented.

## Context

The portfolio needed:
1. A modular typed project component system (`ProjectGrid`, `ProjectCard`, `ProjectMedia`, `ProjectMeta`, `ProjectHoverInteraction`).
2. An interactive project opening transition between the project card and `/projects/[slug]` without visual discontinuity or screen flashing.
3. Open-source typography replacements for commercial fonts (`Tusker Grotesk`, `Neue Montreal`, `Migra`).
4. Full responsiveness and zero horizontal scrollbar drift across desktop, tablet, and mobile viewports.

## Decisions

1. **Typed Project Component Architecture**:
   - Driven by `data/projects.ts` containing project overview, challenge/solution blocks, deliverables, outcomes/impact metrics, and showcase image galleries.

2. **Project Transition Provider (`ProjectTransitionContext.tsx`)**:
   - Implemented a FLIP-style geometry animation provider with a subtle dark backdrop wipe (`#0d0d0d`).
   - Intercepts link clicks while honoring native behavior (`Cmd+Click`, `Ctrl+Click`, right-click) and `prefers-reduced-motion`.

3. **Typography Mapping System**:
   - Commercial font *Tusker Grotesk Super Condensed* → **Big Shoulders Display** (900 weight, uppercase, `-0.04em` tracking).
   - Commercial font *Neue Montreal* → **Space Grotesk** (Grotesque sans-serif).
   - Commercial font *Migra* → **Playfair Display** (Italic serif).

4. **Responsive Boundaries**:
   - Global `max-w-100vw` and `overflow-x: hidden` applied to `html` and `body` to eliminate horizontal scrollbar drift caused by scaled background image transforms.

## Consequences

- Full automated test coverage (6 test suites with 64 Playwright tests passing).
- Zero license violations from redistributing commercial fonts.
- Smooth 60fps project transitions and responsive rendering across all 9 target viewports.

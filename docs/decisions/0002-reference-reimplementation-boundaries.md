# Decision 0002: Reference Reimplementation Boundaries

Date: 2026-09-07

## Decision

Use the reference analysis for general layout relationships, typography-led composition, interaction concepts, motion principles, and responsive behavior only. Do not copy the reference person's identity, biography, project content, links, branding, logos, artwork, or proprietary assets. Do not assume GSAP, ScrollTrigger, Lenis, Three.js, or shaders without implementation evidence; choose the smallest modern technology that reproduces an approved interaction.

## Reason

The requested portfolio should achieve a comparable level of polish while remaining an original work. Browser inspection established WebGL and bundled assets but did not establish the exact framework or animation libraries.

## Consequences

- Portfolio-specific content and assets must be supplied or created independently.
- Unknown reference mechanisms remain documented as unknown rather than becoming implementation requirements.
- Any library added during implementation must have a documented reason and a reduced-motion strategy.

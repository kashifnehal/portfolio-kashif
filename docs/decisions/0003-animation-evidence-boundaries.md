# Decision 0003: Animation Evidence Boundaries

Date: 2026-09-07

## Decision

Treat GSAP, ScrollTrigger, and Three.js as found in the reference bundle, but do not treat recovered runtime symbols as proof of every authored animation. Recreate only measured behavior and clearly labeled observations; leave exact hover, shader, timing, and trigger details unknown until stronger evidence exists.

## Reason

The second-pass bundle scan found GSAP, ScrollTrigger, and Three.js/WebGL code, while runtime probes measured hero, scroll reveal, marquee, and project-open behavior. Several interactions remained unisolated because of overlapping or duplicated DOM controls.

## Consequences

- Later implementation may use these libraries when they have a documented purpose, but must not copy protected content or identity.
- Unknown behavior must not become hardcoded guessed animation values.
- Essential and decorative motion are separated in `animation-spec.md` so implementation can prioritize accessible core behavior.

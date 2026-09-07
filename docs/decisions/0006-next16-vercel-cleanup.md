# Decision 0006: Next 16, Vercel, And Legacy Cleanup

Date: 2026-09-07

## Decision

Use npm and upgrade the application to Next 16 for the Vercel deployment target `kashifnehal.com`. Remove the disconnected legacy `app/components` tree while preserving `data/` and `public/`. Keep temporary, centralized content until the final content replacement pass.

## Rationale

The user approved the Next 16 upgrade and requested deletion of old disconnected components. Next 16 is a major upgrade and must be validated separately. The old components were no longer imported by the active route.

## Constraints

- Do not delete `data/` or `public/` assets.
- Do not copy reference-owned content or assets into the repository; temporary content remains centralized and replaceable.
- Record all upgrade compatibility changes and validation results in `/docs`.

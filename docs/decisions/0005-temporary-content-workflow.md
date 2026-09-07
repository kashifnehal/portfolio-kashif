# Decision 0005: Temporary Content Workflow

Date: 2026-09-07

## Decision

Proceed toward implementation with centralized, replaceable content/configuration rather than blocking on final portfolio copy and assets. The working identity is `Kashif Nehal`; temporary content may be replaced later.

The user requested using the same reference content temporarily to avoid blocking implementation, then replacing it later. This is recorded as a workflow preference, not authorization to copy or redistribute reference-owned material.

## Constraint

Temporary content must be original, user-owned, licensed, or generated for the project. The reference site's artwork, fonts, project images, identity, and personal/social links cannot be copied or redistributed merely because they will be replaced later.

## Consequences

- Text, image paths, project metadata, and external destinations must live in centralized data/configuration.
- Design tokens and animation targets must not depend on specific temporary content dimensions.
- Final asset ownership and link destinations remain open until replacement work is completed.

## Temporary Tyler artifact

The existing `PortfolioModalBlocker` is retained as a disabled practice artifact tagged by its Tyler-specific content. It is no longer rendered from the root layout, so it does not block the portfolio during local development.

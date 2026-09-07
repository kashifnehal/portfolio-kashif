# Decision 0001: Project Documentation System

Date: 2026-09-07

## Decision

Use `docs/` as the single source of truth for the portfolio development process, with separate locations for status, changes, tasks, reference research, architecture, design, development, testing, and decisions.

## Reason

The redesign requires ongoing tracking of analysis, implementation, validation, fixes, and technical or design decisions. Separating these concerns keeps the current state and historical record clear without duplicating application documentation.

## Consequences

- Every completed task must update the relevant documentation.
- Every validation run must be recorded in `docs/testing/`.
- Every meaningful design or technical decision must be recorded in `docs/decisions/`.
- Unknown information must remain explicitly marked as `Not yet verified`.
- No application functionality is changed by this decision.

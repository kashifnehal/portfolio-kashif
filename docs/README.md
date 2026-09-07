# Portfolio Project Documentation

This directory is the single source of truth for the portfolio development process. Documentation records the actual repository state, decisions, implementation work, testing, and remaining work.

## Source of truth

- `PROJECT_STATUS.md`: current project stage, implementation state, issues, risks, and next task.
- `architecture.md`: proposed portfolio structure, responsibilities, tokens, motion, routing, testing, performance, and senior review.
- `IMPLEMENTATION_PROMPTS.md`: ordered prompt roadmap and working decisions for future implementation passes.
- `CHANGELOG.md`: completed changes, reasons, affected files, and validation.
- `TODO.md`: active work items, priorities, blockers, and notes.
- `reference/`: reference-site research and constraints. Unverified observations must be marked accordingly.
- `architecture/`: application structure, boundaries, dependencies, and technical design.
- `design/`: visual direction, interaction behavior, responsive rules, and accessibility requirements.
- `development/`: setup, workflow, conventions, and implementation notes.
- `testing/`: test plans, commands, results, and known test gaps.
- `decisions/`: dated technical and design decisions with their rationale.

## Update rules

- Update `PROJECT_STATUS.md` whenever the current stage or known risks change.
- Update `CHANGELOG.md` whenever files are changed or a fix is completed.
- Update `TODO.md` when work is completed or new work is discovered.
- Record each meaningful design or technical decision in `decisions/`.
- Record every validation run and its result in `testing/`.
- Do not infer missing facts. Use `Not yet verified` until they are checked.
- Keep entries concise and link to the relevant source files where useful.

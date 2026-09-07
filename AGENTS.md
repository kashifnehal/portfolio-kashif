# PORTFOLIO AGENT RULES

Never skip validation.

Never claim something works without testing it.

Never hide errors.

Never replace a failed test with deleting the test.

Never make large architectural changes without reviewing the existing architecture.

Never blindly copy reference-site content.

The reference site is used to study:
- layout
- interaction
- motion
- visual hierarchy
- technical patterns

Our site uses:
- our own content
- our own identity
- our own assets
- our own project information

After every implementation task:

1. Compare implementation against expectation.
2. Test the relevant behavior.
3. Review your own code.
4. Fix issues found.
5. Run validation again.
6. Report what passed.
7. Report what failed.
8. Explicitly state whether the task expectation was satisfied.
9. Explicitly state anything required from the user.

Do not proceed as though a task is complete when important parts remain unverified.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

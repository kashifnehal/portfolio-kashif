# Kashif Nehal Portfolio

## AI Agent Handoff

This is a Next.js 16 App Router portfolio foundation for Kashif Nehal. The project has completed reference forensics, architecture planning, dependency migration, legacy cleanup, motion infrastructure, typed project routing, and Playwright smoke tests. Full homepage implementation is the next phase.

Before changing code, read in this order:

1. `AGENTS.md` for mandatory workflow and validation rules.
2. `docs/PROJECT_STATUS.md` for the current state, risks, and next task.
3. `docs/IMPLEMENTATION_PROMPTS.md` to identify the next approved prompt. Work one prompt at a time.
4. `docs/architecture.md` for component, content, routing, motion, WebGL, testing, and accessibility boundaries.
5. `docs/reference/` for the forensic design, responsive, interaction, animation, technology, and asset specifications.
6. `docs/testing/BASELINE.md`, `docs/CHANGELOG.md`, and `docs/TODO.md` for validation history and remaining work.

Keep content centralized under `content/`, preserve `public/` and `data/`, and do not copy the reference site's identity or protected content. After every task, update the relevant `/docs` files, run validation, and record the commit ID and timestamp.

Current stack: Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP, ScrollTrigger, Lenis, Three.js, and Playwright. Deployment target: Vercel with `kashifnehal.com`.

## Quick Summary

- Replaced the old homepage composition with a foundation-only hero.
- Added design tokens, reduced-motion support, GSAP/ScrollTrigger/Lenis lifecycle utilities, and an optional WebGL visual.
- Added typed project data and `/projects/[slug]` routes.
- Added loading, error, not-found, and Playwright foundations.
- Removed deprecated `@next/font`, styled-components, the old Tyler modal, and disconnected legacy components.
- Preserved `data/` and `public/` assets.
- Added replaceable placeholder content under `content/`.
- Latest pushed cleanup commit: `00549a6`.

## Getting Started

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

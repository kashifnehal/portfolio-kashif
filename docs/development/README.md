# Development Notes

## Commands

- `npm run dev`: starts the Next.js 16 development server.
- `npm run lint`: runs ESLint 9 using `eslint.config.mjs`.
- `npm run build`: creates the production build.
- `npm run start`: starts the production server after a successful build.

## Environment baseline

- Node: `v23.11.0`.
- npm: `10.9.2`.
- Next.js: `16.3.4`.
- Declared package manager: npm `10.9.2`.
- Lockfiles: `package-lock.json`; the stale Yarn lockfile has been removed.

The canonical package manager is verified as npm. A supported Node LTS version for deployment is `Not yet verified`; current local Node is `v23.11.0`.

## Current conventions

TypeScript strict mode is enabled. Next 16 uses the App Router and Turbopack by default. ESLint 9 flat configuration is in `eslint.config.mjs`. No formatter configuration was found.

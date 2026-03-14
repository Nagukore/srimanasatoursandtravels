# Srimanasa — Journeys Unfolded

A marketing site for Srimanasa Tours & Travels built with Vite, React and TypeScript. The repository contains a small component-driven UI (shadcn-style + Tailwind) for showcasing services, fleet, coverage and contact information.

## Key features
- Responsive landing site with hero, services, fleet, coverage, why-us and contact sections
- Reusable UI components under `src/components` and `src/components/ui`
- Navbar and Footer with brand logo (favicon) placed in both
- Tailwind CSS + shadcn-style primitives

## Notable files
- `src/components/Navbar.tsx` — top navigation and brand (logo at left)
- `src/components/Footer.tsx` — footer with brand and contact info
- `public/favicon.jpg` — project logo used in navbar and footer
- `src/pages/Index.tsx` — main page assembly

## Tech stack
- Vite
- React + TypeScript
- Tailwind CSS
- shadcn-ui / Radix primitives
- Vitest for tests

## Local development
Requirements: Node.js (recommended 18+) and npm or bun.

```bash
git clone <YOUR_GIT_URL>
cd srimanasa-journeys-unfolded-main
npm install
npm run dev
```

Available scripts (see `package.json`):
- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview build locally
- `npm run test` — run tests with Vitest

## Customizing the logo
Replace `public/favicon.jpg` with your image (square recommended). Navbar and Footer reference `/favicon.jpg`.

## Deploy
Build with `npm run build` and deploy the `dist/` output to any static hosting (Vercel, Netlify, etc.).

## License
Add your license information here.

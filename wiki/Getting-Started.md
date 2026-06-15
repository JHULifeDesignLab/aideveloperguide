# Getting Started

## Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`) — the project uses pnpm lockfile

## Run locally

```bash
git clone https://github.com/JHULifeDesignLab/aideveloperguide.git
cd aideveloperguide
pnpm install
pnpm dev
```

App opens at `http://localhost:5173/aideveloperguide/`.

## Build

```bash
pnpm build
```

Output goes to `dist/`. The `base` in `vite.config.ts` is set to `/aideveloperguide/` to match the GitHub Pages deployment path.

## Deploy

Deployment is automated via GitHub Actions (`.github/workflows/`). Pushing to `main` triggers a build and deploys to GitHub Pages.

To deploy manually:

```bash
pnpm build
# then push the dist/ contents to the gh-pages branch, or let the workflow handle it
```

## Key dependencies

| Package | Purpose |
|---------|---------|
| `@mdx-js/rollup` | Compiles `.mdx` files at build time |
| `@mdx-js/react` | Provides `MDXProvider` for custom components |
| `react-router-dom` | Client-side routing |
| `tailwindcss` | Styling |
| `remark-gfm` | GitHub-flavored Markdown in MDX (tables, etc.) |

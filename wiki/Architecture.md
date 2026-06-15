# Architecture

## Folder structure

```
src/
├── content/          # All page content as MDX files
│   ├── google/
│   │   ├── _index.mdx     # Landing page (/google)
│   │   ├── step-1.mdx     # /google/step-1
│   │   ├── step-2.mdx
│   │   ├── step-3.mdx
│   │   └── resources.mdx
│   ├── amazon/        # Same structure
│   ├── microsoft/
│   ├── claude-code/
│   ├── rag/
│   └── other/         # Shared content (e.g. llm-basics.mdx)
│
├── data/
│   ├── topic-config.ts    # Canonical vendor colors/names + per-page overrides
│   ├── learning-paths.json # Step titles and module metadata shown on landing cards
│   └── navigation.json    # Back/forward links for every page
│
├── pages/
│   ├── TopicPage.tsx      # Single dynamic component that handles ALL topic routes
│   └── resources/         # Static resource pages (resume, github, etc.)
│
└── components/
    ├── StepPageLayout.tsx  # Wrapper for step and resources pages (breadcrumb, side nav)
    ├── VendorLanding.tsx   # Step cards + resources button on landing pages
    └── NavigationLayout.tsx # Breadcrumb + side nav arrows for index text content
```

## How routing works

`App.tsx` has two dynamic routes that handle every topic:

```
/:vendor          → TopicPage (pageKey = "index")
/:vendor/:page    → TopicPage (pageKey = "step-1", "step-2", etc.)
```

`TopicPage.tsx` uses Vite's `import.meta.glob` to pre-import every MDX file at build time, then picks the right one based on the URL:

```
/google/step-1  →  src/content/google/step-1.mdx
/rag/resources  →  src/content/rag/resources.mdx
```

For index pages (`/:vendor`), the MDX file is self-contained — it imports and renders `VendorLanding` and `NavigationLayout` itself.

For step/resource pages, `TopicPage` wraps the MDX in `StepPageLayout` which provides the breadcrumb, card shell, and side nav arrows.

## Special cases

### `claude-code/step-1`

This step uses shared content from `src/content/other/llm-basics.mdx` instead of a file in the `claude-code/` folder, and renders in slate (gray) instead of purple to signal it's a prerequisite rather than a numbered step.

This is configured in `src/data/topic-config.ts` under the `claude-code` entry:

```ts
'claude-code': {
  pages: {
    'step-1': {
      mdxPath: 'other/llm-basics',
      colorOverride: { bgColor: 'bg-slate-500', ... }
    }
  }
}
```

## Keywords page

The Keywords page (`/keywords`) is **hardcoded** — terms and definitions live in a single JSON file at `src/content/other/keywords.json`. There is no CMS or dynamic source.

Each entry has this shape:

```json
{
  "term": "RAG",
  "fullName": "Retrieval-Augmented Generation",
  "explanation": "...",
  "origin": "..."
}
```

`KeywordsIndexPage.tsx` reads the file directly and renders the list. To add, edit, or remove a term, edit `keywords.json` — no code changes needed.

The page shows the count of terms and today's date automatically, so the header stays current without any manual updates.

**Future improvement:** if the list grows large or multiple people need to contribute terms without touching JSON, this could be migrated to an MDX file with a table, or a simple headless CMS. For now, JSON is sufficient.

---

## How vendor config is shared

`src/data/topic-config.ts` is the single source of truth for each vendor's display name and colors. `StepPageLayout`, `VendorLanding`, and `NavigationLayout` all import from it — there are no duplicate color definitions.

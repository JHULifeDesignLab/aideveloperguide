# Adding a New Topic

Adding a new learning path (e.g. "OpenAI") requires changes to four places. No new React components or routes needed.

---

## 1. Create the MDX content files

Create a folder `src/content/your-topic/` with these files:

```
src/content/your-topic/
├── _index.mdx     ← landing page
├── step-1.mdx
├── step-2.mdx
├── step-3.mdx     ← optional
└── resources.mdx
```

### `_index.mdx` template

```mdx
---
title: "Your Topic — Guide"
vendor: "your-topic"
slug: "/your-topic"
lastReviewed: "2026-01-01"
---

import VendorLanding from "../../components/VendorLanding"
import NavigationLayout from "../../components/NavigationLayout"

<VendorLanding vendor="your-topic" />

<NavigationLayout vendor="your-topic" pageKey="index">

## About
Your intro content here.

## How this guide works
1. **Step 1 – ...**
2. **Step 2 – ...**

</NavigationLayout>
```

### Step page template (`step-1.mdx`, etc.)

```mdx
---
title: "Step 1 · ..."
vendor: "your-topic"
ordinal: 1
slug: "/your-topic/step-1"
lastReviewed: "2026-01-01"
---

# Step 1: ...

Your content here.
```

### `resources.mdx` template

```mdx
---
title: "Resources"
vendor: "your-topic"
slug: "/your-topic/resources"
lastReviewed: "2026-01-01"
---

# Resources

Your resources here.
```

---

## 2. Add to `src/data/topic-config.ts`

```ts
'your-topic': {
  name: 'Your Topic Display Name',
  bgColor: 'bg-indigo-600',
  textColor: 'text-indigo-600',
  borderColor: 'border-indigo-600',
  gradientColor: 'rgba(79,70,229,0.13)',
},
```

Pick a Tailwind color. The gradient is the same color at ~13% opacity (used for the side nav hover effect).

---

## 3. Add to `src/data/learning-paths.json`

This controls the step cards shown on the landing page:

```json
"your-topic": {
  "steps": [
    {
      "id": "step-one",
      "title": "Step 1 · Your title",
      "description": "Short description shown on the card.",
      "modules": 4,
      "totalHours": "2-4"
    },
    {
      "id": "step-two",
      "title": "Step 2 · Your title",
      "description": "Short description."
    }
  ]
}
```

Only the first two steps appear as cards on the landing page. The rest are navigated to via the step sequence.

---

## 4. Add to `src/data/navigation.json`

This controls the back/forward arrows on every page:

```json
"your-topic": {
  "index": {
    "back": { "href": "/", "label": "Back to Home" },
    "forward": { "href": "/your-topic/step-1", "label": "Next: Step 1" }
  },
  "step-1": {
    "back": { "href": "/your-topic", "label": "Back to Guide" },
    "forward": { "href": "/your-topic/step-2", "label": "Next: Step 2" }
  },
  "step-2": {
    "back": { "href": "/your-topic/step-1", "label": "Previous: Step 1" },
    "forward": { "href": "/your-topic/resources", "label": "Next: Resources" }
  },
  "resources": {
    "back": { "href": "/your-topic/step-2", "label": "Previous: Step 2" },
    "forward": { "href": "/", "label": "Back to Home" }
  }
}
```

---

## 5. Link to it from the home page (optional)

If you want the new topic to appear on the home page, edit `src/pages/HomePage.tsx` to add a card linking to `/your-topic`.

---

## Checklist

- [ ] `src/content/your-topic/_index.mdx`
- [ ] `src/content/your-topic/step-1.mdx`
- [ ] `src/content/your-topic/step-2.mdx`
- [ ] `src/content/your-topic/resources.mdx`
- [ ] Entry in `src/data/topic-config.ts`
- [ ] Entry in `src/data/learning-paths.json`
- [ ] Entry in `src/data/navigation.json`

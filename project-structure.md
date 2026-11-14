# NEXO LINX — PROJECT ARCHITECTURE & STRUCTURE

> **Architecture Standard:** Next.js (App Router) + TypeScript + Tailwind CSS + Design Tokens  
> **Status:** Initialized & Verified

---

## 1. Directory Hierarchy

```
Nexo Linx/
├── .github/
│   └── skills/
│       └── antigravity-ui-motion-design-expert/
│           └── SKILL.md
├── public/
│   └── brand/
│       ├── nexolinx-logo.svg             # Official vector SVG logo
│       ├── nexolinx-mark.png             # Official hexagonal emblem mark
│       └── nexolinx-official-banner.png  # Official branding banner asset
├── src/
│   ├── app/
│   │   ├── globals.css                   # Aggregated global CSS (Tailwind + Tokens)
│   │   ├── layout.tsx                    # Root HTML layout with Inter Tight font & metadata
│   │   └── page.tsx                      # Foundation landing page (Awaiting Prompt 02)
│   ├── assets/
│   │   └── brand/                        # Internal project brand assets
│   │       ├── nexolinx-logo.svg
│   │       ├── nexolinx-mark.png
│   │       └── nexolinx-official-banner.png
│   ├── components/                       # Modular UI components (To be populated in Prompt 02+)
│   │   ├── common/                       # Shared atomic components (Button, Badge, etc.)
│   │   ├── layout/                       # Structural layout components
│   │   └── sections/                     # Section-specific components
│   ├── constants/
│   │   └── brand.ts                      # Authoritative brand values, URLs, and token constants
│   ├── fonts/
│   │   └── index.ts                      # Inter Tight web font configuration via next/font/google
│   ├── styles/
│   │   ├── design-tokens.css             # CSS custom properties (:root tokens)
│   │   ├── global.css                    # CSS reset, containers, focus indicators & media defaults
│   │   └── typography.css                # Inter Tight hierarchy, fluid scales & text utilities
│   └── utils/
│       └── cn.ts                         # Class name merge utility (clsx + tailwind-merge)
├── design-system.md                      # Complete design system specification deliverable
├── design-tokens.css                     # Root deliverable design tokens stylesheet
├── global.css                            # Root deliverable global styles stylesheet
├── next.config.mjs                       # Next.js configuration
├── package.json                          # Dependencies & scripts
├── pnpm-lock.yaml                        # Deterministic dependency lockfile
├── postcss.config.js                     # PostCSS config (Tailwind & Autoprefixer)
├── project-structure.md                  # Project architecture documentation deliverable
├── tailwind.config.ts                    # Tailwind CSS configuration mapping all tokens
├── tsconfig.json                         # Strict TypeScript configuration
└── typography.css                        # Root deliverable typography stylesheet
```

---

## 2. Separation of Concerns

1. **`src/styles/` & Root CSS Files:**
   Central source of truth for visual tokens. No inline hardcoded hex values or arbitrary numbers.
2. **`src/fonts/`:**
   Zero-layout-shift font optimization using `next/font/google` for `Inter Tight`.
3. **`src/constants/`:**
   Single source of truth for company metadata, contacts, social links, and theme references.
4. **`src/components/`:**
   Modular, accessible components created incrementally in subsequent prompts.
5. **`public/brand/`:**
   Original authoritative vector and raster logo assets.

---

## 3. Toolchain & Dependencies

- **Runtime:** Node.js v24.18.1
- **Package Manager:** pnpm v11.5.2
- **Framework:** Next.js v15.5.29
- **Core Library:** React v19.3.1
- **Styling:** Tailwind CSS v3.4.19 + PostCSS v8.5.32 + Autoprefixer
- **Language:** TypeScript v5.9.3 (strict mode)
- **Utilities:** clsx v2.1.1, tailwind-merge v3.7.0, lucide-react v1.72.0

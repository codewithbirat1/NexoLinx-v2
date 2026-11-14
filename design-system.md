# NEXO LINX — GLOBAL DESIGN SYSTEM & BRAND SPECIFICATION

> **Version:** 1.0.0  
> **Author:** Senior Frontend Architect & Design System Specialist  
> **Status:** Production-Ready Foundation  
> **Reference:** UI Recording Analysis + Official Nexo Linx Brand Assets

---

## 1. Official Brand Identity

The brand identity is anchored by the official Nexo Linx logo mark and strict color specifications.

### 1.1 Official Brand Palette

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Primary Blue | `#1374DF` | Primary actions, key CTAs, active highlights, links, glowing rings |
| **Monochrome Anchor** | Pure Black | `#000000` | Primary dark surface, canvas background, high-contrast anchor |
| **Monochrome Anchor** | Pure White | `#FFFFFF` | Primary headings, light canvas surface, crisp contrast |
| **Supporting Hover** | Blue Hover | `#0F65C5` | Button hover states, interactive link hover, active states |
| **Supporting Tint** | Light Blue | `#E8F2FF` | Pill badge backgrounds, text highlights on light backgrounds |
| **Supporting Text** | Secondary Text | `#888888` | Subtitles, body copy, descriptions, metadata |
| **Supporting Border** | Subtle Border | `#252525` | Card borders, divider lines, grid borders |

### 1.2 Strict Brand Rules
- **No Hue Drift:** Never substitute `#1374DF` with purple, green, lime, cyan, or arbitrary accent colors. The lime-accent in the reference recording is adapted strictly to `#1374DF` and `#0F65C5`.
- **Logo Integrity:** Never recolor, stretch, distort, or modify the official geometric hexagon logo mark.
- **Hierarchy:** Blue is reserved for primary actions, badges, interactive elements, and focused states; black and white maintain contrast.

---

## 2. Typography System

### 2.1 Official Primary Font
- **Font Family:** `Inter Tight`
- **Font Stack:** `"Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Rendering:** 100% Web Font via `next/font/google` with CSS `@import` fallback
- **Base Font Size:** `16px`
- **Base Line Height:** `21px` (`1.3125`)
- **Vertical Alignment:** `baseline`
- **Default Letter Spacing:** `normal`

### 2.2 Typography Scale & Hierarchy

| Token | Size | Line Height | Letter Spacing | Element / Role |
| :--- | :--- | :--- | :--- | :--- |
| `--font-size-xs` | `12px` | `16px` | `+0.08em` | Pill badges, tags, metadata, uppercase labels |
| `--font-size-sm` | `14px` | `19px` | `+0.01em` | Navigation items, button labels, secondary captions |
| `--font-size-base` | `16px` | `21px` | `normal` | Body paragraphs, input fields, default text |
| `--font-size-lg` | `20px` | `26px` | `-0.01em` | Lead paragraphs, card titles (sub), h5 |
| `--font-size-xl` | `24px` | `30px` | `-0.015em` | Card titles, feature headlines, h4 |
| `--font-size-2xl` | `32px` | `38px` | `-0.02em` | Section subheadings, modal titles, h3 |
| `--font-size-3xl` | `48px` | `54px` | `-0.025em` | Primary section headings, h2 |
| `--font-size-4xl` | `64px` | `70px` | `-0.035em` | Hero display headlines, h1 |

---

## 3. Visual Design Direction & Reference Analysis

From the reference recording inspection:
1. **Aesthetic:** Dark, high-contrast digital agency design with spatial depth, subtle glows, and glassmorphic surface elevation.
2. **Section Flow:** Seamless transitions between deep dark sections (`#000000`, `#080809`) and crisp content blocks.
3. **Card Styling:** Dark cards (`#0F0F12`) with subtle 1px border (`#252525`), transitioning to brand blue hover glow (`rgba(19, 116, 223, 0.4)`).
4. **Interactive Accents:** Pill badges with subtle brand tint (`rgba(19, 116, 223, 0.12)`) and blue borders.
5. **Motion Foundations:** Native scroll preservation, reduced-motion accessibility, and buttery-smooth easing curves (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 4. Spacing & Layout Tokens

### 4.1 Spacing Scale
- `4px` (`--space-4`)
- `8px` (`--space-8`)
- `12px` (`--space-12`)
- `16px` (`--space-16`)
- `24px` (`--space-24`)
- `32px` (`--space-32`)
- `48px` (`--space-48`)
- `64px` (`--space-64`)
- `80px` (`--space-80`)
- `96px` (`--space-96`)

### 4.2 Layout Tokens
- **Maximum Container Width:** `1240px` (`--container-max-width`)
- **Mobile Gutter:** `16px`
- **Tablet Gutter:** `24px`
- **Desktop Gutter:** `32px`
- **Section Spacing (Mobile / Tablet / Desktop):** `48px` / `80px` / `96px`

---

## 5. Responsive Breakpoints

| Breakpoint | Range | Target Device Group |
| :--- | :--- | :--- |
| **Mobile** | `320px – 767px` | Smartphones (portrait & landscape) |
| **Tablet** | `768px – 1023px` | Tablets, iPads, small foldables |
| **Desktop** | `1024px – 1439px` | Laptops and standard desktop displays |
| **Large Desktop** | `1440px and above` | Large monitors, ultra-wide screens |

---

## 6. Implementation Files
- Design Tokens: [design-tokens.css](file:///A:/Nexo%20Linx/design-tokens.css) & [src/styles/design-tokens.css](file:///A:/Nexo%20Linx/src/styles/design-tokens.css)
- Typography: [typography.css](file:///A:/Nexo%20Linx/typography.css) & [src/styles/typography.css](file:///A:/Nexo%20Linx/src/styles/typography.css)
- Global Styles: [global.css](file:///A:/Nexo%20Linx/global.css) & [src/styles/global.css](file:///A:/Nexo%20Linx/src/styles/global.css)
- Tailwind Configuration: [tailwind.config.ts](file:///A:/Nexo%20Linx/tailwind.config.ts)
- Brand Constants: [src/constants/brand.ts](file:///A:/Nexo%20Linx/src/constants/brand.ts)

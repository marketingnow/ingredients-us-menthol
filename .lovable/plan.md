# Build MentholPage.tsx — Menthol ingredient page

A single, fully self-contained route component for the Menthol ingredient page on terrafreeze.com. All content is hardcoded per the detailed spec. No props, no template placeholders.

## What gets built

A new route file at `src/routes/menthol.tsx` exporting a TanStack Start route that renders `MentholPage`. The component itself (`MentholPage.tsx`) lives at `src/components/MentholPage.tsx` and contains all 16 sections exactly as specified:

1. Hero (dark blue full-bleed, category chip, H1, tagline)
2. Ingredient image (16/9, rounded, soft shadow)
3. TL;DR card (gold left border)
4. CTA block (gold "Add To Cart")
5. What is menthol (40–60 word snippet paragraph + bullet list)
6. Clinical evidence (3 cards, blue left border, FDA / TRPM8 / Clinical Journal of Pain)
7. Expert quote (gold-tinted card, Dr. Anne Louise Oaklander)
8. How people use menthol (2-col grid of use cases)
9. How to apply safely (numbered circle steps)
10. Safety & contraindications (3 gold-bordered caution cards + disclaimer box)
11. Related ingredients (pill links)
12. FAQs (accordion, first open by default, useState)
13. Product callout box (bordered card + gold CTA)
14. References (numbered)
15. Helpful links + medical reviewer block
16. Full-bleed dark disclaimer footer band

## Design fidelity

- All brand tokens applied via Tailwind arbitrary values (`bg-[hsl(207,76%,24%)]` etc.) — no theme edits, no inline styles
- Plus Jakarta Sans loaded from Google Fonts via a `<link>` injected in the route's `head()` (weights 300–800)
- All shadows, radii, paddings, gaps, font sizes, and opacities match the spec exactly
- Mobile breakpoint at `md:` (768px) for single-column collapse, reduced padding, smaller H1 (46px → 30px)
- Hero is text-only on flat dark background (no gradient)
- Each section is full-bleed background with an inner max-width container

## Interactivity

- FAQ accordion uses `useState<number | null>(0)` so item 0 is open by default; chevron rotates 180° via `transition-transform`
- Smooth max-height animation for answer panels
- Gold button hover: `hover:brightness-110 hover:-translate-y-0.5 transition`
- Pill link hover: bg/text swap with 150ms transition

## Image asset

The spec calls for `import mentholImage from "@/assets/ingredient-menthol.jpg"`. Since this asset doesn't exist in the project, I'll generate a fitting menthol/eucalyptus close-up photo and save it to `src/assets/ingredient-menthol.jpg` so the import resolves and the build succeeds.

## Technical details

- File 1: `src/assets/ingredient-menthol.jpg` (generated image)
- File 2: `src/components/MentholPage.tsx` — the standalone component (default export), all 16 sections, useState for accordion, no props
- File 3: `src/routes/menthol.tsx` — TanStack route at `/menthol` that renders `<MentholPage />` and injects the Plus Jakarta Sans stylesheet via `head().links`
- All styling via Tailwind utilities with arbitrary HSL values for exact brand-token fidelity
- No new dependencies needed (chevron/quote icons rendered inline as SVG)
- Strict TypeScript clean; no `any`

## Out of scope

- No changes to `__root.tsx`, global styles, or theme tokens
- No nav/header/footer chrome — page is standalone as specified
- "Add To Cart" buttons are non-functional (no cart system specified)

# T3Kit Ecosystem — Next.js + TypeScript

This project renders the supplied T3Kit website as native React/JSX markup, split into top-level components under `components/`. The original stylesheet is preserved in `public/site.css`, and the original behavior scripts are preserved as ordered external scripts under `public/site-scripts/` so the authored animations and interactions can be checked without a visual redesign. No iframe is used.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The design source of truth is the supplied `index-17.html`. Preserve its visual output when making future changes.

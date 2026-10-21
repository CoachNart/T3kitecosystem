# Migration notes

- The supplied page markup is converted into native JSX components in `components/`, including separate components for the major page sections. No iframe is used.
- The original stylesheet is preserved in `public/site.css` and loaded by `app/globals.css` to retain the visual design.
- The original inline JavaScript is preserved in order under `public/site-scripts/`. `SiteScripts.tsx` loads it after the React markup mounts. This retains the source's existing animation and interaction behavior; it has not been fully rewritten into React hooks.
- Metadata, the original favicon data URI, theme color, and Google Fonts links are preserved in the Next.js layout.
- A production build could not be run in this environment because npm registry access failed (`EAI_AGAIN`). TypeScript/TSX syntax and JavaScript syntax were checked locally.

# AGENTS.md

## Repo shape (do not assume a framework)
- This is a static single-page site.
- Main entrypoint and all runtime JS logic: `index.html`.
- Main styles: `styles.css`.
- Crawl/indexing files live at repo root: `robots.txt`, `sitemap.xml`, `site.webmanifest`.
- Root assets are referenced directly by filename (favicons, `image_large.png` for Open Graph/JSON-LD).

## Commands and verification
- Sitio estático en la raíz: sin build; revisar `index.html` en el navegador.
- La app Next vive en `landing-n8n/` (allí sí hay `package.json` y `npm run build`).
- Practical verification is file-level review plus browser check of `index.html`.

## High-risk edit points in `index.html`
- JS selectors are hardcoded. If you rename IDs/classes below, update JS and nav links together:
  - Sections/anchors: `#inicio`, `#nuestro-servicio`, `#servicios`, `#contacto`, `#faq`, `#formulario`
  - Behavior hooks: `.topbar`, `.reveal`, `#formulario-whatsapp`, `#tipo-proyecto`, `#year`
- WhatsApp number `593962562482` appears in multiple places (links, form script, JSON-LD). Update all in one pass.

## SEO source of truth
- SEO metadata is maintained directly in `index.html` `<head>` (canonical/hreflang, Open Graph, Twitter, JSON-LD).
- Domain is hardcoded as `https://codidevs.com` across:
  - `index.html` canonical/hreflang/og/twitter/json-ld URLs
  - `robots.txt` sitemap line
  - `sitemap.xml` `<loc>`
- If domain changes, update all references in the same change set.

## Styling gotcha already fixed
- Infinite services marquee spacing depends on `.features { padding-right: ... }` in `styles.css`.
- Removing that right padding reintroduces the visual seam/collision when the loop restarts.

## Git hygiene specific to this repo
- Usa `.gitignore` en la raíz. No subas `node_modules/`, `.next/`, `.vercel/`, ni archivos `*.tsbuildinfo`.

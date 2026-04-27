# AGENTS.md

## Repo shape (do not assume a framework)
- Proyecto principal: `proyect-next/` (Next.js App Router).
- Entrypoints de rutas: `proyect-next/app/page.tsx` y `proyect-next/app/n8n/page.tsx`.
- Estilos globales: `proyect-next/app/globals.css`.
- SEO/crawl en App Router: `proyect-next/app/robots.ts` y `proyect-next/app/sitemap.ts`.
- Assets públicos en `proyect-next/public/` (por ejemplo `image_large.png` e íconos).

## Commands and verification
- Ejecutar desde `proyect-next/`.
- Comandos principales: `npm run dev`, `npm run build`, `npm run lint`.
- Practical verification is `npm run build` + revisión visual en `npm run dev`.

## High-risk edit points in Next
- En `proyect-next/components/codidevs/home-landing.tsx` los IDs/anclas están acoplados a navegación interna (`#inicio`, `#nuestro-servicio`, `#servicios`, `#contacto`, `#faq`, `#formulario`).
- Número WhatsApp `593962562482` aparece en varios puntos (`home-landing.tsx`, `lib/whatsapp-links.ts`, `lib/home-json-ld.ts`). Si cambia, actualizar en una sola pasada.

## SEO source of truth
- SEO metadata se mantiene en App Router:
  - `proyect-next/app/layout.tsx` (base metadata)
  - `proyect-next/app/page.tsx` y `proyect-next/app/n8n/page.tsx` (metadata por ruta)
  - `proyect-next/lib/home-json-ld.ts` (structured data)
- Domain is hardcoded as `https://codidevs.com` across:
  - metadata y JSON-LD en `app/*.tsx` + `lib/home-json-ld.ts`
  - `proyect-next/app/robots.ts`
  - `proyect-next/app/sitemap.ts`
- If domain changes, update all references in the same change set.

## Styling gotcha already fixed
- Infinite services marquee spacing depende de los bloques duplicados en `proyect-next/components/codidevs/home-landing.tsx` y de utilidades en `proyect-next/app/globals.css`.
- Cambios de spacing en ese carrusel pueden reintroducir seams al reiniciar el loop.

## Git hygiene specific to this repo
- Usa `.gitignore` en la raíz. No subas `node_modules/`, `.next/`, `.vercel/`, ni archivos `*.tsbuildinfo`.

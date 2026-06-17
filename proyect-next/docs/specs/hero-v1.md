# Spec: Hero v1 — TextCursorProximity (full-bleed)

## Objetivo

Reemplazar el hero anterior por un bloque full-bleed con `TextCursorProximity` (estilo demo DIGITAL/WORKSHOP), adaptado a CodiDevs en blanco/verde.

## Alcance (v1)

- Solo la sección hero de `/` (`#inicio`).
- Dos líneas interactivas: **SISTEMAS** + **AUTOMATIZACIÓN**.
- Calculadora de impacto en sección separada `#calculadora` (debajo del hero).
- Sin cambios en navegación, footer ni secciones inferiores.

## Dependencias

| Paquete | Uso |
|---------|-----|
| `motion` | `import … from "motion/react"` |
| `@/components/ui/text-cursor-proximity` | Componente shadcn-style |
| `@/hooks/use-mouse-position-ref` | Hook danielpetho (window mouse + touch) |

## Tokens visuales (obligatorios)

| Token | Valor |
|-------|-------|
| Fondo página | `--background` (~blanco titanium) |
| Superficie card hero | `--secondary` `oklch(0.965)` + sombra elevada |
| Watermark | `/icon.svg` centrado, `opacity ~9%` |
| Texto principal | `--foreground` |
| Verde marca | `--primary` `#1D9B52` |
| Verde acento | `--accent` `#3C9F5A` |
| Texto secundario | `--muted-foreground` |

## Contenido (fuente de verdad)

- **Headlines:** SISTEMAS / AUTOMATIZACIÓN
- **Eyebrow:** Sistemas y Automatización de Procesos en Ecuador
- **Subtítulo:** Diseñamos y desarrollamos sistemas internos, CRMs y automatizaciones…
- **CTA primario:** Solicitar Diagnóstico Gratuito → `#formulario`
- **CTA secundario:** Calcular pérdida operativa → `#calculadora`
- **Esquina:** ECUADOR (proximidad)
- **Footer hero:** iconos lucide (Workflow, DatabaseZap, MonitorCog, Braces)

## Comportamiento del efecto

1. Proximidad por letra en headlines y label ECUADOR.
2. Interpolación:
   - `color`: `#94a89e` → `#1D9B52`
   - `transform`: `scale(1)` → `scale(1.15)`
3. `falloff: gaussian`, `radius: 100` (headlines); `linear`, `radius: 10` (ECUADOR).
4. `useReducedEffects()`: fallback estático sin animación letra-a-letra.

## Superficie card

- Fondo `bg-secondary` — blanco ligeramente más oscuro que la página.
- Sombra elevada: `0_22px_60px` + `0_8px_24px` (oklch black / low alpha).
- Watermark favicon (`/icon.svg`) centrado, detrás del contenido (`z-0`), texto/corners en `z-10`.

## Hydration

- `AnimatedNumber` usa `toLocaleString("es-EC")` — SSR y client deben coincidir.
- Sin warning de hydration en consola.

## Criterios de aceptación

- [ ] Card hero resalta vs fondo página (secondary + sombra).
- [ ] Watermark favicon visible en armonía, texto legible encima.
- [ ] Headlines reaccionan al cursor en desktop.
- [ ] Calculadora en sección `#calculadora` debajo del hero.
- [ ] Fallback accesible sin animación en móvil / reduced motion.
- [ ] CTAs y anclas (`#formulario`, `#calculadora`) intactos.
- [ ] Zero hydration mismatch en consola.
- [ ] `npm run build` pasa sin errores.

## Fuera de alcance (v1)

- `next-themes` / dark mode.
- Cambios en `/n8n` hero.
- Rediseño de secciones inferiores.

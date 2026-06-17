"use client"

import { useRef } from "react"
import Image from "next/image"
import { Braces, ChevronRight, DatabaseZap, MonitorCog, Workflow } from "lucide-react"
import TextCursorProximity from "@/components/ui/text-cursor-proximity"
import { useReducedEffects } from "@/lib/use-reduced-effects"

const HERO_ICONS = [Workflow, DatabaseZap, MonitorCog, Braces] as const

const proximityStyles = {
  transform: {
    from: "scale(1)",
    to: "scale(1.15)",
  },
  color: {
    from: "#94a89e",
    to: "#1D9B52",
  },
} as const

const headlineClass =
  "leading-none text-3xl will-change-transform font-display uppercase sm:text-6xl md:text-7xl lg:text-8xl"

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedEffects()

  return (
    <section
      ref={containerRef}
      className="section-performance relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-32 lg:pt-36"
    >
      <div className="surface-elevated relative flex min-h-[78svh] w-full cursor-default flex-col overflow-hidden rounded-3xl border border-border bg-secondary sm:min-h-[82svh]">
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
          aria-hidden="true"
        >
          <Image
            src="/icon.svg"
            alt=""
            width={420}
            height={420}
            priority
            className="h-auto w-[min(55vw,420px)] opacity-[0.09]"
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-8 uppercase leading-none sm:px-10 sm:pt-[5px] md:px-14">
          {reduced ? (
            <>
              <h1 className={`${headlineClass} text-foreground`}>Sistemas</h1>
              <p className={`${headlineClass} headline-accent`}>Automatización</p>
            </>
          ) : (
            <h1 className="sr-only">Sistemas y Automatización de Procesos</h1>
          )}

          {!reduced && (
            <>
              <TextCursorProximity
                label="SISTEMAS"
                className={headlineClass}
                styles={proximityStyles}
                falloff="gaussian"
                radius={100}
                containerRef={containerRef}
              />
              
              <TextCursorProximity
                label="Y AUTOMATIZACIÓN"
                className={headlineClass}
                styles={proximityStyles}
                falloff="gaussian"
                radius={100}
                containerRef={containerRef}
              />
            </>
          )}

          <div className="mt-8 max-w-2xl normal-case">
            <span className="section-eyebrow">
              Sistemas y Automatización de Procesos en Ecuador
            </span>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Diseñamos y desarrollamos sistemas internos, CRMs y automatizaciones que conectan
              tus herramientas actuales, reducen horas de trabajo manual y detienen la pérdida de
              leads. Hecho para empresas en Ecuador.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#formulario" className="btn-pill-primary">
                Solicitar Diagnóstico Gratuito
                <ChevronRight className="size-4" />
              </a>
              <a href="#calculadora" className="btn-pill-secondary">
                Calcular pérdida operativa
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-6 z-10 hidden sm:block">
          {reduced ? (
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Ecuador
            </span>
          ) : (
            <TextCursorProximity
              className="font-mono text-xs uppercase tracking-[0.2em]"
              label="ECUADOR - MANTA"
              styles={{
                transform: { from: "scale(1)", to: "scale(1.15)" },
                color: { from: "#94a89e", to: "#1D9B52" },
              }}
              falloff="linear"
              radius={10}
              containerRef={containerRef}
            />
          )}
        </div>

        <div className="absolute left-6 top-6 z-10 hidden sm:block">
          {reduced ? (
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Codidevs
            </span>
          ) : (
            <TextCursorProximity
              className="font-mono text-xs uppercase tracking-[0.2em]"
              label="CODIDEVS"
              styles={{
                transform: { from: "scale(1)", to: "scale(1.15)" },
                color: { from: "#94a89e", to: "#1D9B52" },
              }}
              falloff="linear"
              radius={10}
              containerRef={containerRef}
            />
          )}
        </div>

        <div className="absolute bottom-4 z-10 flex w-full justify-between px-6 sm:bottom-6">
          {HERO_ICONS.map((Icon, i) => (
            <Icon
              key={i}
              className="size-5 text-primary/45 sm:size-6"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

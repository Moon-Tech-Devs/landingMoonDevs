"use client"

import React, { useState, useEffect } from "react"
import { Clock, DollarSign, AlertCircle, ArrowDown, Sparkles } from "lucide-react"
import { prefersReducedMotion } from "@/lib/use-reduced-effects"

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value)
  const displayRef = React.useRef(value)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayValue(value)
      displayRef.current = value
      return
    }

    const start = displayRef.current
    const end = value
    if (start === end) return

    const range = end - start
    const duration = 400
    const startTime = performance.now()
    let animationFrame: number

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = progress * (2 - progress)
      const current = Math.round(start + range * ease)
      setDisplayValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      } else {
        displayRef.current = end
      }
    }

    animationFrame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  return <span>{displayValue.toLocaleString("es-EC")}</span>
}

export function CalculadoraImpacto() {
  const [horas, setHoras] = useState(15)
  const [costo, setCosto] = useState(10)

  const horasAnuales = horas * 52
  const dineroAnual = horasAnuales * costo
  const dineroAhorrado = Math.round(dineroAnual * 0.85)
  const horasAhorradas = Math.round(horasAnuales * 0.85)

  return (
    <aside aria-label="Simulador de ROI de Automatización" className="relative">
      <div className="surface-elevated relative overflow-hidden rounded-3xl border border-border bg-card/40 p-5 backdrop-blur max-md:bg-card/95 max-md:backdrop-blur-none sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-3">
          <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
            Impacto financiero
          </span>
        </div>

        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <label htmlFor="input-horas" className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                <Clock className="size-3.5 text-primary" />
                Horas semanales perdidas:
              </label>
              <span className="font-mono text-sm font-bold text-primary">{horas} hrs/sem</span>
            </div>
            <p className="text-[10px] text-muted-foreground">
              Tiempo que tu equipo pierde copiando datos, enviando correos y conciliando Excel.
            </p>
            <input
              id="input-horas"
              type="range"
              min="5"
              max="80"
              step="1"
              value={horas}
              onChange={(e) => setHoras(Number(e.target.value))}
              className="range-input w-full accent-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <label htmlFor="input-costo" className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                <DollarSign className="size-3.5 text-primary" />
                Costo por hora del personal:
              </label>
              <span className="font-mono text-sm font-bold text-primary">${costo} USD/hr</span>
            </div>
            <p className="text-[10px] text-muted-foreground">
              Salario por hora estimado (incluyendo aportaciones) del equipo operativo.
            </p>
            <input
              id="input-costo"
              type="range"
              min="3"
              max="40"
              step="1"
              value={costo}
              onChange={(e) => setCosto(Number(e.target.value))}
              className="range-input w-full accent-primary"
            />
          </div>
        </div>

        <div className="relative mt-7 overflow-hidden rounded-2xl border border-border/80 bg-background/50 p-4">
          <div className="absolute right-0 top-0 p-3 opacity-15">
            <AlertCircle className="size-16 text-primary" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="text-left">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/85">
                Fuga financiera actual (Al año)
              </span>
              <p className="mt-1 flex items-baseline text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
                $<AnimatedNumber value={dineroAnual} />
                <span className="ml-1 text-xs font-normal text-muted-foreground">USD</span>
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground/90">
                Tu empresa tira{" "}
                <span className="font-semibold text-foreground">
                  <AnimatedNumber value={horasAnuales} /> horas
                </span>{" "}
                de trabajo directo a la basura al año.
              </p>
            </div>

            <div className="border-t border-border/50 pt-3 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                <Sparkles className="size-3.5 text-accent max-md:animate-none md:animate-pulse" />
                Potencial de Ahorro con Automatización
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-accent/25 bg-accent/5 p-2.5">
                  <span className="block text-[9px] uppercase tracking-wider text-muted-foreground/80">Dinero Recuperado</span>
                  <span className="block font-mono text-base font-bold text-accent">
                    $<AnimatedNumber value={dineroAhorrado} /> <span className="text-[10px] font-normal">USD</span>
                  </span>
                </div>
                <div className="rounded-xl border border-accent/25 bg-accent/5 p-2.5">
                  <span className="block text-[9px] uppercase tracking-wider text-muted-foreground/80">Horas Liberadas</span>
                  <span className="block font-mono text-base font-bold text-accent">
                    <AnimatedNumber value={horasAhorradas} /> <span className="text-[10px] font-normal">hrs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <a
            href="#formulario"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[0_12px_24px_rgba(29,155,82,0.2)] transition-transform hover:-translate-y-px"
          >
            Recuperar estas horas perdidas
            <ArrowDown className="size-3.5 max-md:animate-none md:animate-bounce" />
          </a>
        </div>
      </div>
    </aside>
  )
}

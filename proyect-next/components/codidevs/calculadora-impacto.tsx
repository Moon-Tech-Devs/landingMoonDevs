"use client"

import React, { useState, useEffect } from "react"
import { Clock, DollarSign, AlertCircle, ArrowDown, TrendingDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    let start = displayValue
    const end = value
    if (start === end) return
    
    const range = end - start
    const duration = 400 // ms
    const startTime = performance.now()
    
    let animationFrame: number
    
    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = progress * (2 - progress) // easeOutQuad
      const current = Math.round(start + range * ease)
      setDisplayValue(current)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      }
    }
    
    animationFrame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  return <span>{displayValue.toLocaleString()}</span>
}

export function CalculadoraImpacto() {
  const [horas, setHoras] = useState(15)
  const [costo, setCosto] = useState(10)

  const horasAnuales = horas * 52
  const dineroAnual = horasAnuales * costo
  const dineroAhorrado = Math.round(dineroAnual * 0.85) // 85% recovered
  const horasAhorradas = Math.round(horasAnuales * 0.85)

  return (
    <aside aria-label="Simulador de ROI de Automatización" className="relative">
      {/* Outer bezel with glow */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-5 sm:p-6 shadow-[0_22px_80px_oklch(0_0_0/0.06)] backdrop-blur">
        
        {/* Header toolbar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary/80" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              codidevs/calculadora-roi
            </span>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
            Impacto financiero
          </span>
        </div>

        {/* Form controls */}
        <div className="space-y-6 text-left">
          {/* Slider 1: Horas manuales */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label htmlFor="input-horas" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary" />
                Horas semanales perdidas:
              </label>
              <span className="font-mono text-sm font-bold text-primary">
                {horas} hrs/sem
              </span>
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
              className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Slider 2: Costo de personal */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label htmlFor="input-costo" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                <DollarSign className="size-3.5 text-primary" />
                Costo por hora del personal:
              </label>
              <span className="font-mono text-sm font-bold text-primary">
                ${costo} USD/hr
              </span>
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
              className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Results Screen */}
        <div className="mt-7 rounded-2xl border border-border/80 bg-background/50 p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-15">
            <AlertCircle className="size-16 text-primary" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/85 block">
                Fuga financiera actual (Al año)
              </span>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-red-600 mt-1 flex items-baseline">
                $<AnimatedNumber value={dineroAnual} />
                <span className="text-xs font-normal text-muted-foreground ml-1">USD</span>
              </p>
              <p className="text-[11px] text-muted-foreground/90 mt-1">
                Tu empresa tira <span className="text-foreground font-semibold"><AnimatedNumber value={horasAnuales} /> horas</span> de trabajo directo a la basura al año.
              </p>
            </div>

            {/* Automation Saving Banner */}
            <div className="pt-3 border-t border-border/50 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                <Sparkles className="size-3.5 text-accent animate-pulse" />
                Potencial de Ahorro con Automatización
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="rounded-xl bg-accent/5 border border-accent/25 p-2.5">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/80 block">Dinero Recuperado</span>
                  <span className="text-base font-bold text-accent font-mono block">
                    $<AnimatedNumber value={dineroAhorrado} /> <span className="text-[10px] font-normal">USD</span>
                  </span>
                </div>
                <div className="rounded-xl bg-accent/5 border border-accent/25 p-2.5">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/80 block">Horas Liberadas</span>
                  <span className="text-base font-bold text-accent font-mono block">
                    <AnimatedNumber value={horasAhorradas} /> <span className="text-[10px] font-normal">hrs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action for the ROI */}
        <div className="mt-5 text-center">
          <a
            href="#formulario"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[0_12px_24px_oklch(0.65_0.22_285/0.2)] transition-transform hover:-translate-y-px"
          >
            Recuperar estas horas perdidas
            <ArrowDown className="size-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </aside>
  )
}

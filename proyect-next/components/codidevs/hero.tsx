"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { WA_N8N_PROYECTO } from "@/lib/whatsapp-links"

const SLIDES = [
  {
    src: "/hero/lab-1.jpg",
    alt: "Ingeniero entrenando un modelo neuronal con headset de captura cerebral en un laboratorio iluminado por luces verdes",
    focal: "object-[60%_center]",
  },
  {
    src: "/hero/lab-2.jpg",
    alt: "Equipo operando un centro de datos con visualizaciones de redes neuronales en múltiples monitores",
    focal: "object-[50%_center]",
  },
] as const

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      {/* Carousel layers — crossfade */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={[
              "absolute inset-0 transition-opacity duration-[1600ms] ease-out",
              i === active ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={["object-cover", slide.focal].join(" ")}
            />
          </div>
        ))}

        {/* Cinematic light fade for headline legibility */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,oklch(1_0_0/0.4),transparent_80%)]" />
        {/* Bottom primary horizon */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Min-height stage so the hero feels editorial */}
      <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col px-4 pb-14 pt-28 sm:min-h-[85svh] sm:pb-20 sm:pt-36 lg:min-h-[88svh] lg:pt-44">
        {/* Centered headline */}
        <motion.div 
          className="flex flex-1 flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="relative max-w-6xl text-balance text-[clamp(2.1rem,9vw,7.5rem)] font-semibold tracking-[-0.03em] text-foreground lg:leading-[0.92]">
            <span className="relative inline-block">
              {"Sin equipos. Sin demoras."}
              {/* Strikethrough — glowing violet slash */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[-2%] right-[-2%] top-1/2 h-[3px] -translate-y-1/2 rotate-[-2deg] rounded-full bg-primary shadow-[0_0_24px_oklch(0.55_0.22_285/0.3)] sm:h-[6px]"
              />
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Solo automatización.</span>
          </h1>
        </motion.div>

        {/* CTA pinned center-low */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={WA_N8N_PROYECTO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-[0_10px_30px_oklch(0.58_0.16_200/0.3)] transition-transform hover:-translate-y-px"
          >
            Iniciar un proyecto
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Bottom-left subcopy + slide indicators */}
        <motion.div 
          className="mt-12 flex flex-col gap-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-foreground/80 text-left">
            Codidevs construye AI agents, flujos n8n e integraciones de API a la
            medida — para que tu equipo escale resultados, no nómina.
          </p>

          <div className="flex items-center gap-3">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostrar imagen ${i + 1}`}
                aria-current={i === active}
                className="relative h-1 overflow-hidden rounded-full bg-foreground/15 backdrop-blur-sm transition-all"
                style={{ width: i === active ? 56 : 24 }}
              >
                <span
                  className={[
                    "absolute inset-y-0 left-0 bg-accent transition-[width] ease-linear",
                    i === active ? "w-full duration-[6000ms]" : "w-0 duration-300",
                  ].join(" ")}
                  style={{ boxShadow: "0 0 12px oklch(0.72 0.16 200 / 0.6)" }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Logo } from "./logo"

const whatsappNumber = "593962562482"

export function HomeLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const nombre = (formData.get("nombre") || "").toString().trim()
    const correo = (formData.get("correo") || "").toString().trim()
    const empresa = (formData.get("empresa") || "").toString().trim()
    const detalle = (formData.get("detalle") || "").toString().trim()

    const tipoProyectoSelect = document.getElementById("tipo-proyecto") as HTMLSelectElement | null
    const tipoProyecto =
      tipoProyectoSelect && tipoProyectoSelect.selectedIndex >= 0
        ? tipoProyectoSelect.options[tipoProyectoSelect.selectedIndex]?.text.trim() ?? ""
        : ""

    const messageLines = [
      "Hola CodiDevs, quiero solicitar informacion sobre un proyecto.",
      "",
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
    ]

    if (empresa) messageLines.push(`Empresa: ${empresa}`)
    if (tipoProyecto) messageLines.push(`Tipo de proyecto: ${tipoProyecto}`)
    messageLines.push(`Descripcion: ${detalle}`)

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const year = new Date().getFullYear()

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
        href="#inicio"
      >
        Saltar al contenido
      </a>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <nav className="relative flex items-center rounded-2xl border border-border bg-background/70 px-3 py-2.5 backdrop-blur-xl shadow-[0_1px_0_oklch(0.82_0.22_152/0.12)_inset,0_10px_30px_oklch(0_0_0/0.4)]">
            <Link href="/" className="flex flex-shrink-0 items-center gap-2 pl-2">
              <Logo className="size-5 text-accent" />
              <span className="text-sm font-medium tracking-tight">Codidevs</span>
            </Link>
            <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm text-muted-foreground md:flex">
              <li><a href="#nuestro-servicio" className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground">Nuestro servicio</a></li>
              <li><a href="#servicios" className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground">Servicios</a></li>
              <li><a href="#faq" className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground">FAQ</a></li>
              <li><a href="#contacto" className="rounded-lg px-3 py-1.5 transition-colors hover:bg-foreground/[0.04] hover:text-foreground">Contacto</a></li>
            </ul>
            <div className="ml-auto hidden flex-shrink-0 items-center gap-1.5 md:flex">
              <a
                href="#formulario"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-px"
              >
                Cotizar
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="ml-auto inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-foreground md:hidden"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>
          {isMobileMenuOpen && (
            <div className="mt-2 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl shadow-[0_10px_30px_oklch(0_0_0/0.4)] md:hidden">
              <div className="flex flex-col gap-1.5 text-sm text-foreground">
                <a
                  href="#nuestro-servicio"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                >
                  Nuestro servicio
                </a>
                <a
                  href="#servicios"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                >
                  Servicios
                </a>
                <a
                  href="#faq"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                >
                  FAQ
                </a>
                <a
                  href="#contacto"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                >
                  Contacto
                </a>
                <a
                  href="#formulario"
                  onClick={closeMobileMenu}
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-accent-foreground"
                >
                  Cotizar
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="inicio" className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <div className="mesh-radial absolute inset-0 opacity-80" />
          <div className="bg-grid absolute inset-0 opacity-[0.09]" />
          <div className="absolute -top-32 left-[18%] h-80 w-80 rounded-full bg-emerald-400/35 blur-[120px]" />
          <div className="absolute top-[18%] right-[12%] h-[28rem] w-[28rem] rounded-full bg-green-500/28 blur-[140px]" />
          <div className="absolute bottom-[8%] left-[6%] h-72 w-72 rounded-full bg-lime-400/24 blur-[120px]" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-teal-400/20 blur-[140px]" />
        </div>
        <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pb-16 pt-36 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-accent/25 bg-card/80 px-3 py-1 text-xs text-muted-foreground shadow-[0_0_0_1px_oklch(0.82_0.22_152/0.08)_inset]">
              CodiDevs - Manta, Ecuador
            </div>
            <div className="mt-5">
              <h1 className="text-balance font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-foreground">Desarrollo de </span>
                <span className="bg-gradient-to-r from-accent via-emerald-300 to-teal-300 bg-clip-text text-transparent">software a medida</span>
                <span className="text-foreground"> en Manta, Ecuador.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                En CodiDevs transformamos ideas en productos digitales robustos. Disenamos, desarrollamos y
                escalamos plataformas web y sistemas internos con enfoque en resultados de negocio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-px"
                  href="https://wa.me/593962562482?text=Hola%20CodiDevs,%20necesito%20una%20cotizaci%C3%B3n%20de%20software."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar cotizacion
                </a>
                <a
                  className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted"
                  href="#servicios"
                >
                  Ver servicios
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="rounded-full border border-border bg-card/70 px-3 py-1.5">
                  <strong>99.9%</strong> estabilidad operativa
                </span>
                <span className="rounded-full border border-border bg-card/70 px-3 py-1.5">
                  <strong>2x</strong> implementacion mas rapida
                </span>
              </div>
            </div>
          </div>
          <aside aria-label="Indicadores de valor" className="grid gap-4 self-center">
            <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Respuesta inicial</p>
              <p className="mt-2 text-2xl font-semibold">&lt; 24h</p>
              <p className="mt-1 text-sm text-muted-foreground">Diagnostico y ruta sugerida</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Entrega</p>
              <p className="mt-2 text-2xl font-semibold">Por sprints</p>
              <p className="mt-1 text-sm text-muted-foreground">Avance visible cada semana</p>
            </article>
          </aside>
        </section>

        <section id="nuestro-servicio" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Nuestro <span className="text-accent">servicio</span>
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
                Combinamos ingenieria, diseno y estrategia para construir software confiable, escalable y facil de mantener.
              </p>
            </div>
            <div className="mt-8 overflow-hidden">
              <div className="flex w-max animate-marquee gap-4">
                {[...Array(2)].map((_, i) => (
                  <div className="flex w-max gap-4 pr-4" aria-hidden={i === 1} key={i}>
                    <article className="w-[260px] rounded-xl border border-border bg-background p-4 md:w-[280px]">
                      <h3>Aplicaciones Web</h3>
                      <p>Desarrollo de plataformas modernas, rapidas y seguras para operaciones, ventas o productos SaaS.</p>
                    </article>
                    <article className="w-[260px] rounded-xl border border-border bg-background p-4 md:w-[280px]">
                      <h3>Sistemas Empresariales</h3>
                      <p>Automatizamos procesos internos con software a medida que reduce costos y mejora la productividad.</p>
                    </article>
                    <article className="w-[260px] rounded-xl border border-border bg-background p-4 md:w-[280px]">
                      <h3>Integraciones API</h3>
                      <p>Conectamos tu negocio con pasarelas de pago, ERPs, CRMs y servicios externos sin friccion.</p>
                    </article>
                    <article className="w-[260px] rounded-xl border border-border bg-background p-4 md:w-[280px]">
                      <h3>Arquitectura Escalable</h3>
                      <p>Disenamos bases tecnologicas preparadas para crecer con mas usuarios, datos y funcionalidades.</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Servicios que <span className="text-accent">ofrecemos</span>
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
                Estas son las lineas de trabajo con las que apoyamos a empresas que buscan crecer con tecnologia.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="/n8n"
                className="group block rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_10px_30px_oklch(0.82_0.22_152/0.2)]"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs">AI y automatizacion</span>
                <h3>Automatizaciones AI o N8N</h3>
                <p>Disenamos flujos automaticos para ventas, soporte y operaciones que ahorran tiempo y eliminan tareas repetitivas.</p>
                <p className="mt-4 text-xs font-medium text-accent">Ir a landing N8N</p>
              </a>
              <a
                href="#formulario"
                className="group block rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_24px_oklch(0.82_0.22_152/0.12)]"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs">Producto digital</span>
                <h3>Desarrollo Web</h3>
                <p>Construimos sitios y plataformas web rapidas, seguras y orientadas a conversion con arquitectura escalable.</p>
              </a>
              <a
                href="#formulario"
                className="group block rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_24px_oklch(0.82_0.22_152/0.12)]"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs">Mobile first</span>
                <h3>Aplicaciones Movil</h3>
                <p>Desarrollamos apps moviles enfocadas en experiencia de usuario, rendimiento y crecimiento sostenible.</p>
              </a>
              <a
                href="#formulario"
                className="group block rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_10px_24px_oklch(0.82_0.22_152/0.12)]"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs">Gestion empresarial</span>
                <h3>Desarrollo de CRMs Empresariales</h3>
                <p>Creamos CRMs a medida para centralizar clientes, automatizar seguimiento comercial y mejorar decisiones de negocio.</p>
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6 md:p-8">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
              <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Hablemos de tu proximo <span className="text-accent">software</span>
              </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  Cuentanos tu idea o necesidad tecnica. El equipo de CodiDevs te respondera para planificar alcance, tiempos y presupuesto.
                </p>
              </div>
              <a
                className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-px"
                href="https://wa.me/593962562482?text=Hola%20CodiDevs,%20quiero%20agendar%20una%20reuni%C3%B3n%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="formulario" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Cuentanos tu idea <span className="text-accent">innovadora</span>
              </h2>
            </div>
            <form id="formulario-whatsapp" className="mx-auto mt-8 max-w-4xl rounded-xl border border-border bg-background p-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre">Nombre</label>
                  <input className="rounded-md border border-border bg-card px-3 py-2" id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="correo">Correo</label>
                  <input className="rounded-md border border-border bg-card px-3 py-2" id="correo" name="correo" type="email" placeholder="tucorreo@empresa.com" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa">Empresa</label>
                  <input className="rounded-md border border-border bg-card px-3 py-2" id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa (opcional)" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tipo-proyecto">Tipo de proyecto</label>
                  <select className="rounded-md border border-border bg-card px-3 py-2" id="tipo-proyecto" name="tipo-proyecto" required defaultValue="">
                    <option value="" disabled>
                      Selecciona una opcion
                    </option>
                    <option value="sistema-empresarial">Sistema empresarial</option>
                    <option value="aplicacion-web">Aplicacion web</option>
                    <option value="integracion-api">Integracion/API</option>
                    <option value="automatizacion">Automatizacion de procesos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="detalle">Descripcion del proyecto</label>
                  <textarea className="min-h-32 rounded-md border border-border bg-card px-3 py-2" id="detalle" name="detalle" required />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Al enviar, se abrira WhatsApp con tu solicitud prellenada para responderte mas rapido.</p>
              <button className="mt-4 inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-px" type="submit">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </section>

        <section id="faq" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Preguntas <span className="text-accent">frecuentes</span>
              </h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl gap-3">
              <details className="rounded-lg border border-border bg-background">
                <summary>Que tipo de software desarrollamos?</summary>
                <p className="px-4 pb-4 text-muted-foreground">Desarrollamos sistemas web, aplicaciones internas, APIs, automatizaciones e integraciones con terceros.</p>
              </details>
              <details className="rounded-lg border border-border bg-background">
                <summary>Solo trabajan con paginas web?</summary>
                <p className="px-4 pb-4 text-muted-foreground">No. Tambien construimos software empresarial, paneles administrativos y plataformas de gestion.</p>
              </details>
              <details className="rounded-lg border border-border bg-background">
                <summary>Cuanto tiempo toma un proyecto?</summary>
                <p className="px-4 pb-4 text-muted-foreground">Depende del alcance. Proyectos pequenos toman semanas y los robustos se planifican por fases.</p>
              </details>
              <details className="rounded-lg border border-border bg-background">
                <summary>Pueden integrar mi software con otras plataformas?</summary>
                <p className="px-4 pb-4 text-muted-foreground">Si. Integramos CRMs, ERPs, pasarelas de pago, APIs externas y herramientas de comunicacion.</p>
              </details>
              <details className="rounded-lg border border-border bg-background">
                <summary>Ofrecen soporte despues de la entrega?</summary>
                <p className="px-4 pb-4 text-muted-foreground">Si, brindamos soporte evolutivo para mejoras, mantenimiento y nuevas funcionalidades.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
          <p>&copy; {year} CodiDevs. Todos los derechos reservados.</p>
          <p>Software a medida para empresas en crecimiento.</p>
        </div>
      </footer>
    </>
  )
}

"use client"

import { FormEvent } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  DatabaseZap,
  Gauge,
  GitBranch,
  MessageCircle,
  MonitorCog,
  ShieldCheck,
  Workflow,
  AlertTriangle,
  Clock,
  ChevronRight,
  FileText,
} from "lucide-react"
import { motion } from "framer-motion"
import { SiteFooter } from "./site-footer"
import { SiteNav } from "./site-nav"
import { SpotlightCard } from "./spotlight-card"
import { CalculadoraImpacto } from "./calculadora-impacto"
import { Stack } from "./stack"
import { AmbientBackground } from "./ambient-background"
import { WA_HOME_COTIZAR, WA_HOME_REUNION, waUrl } from "@/lib/whatsapp-links"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Dolores Comunes", href: "#dolores" },
  { label: "Servicios", href: "#nuestro-servicio" },
  { label: "Soluciones", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  {
    icon: MonitorCog,
    title: "Aplicaciones web internas",
    body: "Paneles administrativos, SaaS y portales para que tu equipo opere con roles, permisos e historiales claros.",
    meta: "Control",
  },
  {
    icon: DatabaseZap,
    title: "Sistemas a la medida",
    body: "Desarrollo de CRMs y ERPs diseñados en torno a tu flujo de trabajo real, no al revés.",
    meta: "Operación",
  },
  {
    icon: Workflow,
    title: "Automatizaciones de Procesos",
    body: "Conectamos tus sistemas y APIs para que las tareas repetitivas (como facturar o notificar) se hagan solas.",
    meta: "Eficiencia",
    href: "/n8n",
  },
  {
    icon: Braces,
    title: "Integración de Sistemas",
    body: "Eliminamos silos de información haciendo que tus sistemas existentes se hablen entre sí sin fricción.",
    meta: "Conexión",
  },
]

const process = [
  {
    step: "01",
    title: "Mapeo y Diagnóstico",
    body: "Analizamos tu flujo operativo actual para identificar cuellos de botella y fugas de rentabilidad.",
  },
  {
    step: "02",
    title: "Diseño de la Solución",
    body: "Definimos la arquitectura del sistema, el roadmap de entregas y el retorno de inversión esperado.",
  },
  {
    step: "03",
    title: "Desarrollo por Sprints",
    body: "Construimos el sistema con entregas semanales para que veas el avance real y valides la usabilidad.",
  },
  {
    step: "04",
    title: "Despliegue y Soporte",
    body: "Capacitamos a tu equipo, lanzamos el sistema y te acompañamos con soporte evolutivo permanente.",
  },
]

const builds = [
  "CRM comercial a medida para el control estricto de prospectos",
  "Portal de aprobaciones operativas internas para evitar firmas físicas",
  "Dashboard de control gerencial con reportes automatizados de ventas",
  "Automatización de notificaciones y facturación conectada a WhatsApp",
  "Controlador de inventarios en la nube sincronizado con facturación",
  "Conexión de APIs entre sistemas legados de la empresa",
]

const cases = [
  {
    title: "CRM comercial personalizado",
    body: "Centralización de leads y recordatorios automáticos. Se eliminó la pérdida de prospectos no atendidos.",
    metric: "100% visibilidad",
  },
  {
    title: "Portal de operaciones y firmas",
    body: "Digitalización de solicitudes físicas y flujos de aprobación. Redujo tiempos de espera internos.",
    metric: "Ahorro de 12h/sem",
  },
  {
    title: "Automatización de WhatsApp & CRM",
    body: "Respuestas automáticas instantáneas y asignación automática de asesores comerciales.",
    metric: "Respuesta en 1 min",
  },
]


const faqs = [
  {
    question: "¿Qué tipo de soluciones desarrolla CodiDevs?",
    answer:
      "Desarrollamos sistemas a medida, CRMs, ERPs departamentales, portales de operaciones y automatizaciones con n8n/APIs para centralizar tus datos y eliminar procesos manuales.",
  },
  {
    question: "¿Trabajan con empresas de todo el Ecuador?",
    answer:
      "Sí. Estamos basados en Manta, pero trabajamos de forma 100% remota y fluida con empresas de Quito, Guayaquil, Cuenca y cualquier provincia del país.",
  },
  {
    question: "¿Cómo garantizan que el software sirva para mi negocio?",
    answer:
      "No programamos a ciegas. Iniciamos con un diagnóstico del proceso operativo real, definimos el blueprint técnico y construimos con demos semanales para que tu equipo valide el sistema antes de lanzarlo.",
  },
  {
    question: "¿Pueden conectarse a sistemas que ya usamos?",
    answer:
      "Sí, siempre que tu software actual tenga una API o permita exportar datos estructurados (como CSV/JSON). Evaluamos tus herramientas para conectarlas de forma estable.",
  },
]

// framer-motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
}

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

export function HomeLanding() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const nombre = (formData.get("nombre") || "").toString().trim()
    const celular = (formData.get("celular") || "").toString().trim()
    const correo = (formData.get("correo") || "").toString().trim()
    const empresa = (formData.get("empresa") || "").toString().trim()
    const dolorProceso = (formData.get("dolor-proceso") || "").toString().trim()

    const messageLines = [
      "Hola CodiDevs, quiero solicitar un Diagnóstico de Procesos Gratuito para mi empresa.",
      "",
      `Nombre: ${nombre}`,
      `WhatsApp/Celular: ${celular}`,
      `Correo: ${correo}`,
    ]

    if (empresa) messageLines.push(`Empresa: ${empresa}`)
    messageLines.push(`Proceso caótico/manual a mejorar: ${dolorProceso}`)

    window.open(waUrl(messageLines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
        href="#inicio"
      >
        Saltar al contenido
      </a>

      <SiteNav
        links={navLinks}
        ctas={[
          { label: "Agendar Llamada", href: WA_HOME_REUNION, external: true, variant: "ghost" },
          { label: "Diagnóstico Gratis", href: "#formulario" },
        ]}
      />

      <main id="inicio" className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <AmbientBackground />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto grid min-h-[92svh] w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-40">
          <motion.div 
            className="min-w-0 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3 py-1 text-xs text-muted-foreground shadow-[0_0_0_1px_oklch(0.65_0.22_285/0.08)_inset]"
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
              Sistemas y Automatización de Procesos en Ecuador
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="mt-5 max-w-4xl break-words text-balance text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7.5xl"
            >
              Detén las tareas manuales y recupera el{" "}
              <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-accent bg-clip-text text-transparent">
                control de tu operación
              </span>
              .
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Diseñamos y desarrollamos sistemas internos, CRMs y automatizaciones que conectan tus herramientas actuales, reducen horas de trabajo manual y detienen la pérdida de leads. Hecho para empresas en Ecuador.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_oklch(0.65_0.22_285/0.25)] transition-transform hover:-translate-y-px"
              >
                Solicitar Diagnóstico Gratuito
                <ChevronRight className="size-4" />
              </a>
              <a
                href="#calculadora"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Calcular pérdida operativa
              </a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3"
            >
              <HeroStat value="Llamada 15m" label="diagnóstico inicial" />
              <HeroStat value="Sprints" label="avance visible semanal" />
              <HeroStat value="Ecuador" label="equipo 100% local" />
            </motion.div>
          </motion.div>

          <motion.div 
            id="calculadora"
            className="min-w-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <CalculadoraImpacto />
          </motion.div>
        </section>

        {/* Dolores de negocio: Las 3 fugas de dinero más comunes */}
        <section id="dolores" className="relative z-10 py-20 sm:py-28 bg-card/10 border-t border-border">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-left"
            >
              <span className="label-mono text-primary/80">— El Diagnóstico</span>
              <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Las 3 fugas silenciosas de dinero que desangran a las empresas hoy.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                La mayoría de las ineficiencias no se ven a simple vista; ocurren en el día a día de tus empleados copiando datos, perdiendo leads y operando a ciegas.
              </p>
            </motion.div>

            <motion.div 
              className="mt-12 grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <SpotlightCard className="h-full border-red-500/10 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5">
                      <MessageCircle className="size-5 text-red-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">1. Fuga de Leads</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Tu equipo tarda más de 15 minutos en responder a prospectos de WhatsApp o Web. Estadísticamente, responder después de 30 minutos reduce la probabilidad de cierre en más de un 300%.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-red-400/80 font-mono mt-5 block">Causa: Falta de automatización</span>
                </SpotlightCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SpotlightCard className="h-full border-amber-500/10 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/5">
                      <FileText className="size-5 text-amber-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">2. Excel-dependencia Caótica</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Los procesos clave de tu empresa (inventario, cotizaciones, órdenes) viven en hojas de cálculo compartidas. Un borrado accidental o falta de roles claros paraliza tu facturación.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-mono mt-5 block">Causa: Dependencia de archivos locales</span>
                </SpotlightCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SpotlightCard className="h-full border-primary/10 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                      <AlertTriangle className="size-5 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">3. Reproceso Humano</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Tus empleados dedican más de 2 horas al día a copiar facturas, redactar correos manuales o traspasar contactos de una aplicación a otra. Estás pagando talento calificado por hacer tareas repetitivas.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-primary/80 font-mono mt-5 block">Causa: Silos de información</span>
                </SpotlightCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nuestro Servicio Section */}
        <section id="nuestro-servicio" className="relative z-10 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <SectionIntro
                eyebrow="Nuestros Servicios"
                title="Ingeniería de software enfocada en eliminar cuellos de botella."
                body="No creamos páginas web bonitas e inertes. Construimos las herramientas digitales que tu equipo necesita operar con rapidez, automatizando flujos de trabajo e integrando bases de datos."
              />
            </motion.div>
            
            <motion.div 
              className="grid gap-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={fadeInUp}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Soluciones Section */}
        <section id="servicios" className="relative z-10 py-20 sm:py-28 border-t border-border">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <SectionIntro
                eyebrow="Soluciones"
                title="Sistemas reales para automatizar tu negocio."
                body="Estos son escenarios comunes que resolvemos para empresas en Ecuador. Diseñamos a medida para adaptarnos al proceso real que ya te funciona."
                centered
              />
            </motion.div>

            <motion.div 
              className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {builds.map((item, index) => (
                <motion.div key={item} variants={fadeInUp}>
                  <SpotlightCard
                    as="article"
                    className="hover:-translate-y-1 h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs text-primary font-bold">0{index + 1}</span>
                      <h3 className="mt-5 text-lg font-medium tracking-tight text-left">{item}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-left">
                        Diseño de interfaces intuitivas y flujos optimizados de carga de información.
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Stack />

        {/* Proceso Section */}
        <section className="relative z-10 border-y border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <SectionIntro
                eyebrow="Cómo lo hacemos"
                title="Entregas visibles cada semana, sin sorpresas."
                body="Nuestra metodología ágil asegura que el sistema se adapte a tus necesidades de forma continua, cobrando únicamente por el alcance funcional validado."
                centered
              />
            </motion.div>

            <motion.div 
              className="mt-12 grid gap-4 md:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {process.map((item) => (
                <motion.div key={item.step} variants={fadeInUp}>
                  <SpotlightCard as="article" className="h-full text-left">
                    <span className="font-mono text-xs text-primary font-bold">{item.step}</span>
                    <h3 className="mt-5 text-lg font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Casos Section */}
        <section className="relative z-10 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <SectionIntro
                eyebrow="Casos de Éxito"
                title="Resultados de negocio medibles."
                body="Nuestros sistemas automatizan la captura de prospectos y eliminan la ineficiencia del personal administrativo."
              />
              {/* Redundant stack badges removed to prevent double info with Stack carousel */}
            </motion.div>

            <motion.div 
              className="grid gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {cases.map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <SpotlightCard as="article">
                    <div className="flex items-start justify-between gap-4 text-left">
                      <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                      <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-primary font-bold">
                        {item.metric}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-left">{item.body}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contacto Promo Panel */}
        <section id="contacto" className="relative z-10 px-4 py-20 sm:py-28">
          <motion.div 
            className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur md:p-10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] text-left">
              <div>
                <span className="label-mono text-primary/80">Diagnóstico de Procesos</span>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Agenda una sesión de diagnóstico gratuita de 15 minutos.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Revisamos tu flujo de trabajo operativo actual vía Meet para decirte exactamente qué procesos automatizar y cuántas horas podrías ahorrarle a tu empresa al mes.
                </p>
              </div>
              <a
                href={WA_HOME_REUNION}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_oklch(0.65_0.22_285/0.25)] transition-transform hover:-translate-y-px"
              >
                Reservar Diagnóstico en Meet
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Formulario Section */}
        <section id="formulario" className="relative z-10 px-4 pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-left"
            >
              <SectionIntro
                eyebrow="Diagnóstico Gratuito"
                title="Describe tu proceso más ineficiente o lento."
                body="Prepararemos una propuesta estructurada con la solución técnica, tiempos y costos aproximados, y te contactaremos de inmediato por WhatsApp."
              />
            </motion.div>

            <motion.form
              id="formulario-whatsapp"
              className="rounded-2xl border border-border bg-card/40 p-5 md:p-6 shadow-lg backdrop-blur-sm"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid gap-4 md:grid-cols-2 text-left">
                <Field label="Nombre" id="nombre">
                  <input className="form-control" id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                </Field>
                <Field label="WhatsApp / Celular" id="celular">
                  <input className="form-control" id="celular" name="celular" type="tel" placeholder="099XXXXXXXX" required />
                </Field>
                <Field label="Correo Corporativo" id="correo">
                  <input className="form-control" id="correo" name="correo" type="email" placeholder="tucorreo@empresa.com" required />
                </Field>
                <Field label="Empresa" id="empresa">
                  <input className="form-control" id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" />
                </Field>
                <Field label="¿Qué proceso operativo o manual quieres automatizar/mejorar?" id="dolor-proceso" wide>
                  <textarea className="form-control min-h-32 resize-y" id="dolor-proceso" name="dolor-proceso" placeholder="Ej: Copiar facturas de Excel a nuestro sistema, notificar a clientes por WhatsApp cuando aprueban un pedido, etc." required />
                </Field>
              </div>
              <div className="text-left mt-5">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_oklch(0.65_0.22_285/0.2)] transition-transform hover:-translate-y-px sm:w-auto" type="submit">
                  Enviar por WhatsApp
                  <MessageCircle className="size-4" />
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative z-10 border-t border-border px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionIntro
                eyebrow="FAQ"
                title="Preguntas frecuentes sobre desarrollo a medida."
                body="Respuestas directas para directores y gerentes de empresas."
                centered
              />
            </motion.div>

            <motion.div 
              className="mt-10 grid gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqs.map((faq) => (
                <motion.div key={faq.question} variants={fadeInUp}>
                  <details className="group rounded-xl border border-border bg-card/40 transition-colors duration-200 hover:border-primary/20">
                    <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium tracking-tight text-left select-none flex items-center justify-between">
                      {faq.question}
                      <span className="transition-transform duration-300 group-open:rotate-180 text-muted-foreground/80">↓</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground text-left">{faq.answer}</p>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}



function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-3 text-left">
      <p className="text-xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
    </div>
  )
}

function SectionIntro({
  eyebrow,
  title,
  body,
  centered,
}: {
  eyebrow: string
  title: string
  body: string
  centered?: boolean
}) {
  return (
    <div className={cn("flex flex-col gap-3 text-left", centered && "mx-auto max-w-3xl items-center text-center")}>
      <span className="label-mono text-primary/80">{eyebrow}</span>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
    </div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon
  const content = (
    <div className="text-left">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10">
          <Icon className="size-5 text-primary" strokeWidth={1.5} />
        </div>
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {service.meta}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-medium tracking-tight">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
      {service.href && (
        <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
          Ver landing n8n
          <ArrowUpRight className="size-3.5" />
        </p>
      )}
    </div>
  )

  if (service.href) {
    return (
      <SpotlightCard as={Link} href={service.href} className="hover:-translate-y-1 block h-full">
        {content}
      </SpotlightCard>
    )
  }

  return (
    <SpotlightCard as="article" className="hover:-translate-y-1 h-full">
      {content}
    </SpotlightCard>
  )
}

function Field({
  label,
  id,
  wide,
  children,
}: {
  label: string
  id: string
  wide?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", wide && "md:col-span-2")}>
      <label htmlFor={id} className="text-sm font-medium text-foreground/90">
        {label}
      </label>
      {children}
    </div>
  )
}

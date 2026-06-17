import Link from "next/link"
import dynamic from "next/dynamic"
import {
  ArrowUpRight,
  Braces,
  DatabaseZap,
  FileText,
  MessageCircle,
  MonitorCog,
  AlertTriangle,
  Workflow,
} from "lucide-react"
import { SiteFooter } from "./site-footer"
import { SiteNav } from "./site-nav"
import { AmbientBackground } from "./ambient-background"
import { HomeContactForm } from "./home-contact-form"
import { Reveal, RevealGroup } from "./motion-reveal"
import { SectionHeader } from "./section-header"
import { HeroOrb } from "./hero-orb"
import { HomeHero } from "./home-hero"
import { MetricMarquee } from "./metric-marquee"
import { ProcessPanel } from "./process-panel"
import { TestimonialCard } from "./testimonial-card"
import { WA_HOME_REUNION } from "@/lib/whatsapp-links"
import { cn } from "@/lib/utils"

const CalculadoraImpacto = dynamic(
  () => import("./calculadora-impacto").then((mod) => ({ default: mod.CalculadoraImpacto })),
  {
    loading: () => (
      <div
        className="min-h-[420px] animate-pulse rounded-3xl border border-border bg-card/40"
        aria-hidden="true"
      />
    ),
  },
)

const Stack = dynamic(() => import("./stack").then((mod) => ({ default: mod.Stack })), {
  loading: () => (
    <div className="section-performance min-h-[280px] animate-pulse border-y border-border bg-card/10" aria-hidden="true" />
  ),
})

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

const metricMarqueeItems = [
  { value: "100%", label: "visibilidad comercial", source: "CRM" },
  { value: "12h/sem", label: "ahorro operativo", source: "Portal" },
  { value: "1 min", label: "respuesta a leads", source: "WhatsApp" },
  { value: "15 min", label: "diagnóstico inicial", source: "Meet" },
  { value: "Sprints", label: "avance semanal", source: "CodiDevs" },
]

const dolores = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Fuga de Leads",
    body: "Tu equipo tarda más de 15 minutos en responder a prospectos de WhatsApp o Web. Estadísticamente, responder después de 30 minutos reduce la probabilidad de cierre en más de un 300%.",
    cause: "Falta de automatización",
    tone: "red" as const,
  },
  {
    step: "02",
    icon: FileText,
    title: "Excel-dependencia Caótica",
    body: "Los procesos clave de tu empresa (inventario, cotizaciones, órdenes) viven en hojas de cálculo compartidas. Un borrado accidental o falta de roles claros paraliza tu facturación.",
    cause: "Dependencia de archivos locales",
    tone: "amber" as const,
  },
  {
    step: "03",
    icon: AlertTriangle,
    title: "Reproceso Humano",
    body: "Tus empleados dedican más de 2 horas al día a copiar facturas, redactar correos manuales o traspasar contactos de una aplicación a otra. Estás pagando talento calificado por hacer tareas repetitivas.",
    cause: "Silos de información",
    tone: "primary" as const,
  },
]

export function HomeLanding() {
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
        <HeroOrb />

        <HomeHero />

        <section
          id="calculadora"
          className="section-performance relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:py-14"
        >
          <Reveal className="reveal-scale min-w-0" immediate>
            <CalculadoraImpacto />
          </Reveal>
        </section>

        <div className="relative z-10">
          <MetricMarquee items={metricMarqueeItems} />
        </div>

        <section id="dolores" className="section-performance relative z-10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHeader
                eyebrow="El Diagnóstico"
                title="Las 3 fugas silenciosas de dinero que desangran a las empresas hoy."
                body="La mayoría de las ineficiencias no se ven a simple vista; ocurren en el día a día de tus empleados copiando datos, perdiendo leads y operando a ciegas."
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3">
              {dolores.map((item) => (
                <Reveal key={item.step}>
                  <DolorCard item={item} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section id="nuestro-servicio" className="section-performance relative z-10 border-t border-border bg-card/10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHeader
                eyebrow="Nuestros Servicios"
                title="Ingeniería de software enfocada en eliminar cuellos de botella."
                body="No creamos páginas web bonitas e inertes. Construimos las herramientas digitales que tu equipo necesita operar con rapidez, automatizando flujos de trabajo e integrando bases de datos."
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service.title}>
                  <ServiceCard service={service} index={index} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section id="servicios" className="section-performance relative z-10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHeader
                eyebrow="Soluciones"
                title="Sistemas reales para automatizar tu negocio."
                body="Estos son escenarios comunes que resolvemos para empresas en Ecuador. Diseñamos a medida para adaptarnos al proceso real que ya te funciona."
                centered
                className="mx-auto"
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {builds.map((item, index) => (
                <Reveal key={item}>
                  <article className="capability-card flex h-full flex-col justify-between text-left">
                    <div>
                      <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="mt-5 text-lg font-medium tracking-tight">{item}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Diseño de interfaces intuitivas y flujos optimizados de carga de información.
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>

        <Stack />

        <section className="section-performance relative z-10 border-y border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHeader
                eyebrow="Cómo lo hacemos"
                title="Entregas visibles cada semana, sin sorpresas."
                body="Nuestra metodología ágil asegura que el sistema se adapte a tus necesidades de forma continua, cobrando únicamente por el alcance funcional validado."
                centered
                className="mx-auto"
              />
            </Reveal>

            <Reveal className="mt-12">
              <ProcessPanel steps={process} />
            </Reveal>
          </div>
        </section>

        <section className="section-performance relative z-10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHeader
                eyebrow="Casos de Éxito"
                title="Resultados de negocio medibles."
                body="Nuestros sistemas automatizan la captura de prospectos y eliminan la ineficiencia del personal administrativo."
                centered
                className="mx-auto"
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3">
              {cases.map((item) => (
                <Reveal key={item.title}>
                  <TestimonialCard title={item.title} body={item.body} metric={item.metric} />
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section id="contacto" className="section-performance relative z-10 px-4 py-20 sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/8 via-card to-background p-8 md:p-12">
              <div className="grid items-center gap-8 text-left lg:grid-cols-[1fr_auto]">
                <div>
                  <span className="section-eyebrow">Diagnóstico de Procesos</span>
                  <h2 className="headline-display mt-4 max-w-3xl text-balance text-3xl md:text-5xl">
                    ¿Listo para recuperar el control de tu operación?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    Agenda una sesión de diagnóstico gratuita de 15 minutos. Revisamos tu flujo operativo actual vía Meet para decirte exactamente qué procesos automatizar y cuántas horas podrías ahorrarle a tu empresa al mes.
                  </p>
                </div>
                <a
                  href={WA_HOME_REUNION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary whitespace-nowrap"
                >
                  Reservar Diagnóstico en Meet
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="formulario" className="section-performance relative z-10 px-4 pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="text-left">
              <SectionHeader
                eyebrow="Diagnóstico Gratuito"
                title="Describe tu proceso más ineficiente o lento."
                body="Prepararemos una propuesta estructurada con la solución técnica, tiempos y costos aproximados, y te contactaremos de inmediato por WhatsApp."
              />
            </Reveal>

            <HomeContactForm />
          </div>
        </section>

        <section id="faq" className="section-performance relative z-10 border-t border-border px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <SectionHeader
                eyebrow="FAQ"
                title="Preguntas frecuentes sobre desarrollo a medida."
                body="Respuestas directas para directores y gerentes de empresas."
                centered
                className="mx-auto"
              />
            </Reveal>

            <RevealGroup className="mt-10 grid gap-3">
              {faqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-xl border border-border bg-card/60 transition-colors duration-200 hover:border-primary/20">
                    <summary className="flex cursor-pointer list-none select-none items-center justify-between px-5 py-4 text-left text-sm font-medium tracking-tight">
                      {faq.question}
                      <span className="text-muted-foreground/80 transition-transform duration-300 group-open:rotate-180">↓</span>
                    </summary>
                    <p className="px-5 pb-5 text-left text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

function DolorCard({
  item,
}: {
  item: (typeof dolores)[number]
}) {
  const Icon = item.icon
  const toneClasses = {
    red: {
      card: "border-red-500/10",
      iconWrap: "border-red-500/20 bg-red-500/5",
      icon: "text-red-400",
      cause: "text-red-400/80",
    },
    amber: {
      card: "border-amber-500/10",
      iconWrap: "border-amber-500/20 bg-amber-500/5",
      icon: "text-amber-400",
      cause: "text-amber-400/80",
    },
    primary: {
      card: "border-primary/10",
      iconWrap: "border-primary/20 bg-primary/5",
      icon: "text-primary",
      cause: "text-primary/80",
    },
  }[item.tone]

  return (
    <article className={cn("capability-card flex h-full flex-col justify-between", toneClasses.card)}>
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="capability-number">{item.step}</span>
          <div className={cn("flex size-10 items-center justify-center rounded-xl border", toneClasses.iconWrap)}>
            <Icon className={cn("size-5", toneClasses.icon)} />
          </div>
        </div>
        <h3 className="mt-6 text-xl font-medium tracking-tight">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
      <span className={cn("mt-5 block font-mono text-[10px] uppercase tracking-wider", toneClasses.cause)}>
        Causa: {item.cause}
      </span>
    </article>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = service.icon
  const content = (
    <article className="capability-card h-full text-left">
      <div className="flex items-start justify-between gap-4">
        <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {service.meta}
        </span>
      </div>
      <div className="mt-6 flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10">
        <Icon className="size-5 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 text-xl font-medium tracking-tight">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
      {service.href && (
        <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
          Ver landing n8n
          <ArrowUpRight className="size-3.5" />
        </p>
      )}
    </article>
  )

  if (service.href) {
    return (
      <Link href={service.href} className="block h-full transition-transform hover:-translate-y-0.5">
        {content}
      </Link>
    )
  }

  return content
}

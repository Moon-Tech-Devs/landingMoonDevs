import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteNav } from "@/components/codidevs/site-nav"
import { SiteFooter } from "@/components/codidevs/site-footer"
import { AmbientBackground } from "@/components/codidevs/ambient-background"
import { APPS_DATA } from "@/lib/apps-data"
import { WA_APPS_COTIZAR } from "@/lib/whatsapp-links"

const CONTACT_EMAIL = "codidevs.soporte@gmail.com"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return APPS_DATA.map((app) => ({
    slug: app.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const app = APPS_DATA.find((a) => a.slug === slug)

  if (!app) {
    return {
      title: "App no encontrada | CodiDevs",
    }
  }

  return {
    title: `Política de Privacidad | ${app.title} - CodiDevs`,
    description: `Política de privacidad y términos de tratamiento de datos para la aplicación móvil ${app.title}.`,
    alternates: {
      canonical: `https://codidevs.com/apps/${app.slug}/privacidad`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function AppPrivacyPage({ params }: PageProps) {
  const { slug } = await params
  const app = APPS_DATA.find((a) => a.slug === slug)

  if (!app) {
    notFound()
  }

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Apps Móviles", href: "/apps" },
    { label: app.title, href: `/apps#${app.slug}` },
    { label: "Servicios", href: "/#servicios" },
  ]

  const navCtas = [
    {
      label: "Cotizar App",
      href: WA_APPS_COTIZAR,
      external: true,
      variant: "primary" as const,
    },
  ]

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <AmbientBackground />
      <SiteNav links={navLinks} ctas={navCtas} />

      {/* Clean, document-style reader container */}
      <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Link
          href={`/apps#${app.slug}`}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          <span>Volver a {app.title}</span>
        </Link>

        {/* Minimal Document Header */}
        <header className="mt-6 border-b border-border/80 pb-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Política de Privacidad de {app.title}
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Desarrollador: CodiDevs • Última actualización: {new Date().toLocaleDateString("es-EC", { month: "long", year: "numeric" })}
          </p>
        </header>

        {/* Full Complete Legal Policy Text with clean typography */}
        <article className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/90">
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">1. Información General</h2>
            <p className="text-muted-foreground">
              La presente Política de Privacidad describe el tratamiento de la información y los datos de los usuarios al utilizar la aplicación móvil <strong>{app.title}</strong>, desarrollada y publicada por <strong>CodiDevs</strong> (en adelante, &quot;el Desarrollador&quot;).
            </p>
            <p className="text-muted-foreground">
              Nos comprometemos a garantizar la protección, seguridad y transparencia en el uso de nuestras aplicaciones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">2. Recopilación y Tratamiento de Datos</h2>
            {app.slug === "nutriapp" ? (
              <>
                <p className="text-muted-foreground">
                  <strong>NutriApp opera bajo una arquitectura 100% local (Offline-First).</strong> Los datos registrados por el usuario para la experiencia educativa (tales como nombre, edad, peso y estatura para el cálculo orientativo del indicador de percentil/IMC) se guardan única y exclusivamente en el almacenamiento interno de tu dispositivo móvil.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                  <li>No solicitamos registro mediante cuenta en la nube, número telefónico ni correo personal.</li>
                  <li>No recopilamos información de ubicación GPS ni datos sensibles del dispositivo.</li>
                  <li>No comercializamos, transferimos ni divulgamos tus datos a terceros con fines publicitarios.</li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">
                  <strong>{app.title} utiliza autenticación segura e infraestructura cloud con protección por capas.</strong> Para sincronizar tus hábitos, puntos de experiencia (XP) y progreso en las batallas de bosses semanales, tratamos los siguientes datos:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                  <li><strong>Identidad y Cuenta:</strong> Autenticación gestionada mediante <em>Clerk</em> (correo electrónico y credenciales cifradas).</li>
                  <li><strong>Hábitos y Progreso de Juego:</strong> Almacenados en base de datos PostgreSQL en <em>Supabase</em>, protegidos mediante políticas de seguridad <em>Row Level Security (RLS)</em> para que solo tú tengas acceso a tus registros.</li>
                  <li><strong>Funciones Sociales y Leaderboard:</strong> En el ranking global público y feed de amigos, únicamente se muestra tu nombre de usuario público (display name), avatar e indicadores de nivel/XP acumulado.</li>
                </ul>
              </>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">3. Publicidad y Herramientas de Rastreo</h2>
            <p className="text-muted-foreground">
              {app.privacyNotes.hasAds ? (
                "Esta aplicación puede incluir anuncios provistos conforme a las políticas de seguridad de Google Play."
              ) : (
                <>
                  <strong>{app.title} no contiene anuncios publicitarios de terceros ni herramientas de telemetría o rastreo comercial invasivo.</strong> No vendemos ni alquilamos información personal a anunciantes ni intermediarios.
                </>
              )}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">4. Permisos del Dispositivo</h2>
            <p className="text-muted-foreground">
              La aplicación solicita únicamente los permisos indispensables para su funcionamiento (por ejemplo, notificaciones del sistema para recordatorios de hábitos, si el usuario decide activarlas manualmente, y acceso a red para la sincronización PWA).
            </p>
          </section>

          {app.medicalDisclaimer && (
            <section className="space-y-3 border-l-2 border-amber-500 pl-4">
              <h2 className="text-base font-semibold text-amber-800 dark:text-amber-300">5. Aviso Médico y de Salud</h2>
              <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                {app.medicalDisclaimer}
              </p>
            </section>
          )}

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              {app.medicalDisclaimer ? "6" : "5"}. Almacenamiento, Seguridad y Eliminación de Datos
            </h2>
            <p className="text-muted-foreground">
              {app.slug === "nutriapp" ? (
                "Al residir todos los datos en el propio teléfono móvil, el usuario tiene control absoluto sobre su información. Puedes borrar todos los registros en cualquier momento desinstalando la aplicación o borrando los datos de almacenamiento desde la configuración del sistema operativo."
              ) : (
                "Tus datos de cuenta y hábitos están respaldados y encriptados en tránsito y en reposo. Puedes solicitar la eliminación definitiva de tu cuenta y todos tus datos personales asociados en cualquier momento desde la configuración de tu perfil o enviando una solicitud a nuestro correo de soporte."
              )}
            </p>
          </section>

          <section className="space-y-3 border-t border-border/80 pt-6">
            <h2 className="text-base font-semibold text-foreground">
              {app.medicalDisclaimer ? "7" : "6"}. Contacto y Soporte
            </h2>
            <p className="text-muted-foreground">
              Si tienes preguntas, dudas o requieres asistencia técnica sobre <strong>{app.title}</strong> o esta política de privacidad, puedes contactarnos directamente al correo electrónico de soporte:
            </p>
            <p className="text-sm font-medium">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              CodiDevs • Manta, Ecuador • <a href="https://codidevs.com" className="hover:underline">https://codidevs.com</a>
            </p>
          </section>
        </article>
      </div>

      <SiteFooter />
    </main>
  )
}

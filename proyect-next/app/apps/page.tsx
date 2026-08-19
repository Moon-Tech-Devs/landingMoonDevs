import type { Metadata } from "next"
import { SiteNav } from "@/components/codidevs/site-nav"
import { SiteFooter } from "@/components/codidevs/site-footer"
import { AmbientBackground } from "@/components/codidevs/ambient-background"
import { AppsHero } from "@/components/codidevs/apps/apps-hero"
import { AppShowcaseSection } from "@/components/codidevs/apps/app-showcase-section"
import { AppsCustomCta } from "@/components/codidevs/apps/apps-custom-cta"
import { APPS_DATA } from "@/lib/apps-data"
import { WA_APPS_COTIZAR } from "@/lib/whatsapp-links"

export const metadata: Metadata = {
  title: "Apps Móviles Propias y Desarrollo Mobile | CodiDevs",
  description:
    "Descubre nuestras aplicaciones publicadas en Google Play Store: NutriApp (educación nutricional familiar offline) y G-Learn (habit tracker gamificado RPG). Desarrollo de apps a medida en Ecuador.",
  alternates: {
    canonical: "https://codidevs.com/apps",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://codidevs.com/apps",
    title: "Apps Móviles Propias y Desarrollo Mobile | CodiDevs",
    description:
      "Aplicaciones móviles en Google Play Store desarrolladas por CodiDevs: NutriApp y G-Learn. Gamificación, arquitectura offline-first y desarrollo móvil a medida.",
    siteName: "CodiDevs",
    images: [
      {
        url: "https://codidevs.com/image_large.png",
        alt: "CodiDevs: Apps móviles en Play Store y desarrollo de software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apps Móviles Propias y Desarrollo Mobile | CodiDevs",
    description:
      "Conoce NutriApp y G-Learn en Google Play Store. Apps offline-first y gamificación creadas por CodiDevs.",
    images: ["https://codidevs.com/image_large.png"],
  },
}

const appsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: APPS_DATA.map((app, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.title,
      operatingSystem: "Android",
      applicationCategory: app.category,
      description: app.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "CodiDevs",
        url: "https://codidevs.com",
      },
    },
  })),
}

export default function AppsPage() {
  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "NutriApp", href: "#nutriapp" },
    { label: "G-Learn", href: "#g-learn" },
    { label: "Automatizaciones n8n", href: "/n8n" },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appsJsonLd),
        }}
      />
      <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <AmbientBackground />
        <SiteNav links={navLinks} ctas={navCtas} />
        
        <AppsHero />

        <div className="relative">
          {APPS_DATA.map((app, index) => (
            <AppShowcaseSection key={app.id} app={app} index={index} />
          ))}
        </div>

        <AppsCustomCta />
        <SiteFooter />
      </main>
    </>
  )
}

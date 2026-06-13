import type { Metadata } from "next"
import { Nav } from "@/components/codidevs/nav"
import { Hero } from "@/components/codidevs/hero"
import { VideoTimeline } from "@/components/codidevs/video-timeline"
import { Stack } from "@/components/codidevs/stack"
import { BentoGrid } from "@/components/codidevs/bento-grid"
import { WorkflowCanvas } from "@/components/codidevs/workflow-canvas"
import { ProofDashboard } from "@/components/codidevs/proof-dashboard"
import { CTA } from "@/components/codidevs/cta"
import { Footer } from "@/components/codidevs/footer"
import { AmbientBackground } from "@/components/codidevs/ambient-background"

export const metadata: Metadata = {
  title: "Automatizaciones AI y n8n",
  description:
    "Diseñamos flujos con n8n y agentes AI para ventas, soporte y operaciones en Ecuador. Integraciones API, monitoreo y entregas por sprints con CodiDevs.",
  alternates: {
    canonical: "https://codidevs.com/n8n",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://codidevs.com/n8n",
    title: "Automatizaciones AI y n8n | CodiDevs",
    description:
      "Flujos automáticos con n8n, integraciones y agentes AI para empresas en Manta y Ecuador. Cotiza con CodiDevs.",
    siteName: "CodiDevs",
    images: [
      {
        url: "https://codidevs.com/image_large.png",
        alt: "CodiDevs: automatizaciones con n8n e integraciones para empresas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizaciones AI y n8n | CodiDevs",
    description:
      "Flujos con n8n, APIs y agentes AI para escalar procesos sin fricción. Ecuador.",
    images: ["https://codidevs.com/image_large.png"],
  },
}

export default function N8NPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <AmbientBackground />
      <Nav />
      <Hero />
      <VideoTimeline />
      <Stack />
      <BentoGrid />
      <WorkflowCanvas />
      <ProofDashboard />
      <CTA />
      <Footer />
    </main>
  )
}

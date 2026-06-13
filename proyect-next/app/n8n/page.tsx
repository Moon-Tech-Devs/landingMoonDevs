import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Nav } from "@/components/codidevs/nav"
import { Hero } from "@/components/codidevs/hero"
import { CTA } from "@/components/codidevs/cta"
import { Footer } from "@/components/codidevs/footer"
import { AmbientBackground } from "@/components/codidevs/ambient-background"

const VideoTimeline = dynamic(
  () => import("@/components/codidevs/video-timeline").then((mod) => ({ default: mod.VideoTimeline })),
  {
    loading: () => (
      <div className="section-performance min-h-[420px] animate-pulse px-4 py-20" aria-hidden="true" />
    ),
  },
)

const Stack = dynamic(() => import("@/components/codidevs/stack").then((mod) => ({ default: mod.Stack })), {
  loading: () => (
    <div className="section-performance min-h-[280px] animate-pulse border-y border-border bg-card/10" aria-hidden="true" />
  ),
})

const BentoGrid = dynamic(
  () => import("@/components/codidevs/bento-grid").then((mod) => ({ default: mod.BentoGrid })),
  {
    loading: () => (
      <div className="section-performance min-h-[360px] animate-pulse border-y border-border" aria-hidden="true" />
    ),
  },
)

const WorkflowCanvas = dynamic(
  () => import("@/components/codidevs/workflow-canvas").then((mod) => ({ default: mod.WorkflowCanvas })),
  {
    loading: () => (
      <div className="section-performance min-h-[420px] animate-pulse border-y border-border" aria-hidden="true" />
    ),
  },
)

const ProofDashboard = dynamic(
  () => import("@/components/codidevs/proof-dashboard").then((mod) => ({ default: mod.ProofDashboard })),
  {
    loading: () => (
      <div className="section-performance min-h-[480px] animate-pulse py-24" aria-hidden="true" />
    ),
  },
)

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

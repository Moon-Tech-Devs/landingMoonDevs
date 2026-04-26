import { Nav } from "@/components/codidevs/nav"
import { Hero } from "@/components/codidevs/hero"
import { VideoTimeline } from "@/components/codidevs/video-timeline"
import { Stack } from "@/components/codidevs/stack"
import { BentoGrid } from "@/components/codidevs/bento-grid"
import { WorkflowCanvas } from "@/components/codidevs/workflow-canvas"
import { ProofDashboard } from "@/components/codidevs/proof-dashboard"
import { CTA } from "@/components/codidevs/cta"
import { Footer } from "@/components/codidevs/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
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

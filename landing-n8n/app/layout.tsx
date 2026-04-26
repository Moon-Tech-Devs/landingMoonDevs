import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Codidevs — Automatizamos el futuro del código",
  description:
    "Codidevs es una agencia de software que construye agentes de IA, flujos en n8n e integraciones de API a la medida para equipos que se niegan a escalar contratando personas.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased selection:bg-accent/25 selection:text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

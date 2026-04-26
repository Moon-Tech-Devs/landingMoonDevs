import type { Metadata } from "next"
import { HomeLanding } from "@/components/codidevs/home-landing"
import { homeProfessionalServiceJsonLd } from "@/lib/home-json-ld"

export const metadata: Metadata = {
  title: "Desarrollo de Software en Manta, Ecuador | CodiDevs",
  description:
    "Desarrollamos software a medida, aplicaciones web, automatizaciones e integraciones API para empresas en Manta y todo Ecuador.",
  alternates: {
    canonical: "https://codidevs.com/",
    languages: {
      "es-EC": "https://codidevs.com/",
      es: "https://codidevs.com/",
      "x-default": "https://codidevs.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://codidevs.com/",
    title: "Desarrollo de Software en Manta, Ecuador | CodiDevs",
    description:
      "Software a medida, aplicaciones web, automatizaciones e integraciones API para empresas en Manta y Ecuador.",
    siteName: "CodiDevs",
    images: [
      {
        url: "https://codidevs.com/image_large.png",
        alt: "CodiDevs desarrollando software a medida para empresas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Software en Manta, Ecuador | CodiDevs",
    description:
      "Software a medida, aplicaciones web, automatizaciones e integraciones API para empresas en Manta y Ecuador.",
    images: ["https://codidevs.com/image_large.png"],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeProfessionalServiceJsonLd),
        }}
      />
      <HomeLanding />
    </>
  )
}

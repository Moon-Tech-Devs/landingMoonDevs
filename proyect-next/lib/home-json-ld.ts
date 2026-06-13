const WHATSAPP = "593962562482"

export const homeProfessionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CodiDevs",
  url: "https://codidevs.com/",
  image: "https://codidevs.com/image_large.png",
  description:
    "CodiDevs desarrolla software a medida, aplicaciones web, automatizaciones, CRMs empresariales e integraciones API para empresas en Manta y Ecuador.",
  telephone: `+${WHATSAPP}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manta",
    addressRegion: "Manabi",
    addressCountry: "EC",
  },
  areaServed: [
    { "@type": "City", name: "Manta" },
    { "@type": "Country", name: "Ecuador" },
  ],
  serviceType: [
    "Desarrollo de software a medida",
    "Aplicaciones web",
    "Automatizaciones",
    "Integraciones API",
    "CRM empresarial",
    "Dashboards operativos",
    "Sistemas internos",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP}`,
    contactType: "sales",
    availableLanguage: ["es"],
  },
  sameAs: [`https://wa.me/${WHATSAPP}`],
} as const

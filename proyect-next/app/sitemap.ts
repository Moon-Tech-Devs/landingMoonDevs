import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codidevs.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://codidevs.com/n8n",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]
}

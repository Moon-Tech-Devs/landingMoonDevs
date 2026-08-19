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
    {
      url: "https://codidevs.com/apps",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://codidevs.com/apps/nutriapp/privacidad",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://codidevs.com/apps/g-learn/privacidad",
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}

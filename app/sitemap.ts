import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: profile.website,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.website}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

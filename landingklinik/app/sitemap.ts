import type { MetadataRoute } from "next";

import { caseStudies } from "@/content/case-studies";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => {
    const yearNum = Number.parseInt(c.year, 10);
    const lastModified = Number.isFinite(yearNum)
      ? new Date(`${yearNum}-12-31T00:00:00.000Z`)
      : now;
    return {
      url: `${siteConfig.url}/case-study/${c.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...caseStudyRoutes];
}

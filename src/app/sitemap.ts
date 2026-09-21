import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return [
    { url: siteUrl, lastModified: new Date() },
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date() })),
  ];
}

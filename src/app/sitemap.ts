import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.9, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

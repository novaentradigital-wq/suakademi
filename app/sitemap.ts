import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://suakademiturkiye.com.tr";
  const sections = ["", "#about", "#services", "#concepts", "#team", "#gallery", "#contact"];
  return sections.map((s) => ({
    url: `${base}/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: s === "" ? 1.0 : 0.7
  }));
}

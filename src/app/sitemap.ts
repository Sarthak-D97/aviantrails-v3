import type { MetadataRoute } from "next";
import { lodges } from "@/content/lodges";
import { origin } from "@/content/site";
import { tours } from "@/content/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${origin}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/departures", 0.9, "weekly"),
    ...tours.map((t) => page(`/departures/${t.slug}`, 0.8, "weekly")),
    page("/custom-tours", 0.8),
    page("/lodges", 0.8),
    ...lodges.map((l) => page(`/lodges/${l.slug}`, 0.8)),
    page("/field-reports", 0.7, "weekly"),
    page("/gallery", 0.6),
    page("/about", 0.7),
    page("/reviews", 0.6),
    page("/enquiry", 0.7),
  ];
}

import type { MetadataRoute } from "next";
import { indexable, origin } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: indexable ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}

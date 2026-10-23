import { MetadataRoute } from "next";
import { businessConfig } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessConfig.canonicalUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import connectionDB from "@/connectDB/connectionDB";
import Product from "@/models/Product";
import Blog from "@/models/Blog";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/product`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "daily", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  let productRoutes: MetadataRoute.Sitemap = [];
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    await connectionDB();
    const [products, blogs] = await Promise.all([
      Product.find().select("_id updatedAt").lean(),
      Blog.find().select("_id updatedAt").lean(),
    ]);

    productRoutes = products.map((p: { _id: unknown; updatedAt?: Date }) => ({
      url: `${SITE_URL}/product/${p._id}`,
      lastModified: p.updatedAt,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    blogRoutes = blogs.map((b: { _id: unknown; updatedAt?: Date }) => ({
      url: `${SITE_URL}/blog/${b._id}`,
      lastModified: b.updatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  } catch {
    // If the DB is unreachable at build time, ship the static + service
    // routes rather than failing the whole sitemap.
  }

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...blogRoutes];
}

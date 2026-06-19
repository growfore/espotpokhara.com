import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPosts } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/study-in-usa", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-australia", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-canada", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-uk", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-new-zealand", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-dubai", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-germany", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-malta", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-cyprus", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-france", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/study-in-japan", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/test-preparation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blogs", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/enquiry-form", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const posts = await getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5 as const,
  }));

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes,
  ];
}

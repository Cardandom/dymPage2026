import type { MetadataRoute } from "next";
import { HOME_URL } from "@/src/config/site";
import { getPublishedProjectCaseStudies } from "@/src/data/projectCaseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = getPublishedProjectCaseStudies().map(
    (project) => ({
      url: `${HOME_URL}proyectos/${project.slug}/`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [
    {
      url: HOME_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectEntries,
  ];
}

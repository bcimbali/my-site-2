import { MetadataRoute } from 'next';
import baseUrl from '@/lib/urlHelpers';
import projectsData from '@/data/projectsData';

export default function sitemap() {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    }
  ];

  const projectPages: MetadataRoute.Sitemap = projectsData.map(({ title }) => ({
    url: `${baseUrl}/projects/${title}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5
  }));

  return [...staticPages, ...projectPages];
}

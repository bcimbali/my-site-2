import { MetadataRoute } from 'next';
import baseUrl from '@/lib/urlHelpers';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/railyard/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

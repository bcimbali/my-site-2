import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brett Cimbalik Portfolio',
    short_name: 'Brett Cimbalik',
    description: 'Web development and software engineering portfolio for Brett Cimbalik.',
    start_url: '/',
    display: 'standalone',
    background_color: '#00154A',
    theme_color: '#E3DAC9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
}

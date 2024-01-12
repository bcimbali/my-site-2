import HomePage from '@/components/HomePage';
import type { Viewport } from 'next';
import { themeColor as themeColorValue } from '@/styling/themes/darkTheme';

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: themeColorValue }]
};

export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Brett Cimbalik',
    description: 'Brett Cimbalik software development portfolio.',
    url: '/',
    siteName: 'Brett Cimbalik',
    locale: 'en_US',
    type: 'website'
  }
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

import HomePage from '@/components/HomePage';

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

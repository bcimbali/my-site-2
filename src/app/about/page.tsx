import AboutPage from '@/components/AboutPage';

export const metadata = {
  title: 'Brett Cimbalik | About',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Brett Cimbalik | About',
    description: 'Brett Cimbalik development portfolio about section.',
    url: '/about',
    siteName: 'Brett Cimbalik',
    locale: 'en_US',
    type: 'website'
  }
};

export default function Projects() {
  return (
    <>
      <AboutPage />
    </>
  );
}

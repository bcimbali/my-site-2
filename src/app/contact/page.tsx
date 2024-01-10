import ContactPage from '@/components/ContactPage';

export const metadata = {
  title: 'Brett Cimbalik | Contact',
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Brett Cimbalik | Contact',
    description: 'Brett Cimbalik contact section.',
    url: '/contact',
    siteName: 'Brett Cimbalik',
    locale: 'en_US',
    type: 'website'
  }
};

export default function Projects() {
  return (
    <>
      <ContactPage />
    </>
  );
}

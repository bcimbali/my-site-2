import ContactPage from '@/components/ContactPage';

export const metadata = {
  title: 'Brett Cimbalik | Contact',
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US'
    }
  }
};

export default function Projects() {
  return (
    <>
      <ContactPage />
    </>
  );
}

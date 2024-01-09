import AboutPage from '@/components/AboutPage';

export const metadata = {
  title: 'Brett Cimbalik | About',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US'
    }
  }
};

export default function Projects() {
  return (
    <>
      <AboutPage />
    </>
  );
}

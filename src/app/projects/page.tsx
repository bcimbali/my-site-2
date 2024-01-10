import ProjectsPage from '@/components/ProjectsPage';

export const metadata = {
  title: 'Brett Cimbalik | Projects',
  alternates: {
    canonical: '/projects',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Brett Cimbalik | Projects',
    description: 'Brett Cimbalik software development projects.',
    url: '/projects',
    siteName: 'Brett Cimbalik',
    locale: 'en_US',
    type: 'website'
  }
};

export default function Projects() {
  return (
    <>
      <ProjectsPage />
    </>
  );
}

import ProjectsPage from '@/components/ProjectsPage';

export const metadata = {
  title: 'Brett Cimbalik | Projects',
  alternates: {
    canonical: '/projects',
    languages: {
      'en-US': '/en-US'
    }
  }
};

export default function Projects() {
  return (
    <>
      <ProjectsPage />
    </>
  );
}

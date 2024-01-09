import ProjectDetailPage from '@/components/ProjectDetailPage';

type PageTypes = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params: { project } }: PageTypes) {
  return {
    title: `Brett Cimbalik | ${project}`,
    alternates: {
      canonical: `/projects/${project}`,
      languages: {
        'en-US': '/en-US'
      }
    }
  };
}

export default function Projects({ params: { project } }: PageTypes) {
  return <ProjectDetailPage projectName={project} />;
}

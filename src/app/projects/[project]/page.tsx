import ProjectDetailPage from '@/components/ProjectDetailPage';

type PageTypes = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params: { project } }: PageTypes) {
  return {
    title: `Brett Cimbalik | ${project}`
  };
}

export default function Projects({ params: { project } }: PageTypes) {
  return <ProjectDetailPage projectName={project} />;
}

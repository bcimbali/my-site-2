import ProjectDetailPage from '@/components/ProjectDetailPage';

type PageTypes = {
  params: {
    project: string;
  };
};

export default function Projects({ params: { project } }: PageTypes) {
  return <ProjectDetailPage projectName={project} />;
}

import ProjectDetailPage from '@/components/ProjectDetailPage';

type PageTypes = {
  params: Promise<{
    project: string;
  }>;
};

export async function generateMetadata(props: PageTypes) {
  const params = await props.params;

  const {
    project
  } = params;

  return {
    title: `Brett Cimbalik | ${project}`,
    alternates: {
      canonical: `/projects/${project}`,
      languages: {
        'en-US': '/en-US'
      }
    },
    openGraph: {
      title: `Brett Cimbalik | ${project}`,
      description: `Brett Cimbalik ${project} project.`,
      url: `/projects/${project}`,
      siteName: 'Brett Cimbalik',
      locale: 'en_US',
      type: 'website'
    }
  };
}

export default async function Projects(props: PageTypes) {
  const params = await props.params;

  const {
    project
  } = params;

  return <ProjectDetailPage projectName={project} />;
}

'use client';

import styled from 'styled-components';
import React, { useMemo } from 'react';
import PageTitle from '@/components/PageTitle';
import projectsData from '@/lib/projectsData';

type ProjectPageTypes = {
  projectName: string;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
`;

const ProjectDetailPage = ({ projectName }: ProjectPageTypes) => {
  const project = useMemo(
    () => projectsData.find((proj) => proj.title === projectName),
    [projectName]
  );
  return (
    <StyledDiv>
      <PageTitle>{project?.title}</PageTitle>
    </StyledDiv>
  );
};

export default ProjectDetailPage;

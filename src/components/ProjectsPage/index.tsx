'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projectsData';
import PageTitle from '@/components/PageTitle';

const ProjectsContainer = styled.ul`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: grid;
    gap: ${spacing[1]};
    justify-content: center;
    list-style-type: none;
    padding: 0;

    ${mediaQuery('md')(`
      grid-template-columns: 1fr 1fr;
      justify-content: unset;
    `)}
    ${mediaQuery('lg')(`
      grid-template-columns: 1fr 1fr 1fr;
    `)}
  `}
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
`;

const ProjectsPage = () => {
  return (
    <StyledDiv>
      <PageTitle>Projects</PageTitle>
      <ProjectsContainer>
        {projectsData.map(({ codeLink, description, image, liveLink, techStack, title }) => (
          <ProjectCard
            codeLink={codeLink}
            description={description}
            image={image}
            key={title}
            liveLink={liveLink}
            techStack={techStack}
            title={title}
          />
        ))}
      </ProjectsContainer>
    </StyledDiv>
  );
};

export default ProjectsPage;

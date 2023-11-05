'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/lib/projectsData';

const ProjectsContainer = styled.ul`
  ${({ theme: { mediaQuery } }) => css`
    display: grid;
    gap: 3rem;
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

const PageTitle = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
    margin-bottom: 1rem;
    text-align: center;
  `}
`;

// Mock out Title height for page bttm so
// top & bottom have same top & bttm margins:
const PageBttmSpacer = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    height: 76px;

    ${mediaQuery('lg')`
      height: 56px;
    `}
  `}
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
      <PageBttmSpacer />
    </StyledDiv>
  );
};

export default ProjectsPage;

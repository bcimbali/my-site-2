'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/lib/projectsData';

const ProjectsContainer = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    display: grid;
    gap: 3rem;
    justify-content: center;

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

const StyledH1 = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
    margin-bottom: 1rem;
    text-align: center;
  `}
`;

const ProjectsPage = () => {
  return (
    <StyledDiv>
      <StyledH1>Projects</StyledH1>
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

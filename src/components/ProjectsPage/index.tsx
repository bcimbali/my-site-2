'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/lib/projectsData';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
  `}
`;

const ProjectsPage = () => {
  return (
    <StyledDiv>
      <StyledH1>Projects Page</StyledH1>
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

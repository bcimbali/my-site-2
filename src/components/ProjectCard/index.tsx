'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
`;

const ChipsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Chip = styled.div`
  ${({ theme: { themeColors } }) => css`
    border: 1px solid ${themeColors.body};
    border-radius: 2px;
    color: ${themeColors.body};
    padding: 0.5rem;
  `}
`;

const Description = styled.p`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.body};
  `}
`;

const Title = styled.h3`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
  `}
`;

type ProjectCardTypes = {
  codeLink: string;
  description: string;
  image?: string;
  liveLink: string;
  techStack: string[];
  title: string;
};

const ProjectCard = ({
  codeLink,
  description,
  image,
  liveLink,
  techStack,
  title
}: ProjectCardTypes) => {
  console.log('In index.tsx, this is codeLink: ', codeLink);
  return (
    <CardContainer href={liveLink} target="_blank">
      <Title>{title}</Title>
      {!!image && <div />}
      <Description>{description}</Description>
      <ChipsContainer>
        {techStack.map((technology) => (
          <Chip key={`${title}-${technology}`}>{technology}</Chip>
        ))}
      </ChipsContainer>
    </CardContainer>
  );
};

export default ProjectCard;

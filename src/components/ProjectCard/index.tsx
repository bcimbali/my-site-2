'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ChipsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style-type: none;
  padding: 0;
`;

const Chip = styled.li`
  ${({ theme: { themeColors } }) => css`
    border: 1px solid ${themeColors.body};
    border-radius: 2px;
    color: ${themeColors.body};
    padding: 0.25rem;
  `}
`;

const ChipText = styled.p``;

const Description = styled.p`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.body};
  `}
`;

const ImgPlaceholder = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.purple};
    max-width: 11rem;
    height: 96px;
    width: 100%;
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
      <ImgPlaceholder />
      <ChipsContainer>
        {techStack.map((technology) => (
          <Chip key={`${title}-${technology}`}>
            <ChipText>{technology}</ChipText>
          </Chip>
        ))}
      </ChipsContainer>
    </CardContainer>
  );
};

export default ProjectCard;
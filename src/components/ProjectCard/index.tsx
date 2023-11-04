'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardContainer = styled.li`
  ${({ theme: { themeColors } }) => css`
    border: 1px solid ${themeColors.fg};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 27.5rem;
  `}
`;

const ChipsContainer = styled.ul`
  ${({ theme: { mediaQuery } }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    list-style-type: none;
    padding: 0;

    ${mediaQuery('md')`
      justify-content: unset
    `}
  `}
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
  ${({ theme: { mediaQuery, themeColors } }) => css`
    color: ${themeColors.body};
    text-align: center;

    ${mediaQuery('md')`
      text-align: unset;
    `}
  `}
`;

const ImgContainer = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.purple};
    padding-bottom: 56%;
    position: relative;
    width: 100%;
  `}
`;

const OuterCardLink = styled(Link)`
  ${({ theme: { mediaQuery } }) => css`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    padding: 1rem;
    ${mediaQuery('md')`
      align-items: unset
    `}
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
    <CardContainer>
      <OuterCardLink href={liveLink} target="_blank">
        <Title>{title}</Title>
        <Description>{description}</Description>
        {!!image && (
          <ImgContainer>
            <Image alt={title} src={image} fill={true} />
          </ImgContainer>
        )}
        <ChipsContainer>
          {techStack.map((technology) => (
            <Chip key={`${title}-${technology}`}>
              <ChipText>{technology}</ChipText>
            </Chip>
          ))}
        </ChipsContainer>
      </OuterCardLink>
    </CardContainer>
  );
};

export default ProjectCard;

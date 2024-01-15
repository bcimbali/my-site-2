'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

const CardContainer = styled.li`
  ${({ theme: { themeColors } }) => css`
    background: ${themeColors.textBg};
    border: 1px solid ${themeColors.body};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 27.5rem;
    overflow: hidden;
  `}
`;

const Description = styled.p`
  ${({ theme: { themeColors, mediaQuery } }) => css`
    color: ${themeColors.body};
    text-align: center;

    ${mediaQuery('md')`
      text-align: center;
    `}
  `}
`;

const InnerContentContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    gap: ${spacing[-2]};
    justify-content: flex-start;
    padding: ${spacing[-1]};
  `}
`;

const OuterCardLink = styled(Link)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

const Title = styled.h2`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
    text-align: center;
  `}
`;

type ProjectCardTypes = {
  codeLink: string;
  description: string;
  image?: StaticImageData;
  liveLink: string;
  techStack: string[];
  title: string;
};

const ProjectCard = ({ description, image, title }: ProjectCardTypes) => {
  return (
    <CardContainer>
      <OuterCardLink href={`/projects/${title}`}>
        {!!image && (
          <Image
            src={image}
            alt={title}
            priority
            sizes="100vw"
            style={{
              height: 'auto',
              width: '100%'
            }}
          />
        )}
        <InnerContentContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InnerContentContainer>
      </OuterCardLink>
    </CardContainer>
  );
};

export default ProjectCard;

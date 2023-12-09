'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardContainer = styled.li`
  ${({ theme: { colors } }) => css`
    background: ${colors.blue};
    border: 1px solid ${colors.white};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    max-width: 27.5rem;
    overflow: hidden;
  `}
`;

const Description = styled.p`
  ${({ theme: { colors, mediaQuery } }) => css`
    color: ${colors.white};
    text-align: center;

    ${mediaQuery('md')`
      text-align: center;
    `}
  `}
`;

const ImgContainer = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray};
    padding-bottom: 56%;
    position: relative;
    width: 100%;
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

const Title = styled.h3`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
    text-align: center;
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

const ProjectCard = ({ description, image, title }: ProjectCardTypes) => {
  return (
    <CardContainer>
      <OuterCardLink href={`/projects/${title}`}>
        {!!image && (
          <ImgContainer>
            <Image alt={title} src={image} fill={true} />
          </ImgContainer>
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

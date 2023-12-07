'use client';

import styled, { css } from 'styled-components';
import React, { useMemo } from 'react';
import PageTitle from '@/components/PageTitle';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';

type ProjectPageTypes = {
  projectName: string;
};

const ButtonLink = styled(Link)`
  ${({ theme: { colors, mediaQuery, spacing, typography } }) => css`
    border: 1px solid ${colors.white};
    border-radius: 0.5rem;
    font-size: ${typography.mobile[0]};
    padding: ${spacing[-3]};
    text-align: center;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}
  `}
`;

const ContentContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};
    width: 100%;
  `}
`;

const Description = styled.h3``;

const ImgContainer = styled.div`
  ${({ theme: { colors, mediaQuery } }) => css`
    background-color: ${colors.blue};
    border-radius: 0.5rem;
    overflow: hidden;
    padding-bottom: 56%;
    position: relative;
    width: 100%;

    ${mediaQuery('md')(`
      padding-bottom: 32%;
    `)}
  `}
`;

const InnerContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};

    ${mediaQuery('md')(`
      flex-direction: row;
    `)}
  `}
`;

const LinkContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};

    ${mediaQuery('sm')(`
      flex-direction: row;
    `)}
  `}
`;

const OuterContainer = styled.div`
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
    <OuterContainer>
      <PageTitle>{project?.title}</PageTitle>
      <InnerContainer>
        {!!project?.image && (
          <ImgContainer>
            <Image alt={project?.title} src={project?.image} fill={true} />
          </ImgContainer>
        )}
        <ContentContainer>
          <Description>{project?.description}</Description>
          <LinkContainer>
            {project?.liveLink && (
              <ButtonLink href={project.liveLink} target="_blank">
                Live Link
              </ButtonLink>
            )}
            {project?.codeLink && (
              <ButtonLink href={project.codeLink} target="_blank">
                Code Link
              </ButtonLink>
            )}
          </LinkContainer>
        </ContentContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ProjectDetailPage;

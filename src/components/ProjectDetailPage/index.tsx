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
    background: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 0.5rem;
    color: ${colors.blue};
    font-size: ${typography.mobile[0]};
    padding: ${spacing[-3]};
    text-align: center;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}
  `}
`;

const ChipsContainer = styled.ul`
  ${({ theme: { mediaQuery } }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
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

const ContentContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};
    width: 100%;
  `}
`;

const ContentHeading = styled.h4``;

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
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};
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

          <ContentHeading>Built with:</ContentHeading>
          <ChipsContainer>
            {project?.techStack.map((technology) => (
              <Chip key={`${project?.title}-${technology}`}>
                <ChipText>{technology}</ChipText>
              </Chip>
            ))}
          </ChipsContainer>
        </ContentContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ProjectDetailPage;

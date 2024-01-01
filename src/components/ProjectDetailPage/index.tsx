'use client';

import styled, { css } from 'styled-components';
import React, { useMemo } from 'react';
import PageTitle from '@/components/PageTitle';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

type ProjectPageTypes = {
  projectName: string;
};

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

const ContentHeading = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[1]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[1]};
    `)}
  `}
`;

const Description = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[1]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[1]};
    `)}
  `}
`;

const InnerContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: grid;
    gap: ${spacing[1]};

    ${mediaQuery('lg')(`
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
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
      <PageTitle backButtonLink="/projects" backButtonText="Projects">
        {project?.title}
      </PageTitle>
      <InnerContainer>
        {!!project?.image && (
          <Link aria-label={project.title} href={project.liveLink} target="_blank">
            <Image
              src={project.image}
              alt={project.title}
              priority
              sizes="100vw"
              style={{
                borderRadius: '0.5rem',
                height: 'auto',
                width: '100%'
              }}
            />
          </Link>
        )}
        <ContentContainer>
          <Description>{project?.description}</Description>
          <LinkContainer>
            {project?.liveLink && (
              <Button href={project.liveLink} label="Live Link" target="_blank" />
            )}
            {project?.codeLink && (
              <Button href={project.codeLink} label="Code Link" target="_blank" />
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

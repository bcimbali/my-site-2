'use client';

import styled, { css } from 'styled-components';
import React, { useMemo } from 'react';
import PageTitle from '@/components/PageTitle';
import projectsData from '@/data/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

type ProjectPageTypes = {
  projectName: string;
};

const BrowserBar = styled.div`
  ${({ theme: { mediaQuery, themeColors, typography } }) => css`
    border-bottom: 1px solid ${themeColors.body};
    display: flex;
    padding: ${typography.mobile[-1]};

    ${mediaQuery('lg')(`
      padding: ${typography.desktop[-1]};
    `)}
  `}
`;

const BrowserButton = styled.div`
  ${({ theme: { themeColors } }) => css`
    background: ${themeColors.body};
    border-radius: 100%;
    height: 12px;
    width: 12px;
  `}
`;

const BrowserWindow = styled(Link)`
  ${({ theme: { themeColors } }) => css`
    border: 1px solid ${themeColors.body};
    border-radius: 1rem;
    overflow: hidden;
  `}
`;

const ButtonContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing[-2]};
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
  ${({ theme: { spacing, themeColors } }) => css`
    border: 1px solid ${themeColors.body};
    border-radius: 1rem;
    color: ${themeColors.body};
    padding: 0.15rem ${spacing[-2]};
  `}
`;

const ChipText = styled.p``;

const ContentContainer = styled.div`
  ${({ theme: { spacing, themeColors } }) => css`
    background: ${themeColors.textBg};
    border: 1px solid ${themeColors.body};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};
    padding: 1rem;
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
    align-items: flex-start;
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
          <BrowserWindow aria-label={project.title} href={project.liveLink} target="_blank">
            <BrowserBar>
              <ButtonContainer>
                <BrowserButton />
                <BrowserButton />
                <BrowserButton />
              </ButtonContainer>
            </BrowserBar>
            <Image
              src={project.image}
              alt={project.title}
              priority
              sizes="100vw"
              style={{
                height: 'auto',
                width: '100%'
              }}
            />
          </BrowserWindow>
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

'use client';

import styled, { css } from 'styled-components';
import React, { useMemo } from 'react';
import PageTitle from '@/components/PageTitle';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';

type ProjectPageTypes = {
  projectName: string;
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Description = styled.p``;

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
        </ContentContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ProjectDetailPage;

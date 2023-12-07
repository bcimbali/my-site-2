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

// const ChipsContainer = styled.ul`
//   ${({ theme: { mediaQuery } }) => css`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 0.5rem;
//     justify-content: center;
//     list-style-type: none;
//     padding: 0;

//     ${mediaQuery('md')`
//       justify-content: unset
//     `}
//   `}
// `;

// const Chip = styled.li`
//   ${({ theme: { themeColors } }) => css`
//     border: 1px solid ${themeColors.body};
//     border-radius: 2px;
//     color: ${themeColors.body};
//     padding: 0.25rem;
//   `}
// `;

// const ChipText = styled.p``;

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
    background-color: ${colors.purple};
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
  ${({ theme: { colors, mediaQuery } }) => css`
    color: ${colors.white};
    text-align: center;

    ${mediaQuery('lg')`
      
    `}
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
  console.log('In index.tsx, this is techStack: ', techStack);
  return (
    <CardContainer>
      <OuterCardLink href={liveLink} target="_blank">
        {!!image && (
          <ImgContainer>
            <Image alt={title} src={image} fill={true} />
          </ImgContainer>
        )}
        <InnerContentContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {/* <ChipsContainer>
            {techStack.map((technology) => (
              <Chip key={`${title}-${technology}`}>
                <ChipText>{technology}</ChipText>
              </Chip>
            ))}
          </ChipsContainer> */}
        </InnerContentContainer>
      </OuterCardLink>
    </CardContainer>
  );
};

export default ProjectCard;

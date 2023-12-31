'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import { Location, User } from '@/icons/tsx';

const ContentContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};
    width: 100%;
  `}
`;

const Description = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[0]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}
  `}
`;

const ImgContainer = styled.div`
  ${({ theme: { colors, mediaQuery } }) => css`
    background-color: ${colors.gray};
    border-radius: 0.5rem;
    overflow: hidden;
    padding-bottom: 56%;
    position: relative;
    width: 100%;

    ${mediaQuery('lg')(`
      padding-bottom: 32%;
    `)}
  `}
`;

const IconContainer = styled.div`
  ${({ theme: { colors, mediaQuery, typography } }) => css`
    border-bottom: 1px solid ${colors.white};
    padding-bottom: 1rem;
    svg {
      color: ${colors.white};
      width: ${typography.mobile[3]};

      path {
        stroke: ${colors.white};
        fill: ${colors.white};
      }
    }

    ${mediaQuery('lg')(`
    svg {
      width: ${typography.desktop[3]}
    }
    `)}
  `}
`;

const InnerContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};

    ${mediaQuery('lg')(`
      flex-direction: row;
    `)}
  `}
`;

const OuterContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  justify-content: center;
`;

const AboutPage = () => {
  return (
    <OuterContainer>
      <PageTitle>About</PageTitle>
      <InnerContainer>
        <ImgContainer>
          <Image src="/brett_smiling_at_camera.jpg" fill priority alt="brett smiling" />
        </ImgContainer>
        <ContentContainer>
          <IconContainer>
            <User />
          </IconContainer>
          <Description>
            {`I am a software engineer that enjoys building pixel-perfect user interfaces with cutting edge technologies.`}
          </Description>
          <IconContainer>
            <Location />
          </IconContainer>
          <Description>
            {`I currently reside in Chicago. Since 2019, I've been at Graveflex, a fast-moving digital agency that creates custom software for web and mobile platforms.`}
          </Description>
        </ContentContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default AboutPage;

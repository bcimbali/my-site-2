'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import { Location, User } from '@/icons/tsx';
import aboutPhoto from '@/../public/brett_smiling_800x800.jpg';

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

const IdCard = styled.div`
  ${({ theme: { colors, mediaQuery } }) => css`
    border: 1px solid ${colors.white};
    border-radius: 1rem;
    display: grid;
    gap: 1rem;
    padding: 1rem;
    width: 100%;

    ${mediaQuery('sm')(`
      grid-template-columns: 1fr 1fr;
      max-width: 600px;
      align-self: center;
    `)}

    ${mediaQuery('lg')(`
      align-self: unset;
      max-width: unset;
    `)}
  `}
`;

const IdContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdImage = styled(Image)`
  align-self: flex-start;
`;

const IdName = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[2]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[1]};
    `)}

    ${mediaQuery('xl')(`
      font-size: ${typography.desktop[2]};
    `)}
  `}
`;

const IdLocation = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[-1]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[-1]};
    `)}
  `}
`;

const IdTitle = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[0]};

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}
  `}
`;

const InnerContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    align-items: flex-start;
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
        <IdCard>
          <IdImage
            src={aboutPhoto}
            alt="Brett holding a fox"
            priority
            sizes="100vw"
            style={{
              borderRadius: '1rem',
              height: 'auto',
              width: '100%'
            }}
          />
          <IdContent>
            <IdName>Brett Cimbalik</IdName>
            <IdTitle>Software Engineer</IdTitle>
            <IdLocation>Chicago, IL</IdLocation>
          </IdContent>
        </IdCard>
        <ContentContainer>
          <IconContainer>
            <User />
          </IconContainer>
          <Description>
            {`I am a software engineer who enjoys building pixel-perfect user interfaces with cutting-edge technologies.`}
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

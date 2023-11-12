'use client';

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
`;

const scrollAbs = keyframes`
  from {
    transform: translateX(calc(100% + var(--gap)));
  }
  to {
    transform: translateX(0);
  }
`;

const MarqueeContainer = styled.div`
  ${({ theme }) => css`
    --gap: 1rem;
    animation-direction: reverse;
    border: 1px dashed white;
    display: flex;
    gap: var(--gap);
    max-width: 1440px;
    overflow: hidden;
    position: relative;
    user-select: none;
  `}
`;

const MarqueeContent = styled.div`
  ${({ theme }) => css`
    --gap: 1rem;
    animation: ${scroll} 10s linear infinite;
    animation-direction: reverse;
    display: flex;
    flex-shrink: 0;
    gap: var(--gap);
    justify-content: space-around;
    min-width: 100%;

    &:last-child {
      animation-name: ${scrollAbs};
    }
  `}
`;

const TrainMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>{children}</MarqueeContent>
      <MarqueeContent aria-hidden="true">{children}</MarqueeContent>
    </MarqueeContainer>
  );
};

export default TrainMarquee;
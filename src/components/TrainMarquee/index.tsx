'use client';

import React, { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { TrainContext } from '@/context/trainContext';

type MarqueeContainerTypes = {
  $isPaused: boolean;
};

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

const MarqueeContainer = styled.div<MarqueeContainerTypes>`
  ${({ $isPaused }) => css`
    --gap: 1rem;
    animation-direction: reverse;
    display: flex;
    gap: var(--gap);
    max-width: 100vw;
    position: relative;
    overflow: hidden;

    // Factor in space at top for the box-shadow
    // effect on shippingContainer hover state:
    padding-top: 1rem;

    ${$isPaused &&
    css`
      &:hover {
        * {
          animation-play-state: paused;
        }
      }
    `}
  `}
`;

const MarqueeContent = styled.div`
  ${() => css`
    --gap: 1rem;
    animation: ${scroll} 22s linear infinite;
    animation-direction: reverse;
    display: flex;
    flex-shrink: 0;
    gap: var(--gap);
    justify-content: space-around;
    min-width: 100%;

    :last-child {
      animation-name: ${scrollAbs};
    }
  `}
`;

const TrainMarquee = ({
  children,
  hiddenTrainMarkup
}: {
  children: React.ReactNode;
  hiddenTrainMarkup: React.ReactNode;
}) => {
  const { trainState } = useContext(TrainContext);

  return (
    <MarqueeContainer $isPaused={trainState === 'paused'}>
      <MarqueeContent>{children}</MarqueeContent>
      <MarqueeContent aria-hidden="true">{hiddenTrainMarkup}</MarqueeContent>
    </MarqueeContainer>
  );
};

export default TrainMarquee;

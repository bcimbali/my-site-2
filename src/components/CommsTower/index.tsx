'use client';

import styled, { css, keyframes } from 'styled-components';
import React, { useMemo } from 'react';

type BlinkingLightTypes = {
  $noAnimation?: boolean;
};

type TowerTypes = {
  $height: string;
  $hideOnMobile: boolean;
  $left: string;
  $width: string;
};

const blinking = keyframes`
  0% { height: 2px; width: 2px; opacity: 0.2; }
  50% { height: 10px; width: 10px; opacity: 1; }
  100% { height: 2px; width: 2px; opacity: 0.2; }
`;

const BlinkingLight = styled.div<BlinkingLightTypes>`
  ${({ $noAnimation }) => css`
    animation: ${blinking} 4s ease-in-out infinite;
    background-color: #ec4809;
    border-radius: 100%;
    box-shadow: 0px 0px 70px 4px rgba(247, 87, 51, 0.9);
    filter: blur(3px);
    margin-left: -3px;
    top: 150px;
    z-index: -1;

    ${$noAnimation &&
    css`
      animation: unset;
      height: 8px;
      opacity: 1;
      width: 8px;
    `}
  `}
`;

const Tower = styled.div<TowerTypes>`
  ${({ $height, $hideOnMobile, $left, $width, theme: { mediaQuery } }) => css`
    background: #292525;
    border-radius: 4px;
    bottom: 0;
    display: ${$hideOnMobile ? 'none' : 'flex'};
    flex-direction: column;
    height: ${$height};
    justify-content: space-between;
    left: ${$left};
    position: absolute;
    width: ${$width};
    z-index: -1;

    ${mediaQuery('sm')(`
      display: flex;
    `)}
  `}
`;

const CommsTower = ({
  amountOfLights = 2,
  height = '300px',
  hideOnMobile = false,
  left = '0',
  width = '1px'
}: {
  amountOfLights?: number;
  height?: string;
  hideOnMobile?: boolean;
  left?: string;
  width?: string;
}) => {
  const lights = useMemo(
    () =>
      [...Array(amountOfLights)].map((_, i) => {
        const isOdd = i % 2 !== 0;
        return <BlinkingLight $noAnimation={isOdd} key={`${i}-${left}-blinking-light`} />;
      }),
    [amountOfLights, left]
  );

  return (
    <Tower $height={height} $hideOnMobile={hideOnMobile} $left={left} $width={width}>
      {lights}
    </Tower>
  );
};

export default CommsTower;

'use client';

import styled, { css, keyframes } from 'styled-components';
import React, { useMemo } from 'react';

type TowerTypes = {
  $height: string;
  $left: string;
  $width: string;
};

const blinking = keyframes`
  0% { height: 2px; width: 2px; opacity: 0.2; }
  50% { height: 10px; width: 10px; opacity: 1; }
  100% { height: 2px; width: 2px; opacity: 0.2; }
`;

const BlinkingLight = styled.div`
  animation: ${blinking} 4s ease-in-out infinite;
  background-color: #ec4809;
  border-radius: 100%;
  box-shadow: rgba(247, 87, 51, 0.9) 0px 0px 70px 4px;
  filter: blur(3px);
  top: 150px;
  z-index: -1;
`;

const Tower = styled.div<TowerTypes>`
  ${({ $height, $left, $width }) => css`
    background: #292525;
    border-radius: 4px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: ${$height};
    justify-content: space-between;
    left: ${$left};
    position: absolute;
    width: ${$width};
    z-index: -1;
  `}
`;

const CommsTower = ({
  amountOfLights = 2,
  height = '300px',
  left = '0',
  width = '1px'
}: {
  amountOfLights?: number;
  height?: string;
  left?: string;
  width?: string;
}) => {
  const lights = useMemo(
    () =>
      [...Array(amountOfLights)].map((_, i) => {
        return <BlinkingLight key={`${i}-${left}-blinking-light`} />;
      }),
    [amountOfLights, left]
  );

  return (
    <Tower $height={height} $left={left} $width={width}>
      {lights}
    </Tower>
  );
};

export default CommsTower;

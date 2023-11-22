'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { shippingContainer as shipContainer } from '@/styling/layout';

// Used for dynamically extending width of flatcar beyond shipping container:
const mobileFlatcarOffset = '100px';
const desktopFlatcarOffset = '200px';

// Used for vertical support widths:
const mobileVerticalWidth = '10px';
const desktopVerticalWidth = '15px';

// Get equal divisions of Shipping Containers for VerticalSupport placement:
const mobileQuarter = `${shipContainer.mobile.asNumbers.width * 0.25}px`;
const mobileHalf = `${shipContainer.mobile.asNumbers.width * 0.5}px`;
const mobileThreeQuarters = `${shipContainer.mobile.asNumbers.width * 0.75}px`;

const desktopQuarter = `${shipContainer.desktop.asNumbers.width * 0.25}px`;
const desktopHalf = `${shipContainer.desktop.asNumbers.width * 0.5}px`;
const desktopThreeQuarters = `${shipContainer.desktop.asNumbers.width * 0.75}px`;

type ContainerTypes = {
  $bgColor?: string;
};

type VerticalRowTypes = {
  $bgColor?: string;
  $mobile: { left: string };
  $desktop: { left: string };
};

const Container = styled.div<ContainerTypes>`
  ${({
    $bgColor,
    theme: {
      components: { shippingContainer },
      mediaQuery
    }
  }) => css`
    background: ${$bgColor};
    border-radius: 2px;
    clip-path: polygon(0 0, 10% 0, 90% 0, 100% 0, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
    display: flex;
    height: 50px;
    position: relative;
    width: calc(${`${shippingContainer.mobile.width} + ${mobileFlatcarOffset}`});

    ${mediaQuery('lg')(`
      height: 75px;
      width: calc(${`${shippingContainer.desktop.width} + ${desktopFlatcarOffset}`})
    `)};
  `}
`;

const Label = styled.div`
  ${({ theme: { colors, mediaQuery, typography } }) => css`
    background-color: ${colors.black};
    color: #ffffff;
    font-size: ${typography.mobile[-2]};
    padding: 0px 8px;
    position: absolute;
    top: 15px;
    left: calc(${`(${mobileFlatcarOffset} / 2) + (${mobileQuarter} / 5)`});

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[-1]};
      left: calc(${`(${desktopFlatcarOffset} / 2) + (${desktopQuarter} / 3.75)`});
      top: 25px;
    `)}
  `}
`;

const TopRow = styled.div`
  ${({ theme: { colors, mediaQuery } }) => css`
    height: 10px;
    border-bottom: 1px solid ${colors.black};
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 5px 20px 20px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    ${mediaQuery('lg')(`
      box-shadow:
      rgba(0, 0, 0, 0.19) 0px 5px 20px 30px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
      height: 15px;
  `)}
  `}
`;

const VerticalSupport = styled.div<VerticalRowTypes>`
  ${({ $bgColor, $desktop, $mobile, theme: { colors, mediaQuery } }) => css`
    background: ${$bgColor};
    border-bottom: 1px solid ${colors.black};
    border-left: 1px solid ${colors.black};
    border-right: 1px solid ${colors.black};
    height: 30px;
    left: calc(${`(${mobileFlatcarOffset} / 2) + (${$mobile.left} - ${mobileVerticalWidth})`});
    position: absolute;
    top: 9px;
    width: ${mobileVerticalWidth};

    ${mediaQuery('lg')(`
      height: 45px;
      left: calc(${`(${desktopFlatcarOffset} / 2) + (${$desktop.left} - ${desktopVerticalWidth})`});
      top: 14px;
      width: ${desktopVerticalWidth};
    `)}
  `}
`;

const Flatcar = ({
  carNo = 'DTTX 724130',
  flatcarColor = 'linear-gradient(90deg,rgba(166, 103, 35, 1) 0%,rgba(166, 129, 35, 1) 35%,rgba(166, 116, 35, 1) 100%)'
}: {
  carNo?: string;
  flatcarColor?: string;
}) => {
  return (
    <Container $bgColor={flatcarColor}>
      <TopRow />

      {/* Far Left */}
      <VerticalSupport
        $bgColor={flatcarColor}
        $mobile={{
          left: mobileVerticalWidth
        }}
        $desktop={{
          left: desktopVerticalWidth
        }}
      />

      {/* 25% */}
      <VerticalSupport
        $bgColor={flatcarColor}
        $mobile={{
          left: mobileQuarter
        }}
        $desktop={{
          left: desktopQuarter
        }}
      />

      {/* 50% */}
      <VerticalSupport
        $bgColor={flatcarColor}
        $mobile={{
          left: mobileHalf
        }}
        $desktop={{
          left: desktopHalf
        }}
      />

      {/* 75% */}
      <VerticalSupport
        $bgColor={flatcarColor}
        $mobile={{
          left: mobileThreeQuarters
        }}
        $desktop={{
          left: desktopThreeQuarters
        }}
      />

      {/* 100% */}
      <VerticalSupport
        $bgColor={flatcarColor}
        $mobile={{
          left: shipContainer.mobile.width
        }}
        $desktop={{
          left: shipContainer.desktop.width
        }}
      />

      <Label>{carNo}</Label>
    </Container>
  );
};

export default Flatcar;

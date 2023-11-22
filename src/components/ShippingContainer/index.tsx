'use client';

import type { SVGProps } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import { shippingContainer as shipContainer } from '@/styling/layout';

type BottomGapTypes = {
  $mobileLeft?: string;
  $desktopLeft?: string;
};

type BorderTypes = {
  $bgColor?: string;
};

type InnerShippingWrapperTypes = {
  $bgColor?: string;
};

type TextTypes = {
  $textColor: string;
};

type LogoWrapperTypes = {
  $desktopWidth?: string;
  $mobileWidth?: string;
};

const desktopBttmmGapWidth = 40;
const mobileBttmmGapWidth = 30;

// Get equal divisions of Shipping Containers for Bottom Gap:
const mobileOneThird = `${shipContainer.mobile.asNumbers.width * 0.333}px`;
const mobileTwoThird = `${shipContainer.mobile.asNumbers.width * 0.666 - mobileBttmmGapWidth}px`;
const desktopOneThird = `${shipContainer.desktop.asNumbers.width * 0.333}px`;
const desktopTwoThird = `${shipContainer.desktop.asNumbers.width * 0.666 - desktopBttmmGapWidth}px`;

const BottomBorder = styled.div<BorderTypes>`
  ${({ $bgColor, theme: { mediaQuery } }) => css`
    background-color: ${$bgColor};
    border-top: 2px solid #000000;
    bottom: 0;
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px -5px 30px 30px,
      rgba(0, 0, 0, 0.23) 0px -3px 6px;
    height: 5px;
    position: absolute;
    width: 100%;

    ${mediaQuery('lg')(`
      height: 10px;
    `)}
  `}
`;

const BottomGap = styled.div<BottomGapTypes>`
  ${({ $desktopLeft, $mobileLeft, theme: { mediaQuery } }) => css`
    border-left: 2px solid #111111;
    border-right: 2px solid #111111;
    height: 100%;
    left: ${$mobileLeft};
    position: absolute;
    width: ${mobileBttmmGapWidth}px;

    ${mediaQuery('lg')(`
      left: ${$desktopLeft};
      width: ${desktopBttmmGapWidth}px;
    `)}
  `}
`;

const InnerShippingWrapper = styled.div<InnerShippingWrapperTypes>`
  ${({
    $bgColor,
    theme: {
      components: { shippingContainer },
      mediaQuery
    }
  }) => css`
    align-items: center;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: ${shippingContainer.mobile.height};
    width: ${shippingContainer.mobile.width};

    background: repeating-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30px,
        rgba(0, 0, 0, 0.3) 30px,
        rgba(0, 0, 0, 0.3) 40px
      ),
      ${$bgColor};

    ${mediaQuery('lg')(`
      height: ${shippingContainer.desktop.height};
      width: ${shippingContainer.desktop.width};
    `)}
  `}
`;

const LeftBorder = styled.div<BorderTypes>`
  ${({ $bgColor, theme: { mediaQuery } }) => css`
    background-color: ${$bgColor};
    border-right: 2px solid #000000;
    height: 100%;
    left: 0;
    position: absolute;
    width: 15px;
    z-index: 1;

    ${mediaQuery('lg')(`
      width: 30px;
    `)}
  `}
`;

const LogoWrapper = styled.div<LogoWrapperTypes>`
  ${({ $desktopWidth, $mobileWidth, theme: { mediaQuery } }) => css`
    width: ${$mobileWidth};

    svg {
    }

    ${mediaQuery('lg')(`
      width: ${$desktopWidth};
    `)}
  `}
`;

const MainText = styled.h2<TextTypes>`
  ${({ $textColor, theme: { mediaQuery, typography } }) => css`
    color: ${$textColor};
    font-size: ${typography.mobile[5]};
    margin: 0;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[5]};
    `)}
  `}
`;

const OuterShippingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const RightBorder = styled.div<BorderTypes>`
  ${({ $bgColor, theme: { mediaQuery } }) => css`
    background-color: ${$bgColor};
    border-left: 2px solid #000000;
    height: 100%;
    right: 0;
    position: absolute;
    width: 15px;
    z-index: 1;

    ${mediaQuery('lg')(`
      width: 30px;
    `)}
  `}
`;

const SmallVerticalText = styled.div<TextTypes>`
  ${({ $textColor, theme: { mediaQuery, typography } }) => css`
    color: ${$textColor};
    font-family: monospace;
    font-size: ${typography.mobile[-3]};
    margin: 0;
    position: absolute;
    top: 25px;
    right: 26px;
    text-orientation: upright;
    writing-mode: vertical-rl;

    ${mediaQuery('lg')(`
      top: 50px;
      right: 55px;
    `)}
  `}
`;

const SubTitle = styled.p<TextTypes>`
  ${({ $textColor, theme: { mediaQuery, typography } }) => css`
    color: ${$textColor};
    font-size: ${typography.mobile[1]};
    margin: 0;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[1]};
    `)}
  `}
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TopBorder = styled.div<BorderTypes>`
  ${({ $bgColor, theme: { mediaQuery } }) => css`
    background-color: ${$bgColor};
    border-bottom: 2px solid #000000;
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 5px 20px 20px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    height: 5px;
    top: 0;
    position: absolute;
    width: 100%;

    ${mediaQuery('lg')(`
      height: 10px;
    `)}
  `}
`;

const ShippingContainer = ({
  bgColor = '#FF69B4',
  containerNo = 'H3T-L MRT',
  subtitle,
  textColor = '#FFFFFF',
  title,
  logo
}: {
  bgColor?: string;
  containerNo?: string;
  subtitle?: string;
  textColor?: string;
  title?: string;
  logo?: {
    src: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    color?: string;
    desktopWidth?: string;
    fill?: string;
    mobileWidth?: string;
  };
  color?: string;
  fill?: string;
}) => {
  return (
    <OuterShippingWrapper>
      <InnerShippingWrapper $bgColor={bgColor}>
        <TopBorder $bgColor={bgColor} />
        <LeftBorder $bgColor={bgColor} />
        <TitleContainer>
          {logo && (
            <LogoWrapper $desktopWidth={logo?.desktopWidth} $mobileWidth={logo?.mobileWidth}>
              <logo.src color={logo.color} fill={logo.fill} width="100%" />
            </LogoWrapper>
          )}
          {title && <MainText $textColor={textColor}>{title}</MainText>}
          {subtitle && <SubTitle $textColor={textColor}>{subtitle}</SubTitle>}
        </TitleContainer>
        <RightBorder $bgColor={bgColor} />
        <BottomBorder $bgColor={bgColor}>
          <BottomGap $desktopLeft={desktopOneThird} $mobileLeft={mobileOneThird} />
          <BottomGap $desktopLeft={desktopTwoThird} $mobileLeft={mobileTwoThird} />
        </BottomBorder>
        <SmallVerticalText $textColor={textColor}>{containerNo}</SmallVerticalText>
      </InnerShippingWrapper>
    </OuterShippingWrapper>
  );
};

export default ShippingContainer;

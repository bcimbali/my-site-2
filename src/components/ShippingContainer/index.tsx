'use client';

import type { SVGProps } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

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

const BottomBorder = styled.div<BorderTypes>`
  ${({ $bgColor, theme: { mediaQuery } }) => css`
    background-color: ${$bgColor};
    border-top: 2px solid #000000;
    height: 5px;
    bottom: 0;
    position: absolute;
    width: 100%;

    ${mediaQuery('lg')(`
      height: 10px;
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
        <BottomBorder $bgColor={bgColor} />
        <SmallVerticalText $textColor={textColor}>{containerNo}</SmallVerticalText>
      </InnerShippingWrapper>
    </OuterShippingWrapper>
  );
};

export default ShippingContainer;

'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const BottomBorder = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background-color: hotpink;
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

const InnerShippingWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    align-items: center;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    position: relative;
    height: 200px;
    width: 450px;

    background: repeating-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30px,
        rgba(0, 0, 0, 0.3) 30px,
        rgba(0, 0, 0, 0.3) 40px
      ),
      hotpink;

    ${mediaQuery('lg')(`
        height: 400px;
        width: 900px;
      `)}
  `}
`;

const LeftBorder = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background-color: hotpink;
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

const MainText = styled.h2`
  ${({ theme: { mediaQuery } }) => css`
    color: #ffffff;
    font-size: 4rem;
    margin: 0;

    ${mediaQuery('lg')(`
      font-size: 10rem;
    `)}
  `}
`;

const OuterShippingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const RightBorder = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background-color: hotpink;
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

const SmallVerticalText = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    color: #ffffff;
    font-family: monospace;
    font-size: 0.5rem;
    margin: 0;
    position: absolute;
    top: 25px;
    right: 26px;
    text-orientation: upright;
    writing-mode: vertical-rl;

    ${mediaQuery('lg')(`
      top: 50px;
      right: 80px;
    `)}
  `}
`;

const SubTitle = styled.p`
  ${({ theme: { mediaQuery } }) => css`
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;

    ${mediaQuery('lg')(`
      font-size: 3rem;
    `)}
  `}
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TopBorder = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background-color: hotpink;
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

const ShippingContainer = () => {
  return (
    <OuterShippingWrapper>
      <InnerShippingWrapper>
        <TopBorder />
        <LeftBorder />
        <TitleContainer>
          <MainText>ONE</MainText>
          <SubTitle>OCEAN NETWORK EXPRESS</SubTitle>
        </TitleContainer>
        <RightBorder />
        <BottomBorder />
        <SmallVerticalText>H3T-L MRT</SmallVerticalText>
      </InnerShippingWrapper>
    </OuterShippingWrapper>
  );
};

export default ShippingContainer;

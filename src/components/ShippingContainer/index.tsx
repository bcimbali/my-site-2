'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const BottomBorder = styled.div`
  background-color: hotpink;
  border-top: 2px solid #000000;
  height: 10px;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

const InnerShippingWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    position: relative;
    height: 400px;
    width: 900px;

    background: repeating-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30px,
        rgba(0, 0, 0, 0.3) 30px,
        rgba(0, 0, 0, 0.3) 40px
      ),
      hotpink;
  `}
`;

const LeftBorder = styled.div`
  background-color: hotpink;
  border-right: 2px solid #000000;
  height: 100%;
  left: 0;
  position: absolute;
  width: 30px;
`;

const MainText = styled.h2`
  color: #ffffff;
  font-size: 10rem;
  margin: 0;
`;

const OuterShippingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const RightBorder = styled.div`
  background-color: hotpink;
  border-left: 2px solid #000000;
  height: 100%;
  right: 0;
  position: absolute;
  width: 30px;
`;

const SmallVerticalText = styled.div`
  color: #ffffff;
  font-family: monospace;
  font-size: 0.5rem;
  margin: 0;
  position: absolute;
  top: 50px;
  right: 80px;
  text-orientation: upright;
  writing-mode: vertical-rl;
`;

const SubTitle = styled.p`
  color: #ffffff;
  font-size: 3rem;
  font-family: monospace;
  margin: 0;
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TopBorder = styled.div`
  background-color: hotpink;
  border-bottom: 2px solid #000000;
  height: 10px;
  top: 0;
  position: absolute;
  width: 100%;
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

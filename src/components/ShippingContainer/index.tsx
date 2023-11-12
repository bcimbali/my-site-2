'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const ShipContainer = styled.div`
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

const OuterShippingWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
  `}
`;

const ShippingContainer = () => {
  return (
    <OuterShippingWrapper>
      <ShipContainer />
    </OuterShippingWrapper>
  );
};

export default ShippingContainer;

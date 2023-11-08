'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import { genTypographicScale } from '@/styling/utils';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  justify-content: center;
`;

const PageTitle = styled.h1`
  ${({ theme: { mediaQuery, themeColors } }) => css`
    color: ${themeColors.headings};
    margin-bottom: 1rem;
    text-align: center;

    ${mediaQuery('lg')`
      margin-bottom: 3rem;
    `}
  `}
`;

const HomePage = () => {
  console.log('genTypographicScale: ', genTypographicScale({ scale: 1.333 }));
  return (
    <StyledDiv>
      <PageTitle>Welcome</PageTitle>
    </StyledDiv>
  );
};

export default HomePage;

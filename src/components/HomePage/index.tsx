'use client';

import styled, { css } from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  justify-content: center;
`;

const PageTitle = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.fg};
  `}
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <PageTitle>Welcome</PageTitle>
    </StyledDiv>
  );
};

export default HomePage;

'use client';

import styled, { css } from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1/-1;
  justify-content: center;
`;

const PageTitle = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.fg};
  `}
`;

const AboutPage = () => {
  return (
    <StyledDiv>
      <PageTitle>About</PageTitle>
    </StyledDiv>
  );
};

export default AboutPage;

'use client';

import styled, { css } from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  justify-content: center;
`;

const PageTitle = styled.h1`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.fg};
    margin-bottom: 4rem;
  `}
`;

const TypographyContainer = styled.div`
  border: 1px dotted white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  * {
    border: 1px dotted white;
  }
`;

const TypographyPage = () => {
  return (
    <StyledDiv>
      <PageTitle>Typography</PageTitle>
      <TypographyContainer>
        <h1>This is an h1 tag.</h1>
        <h2>This is an h2 tag.</h2>
        <h3>This is an h3 tag.</h3>
        <h4>This is an h4 tag.</h4>
        <h5>This is an h5 tag.</h5>
        <p>This is a p tag.</p>
      </TypographyContainer>
    </StyledDiv>
  );
};

export default TypographyPage;

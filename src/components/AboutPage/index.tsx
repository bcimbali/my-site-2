'use client';

import styled from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1/-1;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  color: red;
`;

const AboutPage = () => {
  return (
    <StyledDiv>
      <StyledH1>About Page</StyledH1>
    </StyledDiv>
  );
};

export default AboutPage;

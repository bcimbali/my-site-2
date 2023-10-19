'use client';

import styled from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
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

'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1/-1;
  justify-content: center;
`;

const AboutPage = () => {
  return (
    <StyledDiv>
      <PageTitle>About</PageTitle>
    </StyledDiv>
  );
};

export default AboutPage;

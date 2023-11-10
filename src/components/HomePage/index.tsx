'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <PageTitle>Welcome</PageTitle>
    </StyledDiv>
  );
};

export default HomePage;

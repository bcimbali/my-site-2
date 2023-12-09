'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';

const StyledDiv = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: center;
`;

const FourOhFourPage = () => {
  return (
    <StyledDiv>
      <PageTitle>Page Not Found</PageTitle>
    </StyledDiv>
  );
};

export default FourOhFourPage;

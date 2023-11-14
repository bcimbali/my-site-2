'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import ShippingContainer from '@/components/ShippingContainer';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/-1;
  justify-content: space-between;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <PageTitle>Welcome</PageTitle>
      <TrainMarquee>
        <ShippingContainer />
        <ShippingContainer color="#A9A9A9" />
        <ShippingContainer color="#006A4E" />
        <ShippingContainer />
        <ShippingContainer color="#A52A2A" />
        <ShippingContainer color="#CD5700" />
      </TrainMarquee>
    </StyledDiv>
  );
};

export default HomePage;

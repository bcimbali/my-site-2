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
        <ShippingContainer bgColor="#6050DC" />
        <ShippingContainer bgColor="#006A4E" textColor="#FFDF00" />
        <ShippingContainer />
        <ShippingContainer bgColor="#A52A2A" textColor="#CCCCFF" />
        <ShippingContainer bgColor="#F4F0EC" textColor="#111111" />
      </TrainMarquee>
    </StyledDiv>
  );
};

export default HomePage;

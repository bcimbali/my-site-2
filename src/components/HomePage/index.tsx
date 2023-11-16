'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import ShippingContainer from '@/components/ShippingContainer';
import Flatcar from 'src/components/Flatcar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/-1;
  justify-content: space-between;
`;

const Intermodal = styled.div`
  display: grid;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <PageTitle>Welcome</PageTitle>
      <TrainMarquee>
        <Intermodal>
          <ShippingContainer />
          <ShippingContainer />
          <Flatcar />
        </Intermodal>
        <ShippingContainer bgColor="#6050DC" title="EMP" subtitle="Eastern MI Parcel" />
        <ShippingContainer
          bgColor="#66FF00"
          textColor="#1B4D3E"
          title="SW"
          subtitle="Southwestern"
        />
        <ShippingContainer
          bgColor="#FFFF00"
          textColor="#111111"
          title="ZRE"
          subtitle="Zeus Intermodal"
        />
        <ShippingContainer
          bgColor="#A52A2A"
          textColor="#CCCCFF"
          title="LR-NW"
          subtitle="Lisle Northwestern"
        />
        <ShippingContainer
          bgColor="#F4F0EC"
          textColor="#111111"
          title="VLI"
          subtitle="VLI  Network"
        />
      </TrainMarquee>
    </StyledDiv>
  );
};

export default HomePage;

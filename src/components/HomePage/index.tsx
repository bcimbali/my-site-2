'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import IntermodalWrapper from '@/components/IntermodalWrapper';
import containersData from '@/lib/containersData';
import CommsTower from '@/components/CommsTower';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/-1;
  justify-content: space-between;
  position: relative;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <PageTitle>{''}</PageTitle>
      <TrainMarquee>
        {containersData.map((item, idx) => (
          <IntermodalWrapper
            key={`${item?.id}-${idx}-intermodal`}
            containers={item?.containers}
            id={item.id}
          />
        ))}
      </TrainMarquee>

      <CommsTower amountOfLights={4} height="300px" left="0" width="1px" />
      <CommsTower amountOfLights={6} height="400px" left="100%" width="1px" />
      <CommsTower amountOfLights={4} height="200px" left="25%" width="1px" />
      <CommsTower amountOfLights={4} height="500px" left="75%" width="1px" />
    </StyledDiv>
  );
};

export default HomePage;

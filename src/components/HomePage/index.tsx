'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import IntermodalWrapper from '@/components/IntermodalWrapper';
import containersData from '@/lib/containersData';

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
    </StyledDiv>
  );
};

export default HomePage;

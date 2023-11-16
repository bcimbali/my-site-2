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
      <PageTitle>Welcome</PageTitle>
      <TrainMarquee>
        {containersData.map((box, idx) => (
          <IntermodalWrapper key={`${box?.id}-${idx}-intermodal`} containers={box?.containers} />
        ))}
      </TrainMarquee>
    </StyledDiv>
  );
};

export default HomePage;

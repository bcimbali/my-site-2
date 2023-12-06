'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import IntermodalWrapper from '@/components/IntermodalWrapper';
import containersData from '@/lib/containersData';
import CommsTower from '@/components/CommsTower';

const PageSubtitle = styled.h3``;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  justify-content: space-between;
  position: relative;
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <StyledDiv>
      <TitleContainer>
        <PageTitle noMargin>{'Brett Cimbalik'}</PageTitle>
        <PageSubtitle>Web Developer</PageSubtitle>
      </TitleContainer>
      <TrainMarquee>
        {containersData.map((item, idx) => (
          <IntermodalWrapper
            key={`${item?.id}-${idx}-intermodal`}
            containers={item?.containers}
            flatcarColor={item?.flatcarColor}
            id={item.id}
          />
        ))}
      </TrainMarquee>

      <CommsTower amountOfLights={4} height="300px" left="0" width="1px" />
      <CommsTower amountOfLights={6} height="500px" left="100%" width="1px" />
    </StyledDiv>
  );
};

export default HomePage;

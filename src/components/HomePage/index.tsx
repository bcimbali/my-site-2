'use client';

import styled, { css } from 'styled-components';
import React, { useContext, useEffect } from 'react';
import PageTitle from '@/components/PageTitle';
import TrainMarquee from '@/components/TrainMarquee';
import IntermodalWrapper from '@/components/IntermodalWrapper';
import homepageTrainData from '@/data/homepageTrainData';
import CommsTower from '@/components/CommsTower';
import { TrainContext } from '@/context/trainContext';
import { usePathname } from 'next/navigation';

const PageSubtitle = styled.p`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[1]};

    ${mediaQuery('lg')(`
        font-size: ${typography.desktop[1]};
    `)}
  `}
`;

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

const trainMarkup = homepageTrainData.map((item, idx) => (
  <IntermodalWrapper
    key={`${item?.id}-${idx}-intermodal`}
    containers={item?.containers}
    flatcarColor={item?.flatcarColor}
    id={item.id}
  />
));

const hiddenTrainMarkup = homepageTrainData.map((item, idx) => (
  <IntermodalWrapper
    key={`${item?.id}-${idx}-intermodal`}
    containers={item?.containers}
    flatcarColor={item?.flatcarColor}
    id={item.id}
    isHidden={true}
  />
));

const HomePage = () => {
  const pathname = usePathname();
  const { setTrainState } = useContext(TrainContext);

  // Make sure train is running in back navigation on mobile:
  useEffect(() => setTrainState('running'), [pathname, setTrainState]);

  return (
    <StyledDiv>
      <TitleContainer>
        <PageTitle noMargin>{'Brett Cimbalik'}</PageTitle>
        <PageSubtitle>Software Engineer</PageSubtitle>
      </TitleContainer>
      <TrainMarquee hiddenTrainMarkup={hiddenTrainMarkup}>{trainMarkup}</TrainMarquee>

      <CommsTower amountOfLights={4} height="300px" left="0" width="1px" />
      <CommsTower amountOfLights={6} height="500px" left="100%" width="1px" />
    </StyledDiv>
  );
};

export default HomePage;

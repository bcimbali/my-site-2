// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import {
  aboutContainer,
  bc010Container,
  caretContainer,
  ckSiteContainer,
  contactContainer,
  doveContainer,
  eastContainer,
  ftLogisticsContainer,
  mkdContainer,
  onyxContainer,
  spNextSiteContainer,
  starboxContainer,
  sunshineContainer,
  wishContainer,
  vmrOneContainer,
  vmrTwoContainer,
  vmrThreeContainer
} from '@/shipping_containers';
import ShippingContainer from '@/components/ShippingContainer';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
`;

const RailyardPage = () => {
  return (
    <OuterContainer>
      <PageTitle>Railyard</PageTitle>
      <ShippingContainer {...contactContainer} />
      <ShippingContainer {...aboutContainer} />
      <ShippingContainer {...spNextSiteContainer} />
      <ShippingContainer {...ckSiteContainer} />
      <ShippingContainer {...bc010Container} />
      <ShippingContainer {...caretContainer} />
      <ShippingContainer {...doveContainer} />
      <ShippingContainer {...eastContainer} />
      <ShippingContainer {...ftLogisticsContainer} />
      <ShippingContainer {...mkdContainer} />
      <ShippingContainer {...onyxContainer} />
      <ShippingContainer {...starboxContainer} />
      <ShippingContainer {...sunshineContainer} />
      <ShippingContainer {...wishContainer} />
      <ShippingContainer {...vmrOneContainer} />
      <ShippingContainer {...vmrTwoContainer} />
      <ShippingContainer {...vmrThreeContainer} />
    </OuterContainer>
  );
};

export default RailyardPage;

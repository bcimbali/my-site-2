'use client';

import React from 'react';
import styled from 'styled-components';
import ShippingContainer from '@/components/ShippingContainer';
import Flatcar from 'src/components/Flatcar';

const Wrapper = styled.div`
  display: grid;
  align-items: end;
`;

type Container = {
  bgColor?: string;
  containerNumber?: string;
  subtitle?: string;
  textColor?: string;
  title?: string;
};

const IntermodalWrapper = ({ containers = [] }: { containers?: Container[] }) => {
  return (
    <Wrapper>
      {containers.map((box, idx) => (
        <ShippingContainer key={`${box?.title}-${idx}`} {...box} />
      ))}
      <Flatcar />
    </Wrapper>
  );
};

export default IntermodalWrapper;

'use client';

import React from 'react';
import styled from 'styled-components';
import ShippingContainer from '@/components/ShippingContainer';
import Flatcar from 'src/components/Flatcar';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

type Container = {
  bgColor?: string;
  containerNo?: string;
  subtitle?: string;
  textColor?: string;
  title?: string;
};

const IntermodalWrapper = ({
  containers = [],
  flatcarColor,
  id = 'RVVX-0092',
  isHidden = false
}: {
  containers?: Container[];
  flatcarColor?: string;
  id: string;
  isHidden?: boolean;
}) => {
  return (
    <Wrapper>
      {containers.map((box, idx) => (
        <ShippingContainer isHidden={isHidden} key={`${box?.title}-${idx}`} {...box} />
      ))}
      <Flatcar carNo={id} flatcarColor={flatcarColor} />
    </Wrapper>
  );
};

export default IntermodalWrapper;

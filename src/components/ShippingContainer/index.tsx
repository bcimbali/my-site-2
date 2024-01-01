'use client';

import type { SVGProps } from 'react';
import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import ContainerContent from './components/ContainerContent';
import Link from 'next/link';
import { TrainContext } from '@/context/trainContext';

const OuterShippingLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow:
      rgba(136, 165, 191, 0.48) 0.375rem 0.125rem 1rem 0rem,
      rgba(255, 255, 255, 0.8) -0.375rem -0.125rem 1rem 0rem;
  }
`;

const OuterShippingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: not-allowed;
  }
`;

const ShippingContainer = ({
  bgColor = '#FF69B4',
  containerCss,
  containerNo = 'H3T-L MRT',
  isHidden = false,
  link,
  subtitle,
  textColor,
  title,
  logo
}: {
  bgColor?: string;
  containerCss?: string;
  containerNo?: string;
  isHidden?: boolean;
  link?: string;
  subtitle?: string;
  textColor?: string;
  title?: string;
  logo?: {
    color?: string;
    desktopWidth?: string;
    fill?: string;
    mobileWidth?: string;
    src: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  };
}) => {
  const hasLink = useMemo(() => !!link, [link]);
  const { setTrainState } = useContext(TrainContext);
  if (hasLink) {
    return (
      <OuterShippingLink
        href={link as string}
        onMouseEnter={() => setTrainState('paused')}
        onMouseLeave={() => setTrainState('running')}
        tabIndex={isHidden ? -1 : 0}
      >
        <ContainerContent
          bgColor={bgColor}
          containerCss={containerCss}
          containerNo={containerNo}
          subtitle={subtitle}
          textColor={textColor}
          title={title}
          logo={logo}
        />
      </OuterShippingLink>
    );
  } else {
    return (
      <OuterShippingWrapper>
        <ContainerContent
          bgColor={bgColor}
          containerCss={containerCss}
          containerNo={containerNo}
          subtitle={subtitle}
          textColor={textColor}
          title={title}
          logo={logo}
        />
      </OuterShippingWrapper>
    );
  }
};

export default ShippingContainer;

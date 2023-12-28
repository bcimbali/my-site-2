'use client';

import type { SVGProps } from 'react';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import ContainerContent from './components/ContainerContent';
import Link from 'next/link';

const OuterShippingLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 0.8;
  }
`;

const OuterShippingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ShippingContainer = ({
  bgColor = '#FF69B4',
  containerCss,
  containerNo = 'H3T-L MRT',
  link,
  subtitle,
  textColor,
  title,
  logo
}: {
  bgColor?: string;
  containerCss?: string;
  containerNo?: string;
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

  if (hasLink) {
    return (
      <OuterShippingLink href={link as string}>
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

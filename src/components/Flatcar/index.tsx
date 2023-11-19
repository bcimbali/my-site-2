'use client';

import React from 'react';
import styled, { css } from 'styled-components';

type VerticalRowTypes = {
  $mobile: { height: string; left: string };
  $desktop: { height: string; left: string };
};

const Container = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background: rgb(166, 103, 35);
    background: linear-gradient(
      90deg,
      rgba(166, 103, 35, 1) 0%,
      rgba(166, 129, 35, 1) 35%,
      rgba(166, 116, 35, 1) 100%
    );
    border-radius: 2px;
    clip-path: polygon(0 0, 10% 0, 90% 0, 100% 0, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
    display: flex;
    height: 50px;
    position: relative;
    width: 550px;

    ${mediaQuery('lg')(`
      height: 75px;
      width: 1100px;
    `)};
  `}
`;

const Label = styled.div`
  ${({ theme: { colors, mediaQuery, typography } }) => css`
    background-color: ${colors.black};
    color: #ffffff;
    font-size: ${typography.mobile[-2]};
    padding: 0px 8px;
    position: absolute;
    top: 15px;
    left: 80px;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[-1]};
      left: 150px;
      top: 25px;
    `)}
  `}
`;

const TopRow = styled.div`
  ${({ theme: { colors, mediaQuery } }) => css`
    height: 10px;
    border-bottom: 1px solid ${colors.black};
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 5px 20px 20px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    ${mediaQuery('lg')(`
      box-shadow:
      rgba(0, 0, 0, 0.19) 0px 5px 20px 30px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
      height: 15px;
  `)}
  `}
`;

const VerticalSupport = styled.div<VerticalRowTypes>`
  ${({ $desktop, $mobile, theme: { colors, mediaQuery } }) => css`
    background: rgba(166, 129, 35, 1);
    border-bottom: 1px solid ${colors.black};
    border-left: 1px solid ${colors.black};
    border-right: 1px solid ${colors.black};
    height: ${$mobile.height};
    left: ${$mobile.left};
    position: absolute;
    top: 9px;
    width: 10px;

    ${mediaQuery('lg')(`
      height: ${$desktop.height};
      left: ${$desktop.left};
      top: 14px;
      width: 15px;
    `)}
  `}
`;

const Flatcar = ({ carNo = 'DTTX 724130' }: { carNo?: string }) => {
  return (
    <Container>
      <TopRow />
      <VerticalSupport
        $mobile={{
          height: '30px',
          left: '50px'
        }}
        $desktop={{
          height: '45px',
          left: '100px'
        }}
      />
      <VerticalSupport
        $mobile={{
          height: '30px',
          left: '490px'
        }}
        $desktop={{
          height: '45px',
          left: '985px'
        }}
      />
      <Label>{carNo}</Label>
    </Container>
  );
};

export default Flatcar;

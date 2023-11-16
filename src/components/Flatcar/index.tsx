'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    background: rgb(166, 103, 35);
    background: linear-gradient(
      90deg,
      rgba(166, 103, 35, 1) 0%,
      rgba(166, 129, 35, 1) 35%,
      rgba(166, 116, 35, 1) 100%
    );
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
  ${({ theme: { mediaQuery, typography } }) => css`
    background-color: #111111;
    color: #ffffff;
    font-size: ${typography.mobile[-2]};
    padding: 0px 8px;
    position: absolute;
    top: 15px;
    left: 60px;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[-1]};
      left: 150px;
      top: 25px;
    `)}
  `}
`;

const Flatcar = ({ carNo = 'DTTX 724130' }: { carNo?: string }) => {
  return (
    <Container>
      <Label>{carNo}</Label>
    </Container>
  );
};

export default Flatcar;

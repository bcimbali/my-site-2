'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import styled, { css } from 'styled-components';
import { Play } from 'next/font/google';

const play = Play({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

const Main = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px dotted white;
`;

const Body = styled.body`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr;
  `}
`;

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Body className={play.className}>
      <Navbar />
      <Main>{children}</Main>
    </Body>
  );
};

export default PageContainer;

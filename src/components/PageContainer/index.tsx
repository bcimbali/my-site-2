'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import styled, { css } from 'styled-components';
import { Play } from 'next/font/google';

const play = Play({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

const Main = styled.main`
  ${({ theme: { layout, mq } }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 ${layout.xs.margin};

    ${mq('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mq('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const InnerPageWrapper = styled.div`
  ${({ theme: { maxWidth } }) => css`
    border: 1px dotted yellow;
    max-width: ${maxWidth};
    width: 100%;
  `}
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
      <Main>
        <InnerPageWrapper>{children}</InnerPageWrapper>
      </Main>
    </Body>
  );
};

export default PageContainer;

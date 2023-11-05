'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import styled, { css } from 'styled-components';
import { Play } from 'next/font/google';
import Footer from '@/components/Footer';

const play = Play({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });

const Main = styled.main`
  ${({ theme: { layout, mediaQuery, nav } }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 ${layout.xs.margin};
    margin-top: ${nav.mobileNavHeight};

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      margin-top: unset;
    `)}

    ${mediaQuery('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const InnerPageWrapper = styled.div`
  ${({ theme: { layout, maxWidth, mediaQuery } }) => css`
    column-gap: ${layout.xs.margin};
    display: grid;
    grid-template-columns: repeat(${layout.xs.numOfColumns}, 1fr);
    max-width: ${maxWidth};
    padding: ${layout.xs.topBttmMargin} 0;
    width: 100%;

    ${mediaQuery('md')(`
      column-gap: ${layout.md.margin};
      grid-template-columns: repeat(${layout.md.numOfColumns}, 1fr);
      padding: ${layout.md.topBttmMargin} 0;
    `)}

    ${mediaQuery('lg')(`
      column-gap: ${layout.lg.margin};
      grid-template-columns: repeat(${layout.lg.numOfColumns}, 1fr);
    `)}

    ${mediaQuery('xxl')(`
      column-gap: ${layout.xxl.margin};
      grid-template-columns: repeat(${layout.xxl.numOfColumns}, 1fr);
      padding: ${layout.xxl.topBttmMargin} 0;
    `)}
  `}
`;

const Body = styled.body`
  ${({ theme: { themeColors } }) => css`
    background-color: ${themeColors.bg};
    display: grid;
    height: 100svh;
    grid-template-rows: auto 1fr auto;
  `}
`;

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Body className={play.className}>
      <Navbar />
      <Main>
        <InnerPageWrapper>{children}</InnerPageWrapper>
      </Main>
      <Footer />
    </Body>
  );
};

export default PageContainer;

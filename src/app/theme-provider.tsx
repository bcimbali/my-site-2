'use client';

import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '@/styling/themes';
import GlobalStyles from '@/styling/globalStyles';
import { ThemeStylesContext } from '@/context/themeStylesContext';
// console.log('In theme-provider.tsx, this is theme: ', theme);

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  const { themeState } = useContext(ThemeStylesContext);
  return (
    <ThemeProvider theme={themes[themeState]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

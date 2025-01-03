'use client';

import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '@/styling/themes';
import GlobalStyles from '@/styling/globalStyles';
import { ThemeStylesContext } from '@/context/themeStylesContext';

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  const { themeState, ...allElse } = useContext(ThemeStylesContext);
  console.log('In theme-provider.tsx, this is allElse: ', allElse);
  console.log('In theme-provider.tsx, this is themeState: ', themeState);
  console.log('In theme-provider.tsx, this is theme: ', themes[themeState]);
  return (
    <ThemeProvider theme={themes?.dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

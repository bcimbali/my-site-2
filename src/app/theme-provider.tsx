'use client';

import { ThemeProvider } from 'styled-components';
import theme from '@/styling/themes/darkTheme';
import GlobalStyles from '@/styling/globalStyles';
// console.log('In theme-provider.tsx, this is theme: ', theme);

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

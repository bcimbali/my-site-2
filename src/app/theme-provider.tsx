'use client';

import { ThemeProvider } from 'styled-components';
import themes from '@/styling/themes';
import GlobalStyles from '@/styling/globalStyles';
// console.log('In theme-provider.tsx, this is theme: ', theme);

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

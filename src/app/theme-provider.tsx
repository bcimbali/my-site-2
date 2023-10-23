'use client';

import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from '@/theme';

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

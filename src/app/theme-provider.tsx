'use client';

import { ThemeProvider } from 'styled-components';
import theme from '@/styling/themes/darkTheme';
import GlobalStyles from '@/styling/globalStyles';

export default function ThemeProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

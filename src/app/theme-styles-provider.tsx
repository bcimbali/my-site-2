'use client';

import { ThemeStylesContext } from '@/context/themeStylesContext';
import { useState } from 'react';
import type { ThemeStylesContextTypes } from '@/context/themeStylesContext';

export default function ThemeStylesProviderComponent({ children }: { children: React.ReactNode }) {
  const [themeState, setThemeState] = useState<ThemeStylesContextTypes['themeState']>('dark');
  return (
    <ThemeStylesContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeStylesContext.Provider>
  );
}

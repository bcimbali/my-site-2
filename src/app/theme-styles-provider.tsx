'use client';

import { ThemeStylesContext } from '@/context/themeStylesContext';
import { useState } from 'react';
import type { ThemeStylesContextTypes } from '@/context/themeStylesContext';

export default function ThemeStylesProviderComponent({
  children,
  themeFromCookie
}: {
  children: React.ReactNode;
  themeFromCookie: 'dark' | 'light';
}) {
  const [themeState, setThemeState] =
    useState<ThemeStylesContextTypes['themeState']>(themeFromCookie);
  return (
    <ThemeStylesContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeStylesContext.Provider>
  );
}

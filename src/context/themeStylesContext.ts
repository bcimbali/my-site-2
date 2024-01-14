import { createContext, Dispatch, SetStateAction } from 'react';

export type ThemeStylesContextTypes = {
  themeState: 'dark' | 'light';
  setThemeState: Dispatch<SetStateAction<'dark' | 'light'>>;
};

export const ThemeStylesContext = createContext<ThemeStylesContextTypes>({
  themeState: 'dark',
  setThemeState: () => {}
});

import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ThemeStylesContext } from '@/context/themeStylesContext';

const Button = styled.button``;

const ThemeSwitcher = () => {
  const { themeState, setThemeState } = useContext(ThemeStylesContext);

  const toggleThemeState = () => {
    if (themeState === 'dark') {
      setThemeState('light');
    } else {
      setThemeState('dark');
    }
  };

  const buttonContent = useMemo(() => {
    if (themeState === 'dark') {
      return 'SUN';
    } else {
      return 'MOON';
    }
  }, [themeState]);

  return <Button onClick={toggleThemeState}>{buttonContent}</Button>;
};

export default ThemeSwitcher;

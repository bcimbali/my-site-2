import React, { useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { setCookie } from 'cookies-next';
import { ThemeStylesContext } from '@/context/themeStylesContext';
import { Sun, Moon } from '@/icons/tsx';

const Button = styled.button`
  ${({
    theme: {
      colors,
      mediaQuery,
      typography,
      utils: { opacityHover }
    }
  }) => css`
    ${opacityHover}
    background: ${colors.white};
    border: none;
    border-bottom: 0.0625rem solid ${colors.white};
    border-radius: 0.25rem;
    padding: 0;
    svg {
      width: ${typography.mobile[1]};
      path {
        fill: ${colors.blue};
      }
    }

    &:hover {
      cursor: pointer;
    }

    ${mediaQuery('lg')(`
      svg {
        width: ${typography.desktop[1]};
      }
    `)}
  `}
`;

const ThemeSwitcher = () => {
  const { themeState, setThemeState } = useContext(ThemeStylesContext);

  const toggleThemeState = () => {
    if (themeState === 'dark') {
      setThemeState('light');
      setCookie('theme-setting', 'light');
    } else {
      setThemeState('dark');
      setCookie('theme-setting', 'dark');
    }
  };

  const buttonContent = useMemo(() => {
    if (themeState === 'dark') {
      return <Sun />;
    } else {
      return <Moon />;
    }
  }, [themeState]);

  return (
    <Button aria-label="Toggle website color scheme." onClick={toggleThemeState} role="button">
      {buttonContent}
    </Button>
  );
};

export default ThemeSwitcher;

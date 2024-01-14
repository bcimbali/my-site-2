import React, { useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
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
    background: transparent;
    border: 1px solid ${colors.white};
    border-radius: 0.75rem;
    padding: 0.125rem;
    svg {
      width: ${typography.mobile[1]};
      path {
        fill: ${colors.white};
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
    } else {
      setThemeState('dark');
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

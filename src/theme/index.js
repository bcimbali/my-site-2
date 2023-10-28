import { createGlobalStyle, css } from 'styled-components';

export const maxWidth = '1440px';

export const transitionSpeed = '0.2s';

export const opacityHover = css`
  transition: ${transitionSpeed} opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const linkHover = css`
  color: #ffffff;
  transition: ${transitionSpeed} color;

  &:hover {
    color: blue;
  }
`;

export const breakpoints = {
  xxs: '0px',
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};

const theme = {
  breakpoints: breakpoints,
  colors: {
    bg: '#0B0B3E',
    black: '#111111',
    blue: '#0B0B3E',
    fg: '#FFFFFF',
    green: '#a5dbcb',
    indigo: '#6b5b95',
    orange: '#e8af72',
    purple: '#b1b0e5',
    red: '#ff6f69',
    white: '#FFFFFF',
    yellow: '#ffef96'
  },
  layout: {
    xs: {
      gutter: '24px',
      margin: '24px',
      numOfColumns: 4
    },
    md: {
      gutter: '32px',
      margin: '32px',
      numOfColumns: 8
    },
    lg: {
      gutter: '32px',
      margin: '32px',
      numOfColumns: 12
    },
    xxl: {
      gutter: '40px',
      margin: '40px',
      numOfColumns: 12
    }
  },
  maxWidth: maxWidth,
  mediaQuery: mediaQueries,
  nav: {
    mobileNavHeight: '64px',
    desktopNavHeight: '80px'
  },
  typography: {
    mega: {
      xs: {
        fontSize: '64px',
        lineHeight: '100%'
      },
      lg: {
        fontSize: '48px',
        lineHeight: '150%'
      }
    },
    h1: {
      xs: {
        fontSize: '40px',
        lineHeight: '150%'
      },
      lg: {
        fontSize: '48px',
        lineHeight: '100%'
      }
    },
    h2: {
      xs: {
        fontSize: '32px',
        lineHeight: '150%'
      },
      lg: {
        fontSize: '40px',
        lineHeight: '100%'
      }
    },
    h3: {
      xs: {
        fontSize: '24px',
        lineHeight: '150%'
      },
      lg: {
        fontSize: '32px',
        lineHeight: '100%'
      }
    },
    h4: {
      xs: {
        fontSize: '16px',
        lineHeight: '150%'
      },
      lg: {
        fontSize: '24px',
        lineHeight: '100%'
      }
    },
    p: {
      xs: {
        fontSize: '14px',
        lineHeight: '150%'
      },
      lg: {
        fontSize: '14px',
        lineHeight: '150%'
      }
    }
  }
};

// Global Css default styles:
export const GlobalStyles = createGlobalStyle`
  .no-scroll {
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  ${({ theme: { mediaQuery, typography } }) => css`
    /* Mobile Typography Settings: */
    h1 {
      font-size: ${typography.h1.xs.fontSize};
      line-height: ${typography.h1.xs.lineHeight};
    }
    h2 {
      font-size: ${typography.h2.xs.fontSize};
      line-height: ${typography.h2.xs.lineHeight};
    }
    h3 {
      font-size: ${typography.h3.xs.fontSize};
      line-height: ${typography.h3.xs.lineHeight};
    }
    h4 {
      font-size: ${typography.h4.xs.fontSize};
      line-height: ${typography.h4.xs.lineHeight};
    }
    p {
      font-size: ${typography.p.xs.fontSize};
      line-height: ${typography.p.xs.lineHeight};
    }

    /* Desktop Typography Settings: */
    ${mediaQuery('lg')(`
      h1 {
        font-size: ${typography.h1.lg.fontSize};
        line-height: ${typography.h1.lg.lineHeight};
      }
      h2 {
        font-size: ${typography.h2.lg.fontSize};
        line-height: ${typography.h2.lg.lineHeight};
      }
      h3 {
        font-size: ${typography.h3.lg.fontSize};
        line-height: ${typography.h3.lg.lineHeight};
      }
      h4 {
        font-size: ${typography.h4.lg.fontSize};
        line-height: ${typography.h4.lg.lineHeight};
      }
      p {
        font-size: ${typography.p.lg.fontSize};
        line-height: ${typography.p.lg.lineHeight};
      }
    `)}
  `}
`;

export default theme;

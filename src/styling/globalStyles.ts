import { createGlobalStyle, css } from 'styled-components';

// Global Css default styles:
const GlobalStyles = createGlobalStyle`
  ${({ theme: { mediaQuery, opacityHover, themeColors, typography } }) => css`
    /* Defaults for all a tags: */
    a {
      ${opacityHover}
      text-decoration: none;
    }

    /* Class to set on body when mobile dropdown is open: */
    .no-scroll {
      overflow: hidden;
      position: absolute;
      width: 100%;
    }

    /* Set body tag colors: */
    p,
    a,
    li,
    ul,
    ol {
      color: ${themeColors.body};
    }

    /* Set heading font colors: */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${themeColors.headings};
    }

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
    h5 {
      font-size: ${typography.h5.xs.fontSize};
      line-height: ${typography.h5.xs.lineHeight};
    }
    h6 {
      font-size: ${typography.h6.xs.fontSize};
      line-height: ${typography.h6.xs.lineHeight};
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
      h5 {
        font-size: ${typography.h5.lg.fontSize};
        line-height: ${typography.h5.lg.lineHeight};
      }
      h6 {
        font-size: ${typography.h6.lg.fontSize};
        line-height: ${typography.h6.lg.lineHeight};
      }
      p {
        font-size: ${typography.p.lg.fontSize};
        line-height: ${typography.p.lg.lineHeight};
      }
    `)}
  `}
`;

// Mobile - 1.200 Modular Scale, Minor 3rd.
// Desktop - 1.333 Modular Scale, Perfect 4th.
export const typography = {
  mega: {
    xs: {
      fontSize: '2.986rem', // 47.78px
      lineHeight: '100%'
    },
    lg: {
      fontSize: '5.61rem', // 89.76px
      lineHeight: '150%'
    }
  },
  h1: {
    xs: {
      fontSize: '2.488rem', // 39.81px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '4.209rem', // 67.34px
      lineHeight: '100%'
    }
  },
  h2: {
    xs: {
      fontSize: '2.074rem', // 33.18px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '3.157rem', // 50.52px
      lineHeight: '100%'
    }
  },
  h3: {
    xs: {
      fontSize: '1.728rem', // 27.65px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '2.369rem', // 37.90px
      lineHeight: '100%'
    }
  },
  h4: {
    xs: {
      fontSize: '1.44rem', // 23.04px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.777rem', // 28.43px
      lineHeight: '100%'
    }
  },
  h5: {
    xs: {
      fontSize: '1.2rem', // 19.20px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.333rem', // 21.33px
      lineHeight: '100%'
    }
  },
  h6: {
    xs: {
      fontSize: '1.2rem', // 19.20px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1.333rem', // 21.33px
      lineHeight: '100%'
    }
  },
  p: {
    xs: {
      fontSize: '1rem', // 16px
      lineHeight: '150%'
    },
    lg: {
      fontSize: '1rem', // 16px
      lineHeight: '150%'
    }
  }
} as const;

export default GlobalStyles;

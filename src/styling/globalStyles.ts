import { createGlobalStyle, css } from 'styled-components';

// Global Css default styles:
const GlobalStyles = createGlobalStyle`
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

export const typography = {
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
};

export default GlobalStyles;

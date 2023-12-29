import { createGlobalStyle, css } from 'styled-components';
import { brunoAce } from '@/app/fonts';

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

    /* Set max-width of body text for readability: */
    p {
      max-width: 60ch;
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
      font-weight: 400;
    }

    /* Mobile Typography Settings: */
    h1 {
      ${brunoAce?.style};
      font-size: ${typography.tags.h1.xs.fontSize};
      line-height: ${typography.tags.h1.xs.lineHeight};
    }
    h2 {
      ${brunoAce?.style};
      font-size: ${typography.tags.h2.xs.fontSize};
      line-height: ${typography.tags.h2.xs.lineHeight};
    }
    h3 {
      font-size: ${typography.tags.h3.xs.fontSize};
      line-height: ${typography.tags.h3.xs.lineHeight};
    }
    h4 {
      font-size: ${typography.tags.h4.xs.fontSize};
      line-height: ${typography.tags.h4.xs.lineHeight};
    }
    h5 {
      font-size: ${typography.tags.h5.xs.fontSize};
      line-height: ${typography.tags.h5.xs.lineHeight};
    }
    h6 {
      font-size: ${typography.tags.h6.xs.fontSize};
      line-height: ${typography.tags.h6.xs.lineHeight};
    }
    p {
      font-size: ${typography.tags.p.xs.fontSize};
      line-height: ${typography.tags.p.xs.lineHeight};
    }

    /* Desktop Typography Settings: */
    ${mediaQuery('lg')(`
      h1 {
        font-size: ${typography.tags.h1.lg.fontSize};
        line-height: ${typography.tags.h1.lg.lineHeight};
      }
      h2 {
        font-size: ${typography.tags.h2.lg.fontSize};
        line-height: ${typography.tags.h2.lg.lineHeight};
      }
      h3 {
        font-size: ${typography.tags.h3.lg.fontSize};
        line-height: ${typography.tags.h3.lg.lineHeight};
      }
      h4 {
        font-size: ${typography.tags.h4.lg.fontSize};
        line-height: ${typography.tags.h4.lg.lineHeight};
      }
      h5 {
        font-size: ${typography.tags.h5.lg.fontSize};
        line-height: ${typography.tags.h5.lg.lineHeight};
      }
      h6 {
        font-size: ${typography.tags.h6.lg.fontSize};
        line-height: ${typography.tags.h6.lg.lineHeight};
      }
      p {
        font-size: ${typography.tags.p.lg.fontSize};
        line-height: ${typography.tags.p.lg.lineHeight};
      }
    `)}
  `}
`;

export default GlobalStyles;

import breakpoints, {
  desktopFooterHeight,
  desktopNavHeight,
  genSpacingValues,
  gridValues,
  maxWidth,
  mediaQueries,
  mobileFooterHeight,
  mobileNavHeight
} from 'src/styling/layout';
import genTypography from '@/styling/typography';
import transitionSpeed, { opacityHover, linkHover } from '@/styling/utils';
import { genTypographicScale } from '@/styling/typography';

export const baseRem = 1;
export const bodyLineHeight = 1.5;

const textSizes = genTypographicScale({ scale: 1.333 });

const typography = genTypography({
  desktopSettings: { scale: 1.333, bodyLineHeight, headingLineHeight: 1, baseRem },
  mobileSettings: { scale: 1.25, bodyLineHeight, headingLineHeight: 1.5, baseRem }
});

const spacing = genSpacingValues({ lineHeight: bodyLineHeight, base: baseRem });

const colors = {
  red: '#ff6f69',
  orange: '#e8af72',
  yellow: '#ffef96',
  green: '#a5dbcb',
  blue: '#0B0B3E',
  purple: '#b1b0e5',
  black: '#111111',
  white: '#FFFFFF',
  bg: 'linear-gradient(to bottom, #004694, #196DD8, #429CFE, #73C9FF)',
  fg: '#FFFFFF'
} as const;

const theme = {
  breakpoints,
  colors,
  themeColors: {
    bg: colors.bg,
    body: colors.white,
    fg: colors.white,
    headings: colors.white,
    mobileDropdownBg: colors.white,
    mobileDropdownFg: colors.blue,
    secondary: '#380D8B'
  },
  layout: gridValues,
  linkHover,
  maxWidth,
  opacityHover,
  mediaQuery: mediaQueries,
  nav: {
    mobileNavHeight,
    desktopNavHeight
  },
  footer: {
    mobileFooterHeight,
    desktopFooterHeight
  },
  spacing,
  textSizes,
  transitionSpeed,
  typography
} as const;

export default theme;

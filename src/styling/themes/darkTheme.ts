import breakpoints, {
  desktopFooterHeight,
  desktopNavHeight,
  gridValues,
  maxWidth,
  mediaQueries,
  mobileFooterHeight,
  mobileNavHeight
} from 'src/styling/layout';
import typography from '@/styling/typography';
import transitionSpeed, { opacityHover, linkHover } from '@/styling/utils';
import { genTypographicScale } from '@/styling/typography';

const textSizes = genTypographicScale({ scale: 1.333 });

const colors = {
  red: '#ff6f69',
  orange: '#e8af72',
  yellow: '#ffef96',
  green: '#a5dbcb',
  blue: '#0B0B3E',
  purple: '#b1b0e5',
  black: '#111111',
  white: '#FFFFFF',
  bg: '#0B0B3E',
  fg: '#FFFFFF'
} as const;

const theme = {
  breakpoints,
  colors,
  themeColors: {
    bg: colors.blue,
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
  textSizes,
  transitionSpeed,
  typography
} as const;

export default theme;

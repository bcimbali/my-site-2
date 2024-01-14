import breakpoints, {
  desktopFooterHeight,
  desktopNavHeight,
  genSpacingValues,
  gridValues,
  maxWidth,
  mediaQueries,
  mobileFooterHeight,
  mobileNavHeight,
  shippingContainer
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
  orange: '#FF5733',
  yellow: '#FFFF33',
  green: '#7CFC00',
  blue: '#004694',
  purple: '#b1b0e5',
  brown: '#483C32',
  black: '#111111',
  gray: '#222222',
  // For white shades: https://www.jootoor.com/shades-white-color-codes/
  white: '#E3DAC9',
  bg: 'linear-gradient(to bottom, #004694, #196DD8, #429CFE, #73C9FF)',
  fg: '#FFFFFF'
} as const;

const theme = {
  breakpoints,
  colors,
  themeColors: {
    bg: colors.bg,
    body: colors.black,
    fg: colors.white,
    footerBg: colors.black,
    headings: colors.black,
    mobileDropdownBg: colors.blue,
    mobileDropdownFg: colors.white,
    navbarBg: colors.blue,
    secondary: '#380D8B',
    warning: colors.red,
    danger: colors.red
  },
  layout: gridValues,
  maxWidth,
  mediaQuery: mediaQueries,
  components: {
    nav: {
      mobileHeight: mobileNavHeight,
      desktopHeight: desktopNavHeight
    },
    footer: {
      mobileHeight: mobileFooterHeight,
      desktopHeight: desktopFooterHeight
    },
    shippingContainer
  },
  spacing,
  textSizes,
  typography,
  utils: {
    linkHover,
    opacityHover,
    transitionSpeed
  }
} as const;

export default theme;

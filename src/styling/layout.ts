const breakpoints = {
  xxs: '0px',
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
} as const;

type mediaQueryTypes = keyof typeof breakpoints;
type mediaQueryValues = (typeof breakpoints)[mediaQueryTypes];

// Re-usable min-width media query:
export const mediaQueries = (key: mediaQueryTypes) => {
  return (style: mediaQueryValues) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};

// Sitewide max page container width:
export const maxWidth = '1440px' as const;

// Sitewide 12, 8, and 4 column grid layout:
export const gridValues = {
  xxs: {
    gutter: '24px',
    margin: '24px',
    numOfColumns: 4,
    topMargin: '24px',
    bottomMargin: '48px'
  },
  xs: {
    gutter: '24px',
    margin: '24px',
    numOfColumns: 4,
    topMargin: '24px',
    bottomMargin: '48px'
  },
  sm: {
    gutter: '24px',
    margin: '24px',
    numOfColumns: 4,
    topMargin: '24px',
    bottomMargin: '48px'
  },
  md: {
    gutter: '36px',
    margin: '36px',
    numOfColumns: 8,
    topMargin: '36px',
    bottomMargin: '48px'
  },
  lg: {
    gutter: '36px',
    margin: '36px',
    numOfColumns: 12,
    topMargin: '36px',
    bottomMargin: '48px'
  },
  xl: {
    gutter: '36px',
    margin: '36px',
    numOfColumns: 12,
    topMargin: '36px',
    bottomMargin: '48px'
  },
  xxl: {
    gutter: '48px',
    margin: '48px',
    numOfColumns: 12,
    topMargin: '48px',
    bottomMargin: '48px'
  }
} as const;

// Sitewide navbar/header heights:
export const mobileNavHeight = '66px' as const;
export const desktopNavHeight = '84px' as const;

// Sitewide footer heights:
export const mobileFooterHeight = '66px' as const;
export const desktopFooterHeight = '84px' as const;

export const genSpacingValues = ({
  lineHeight,
  base
}: {
  lineHeight: number;
  base: number;
  isPx?: boolean;
}) => {
  const multipliers = [
    0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75,
    5
  ];
  const baseline = base * lineHeight;

  const spacingRemMultiples = multipliers.map((m, idx) => [[idx - 3], `${baseline * m}rem`]);
  const asRemValues = Object.fromEntries(spacingRemMultiples);

  const spacingPxMultiples = multipliers.map((m, idx) => [[idx - 3], `${baseline * m * 16}px`]);
  const asPixelValues = Object.fromEntries(spacingPxMultiples);

  return {
    asPixels: asPixelValues,
    ...asRemValues
  };
};

export default breakpoints;

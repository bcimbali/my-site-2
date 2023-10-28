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
} as const;

// Sitewide navbar/header heights:
export const mobileNavHeight = '64px' as const;
export const desktopNavHeight = '80px' as const;

export default breakpoints;

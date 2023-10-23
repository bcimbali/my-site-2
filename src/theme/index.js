import { css } from 'styled-components';

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
  mq: mediaQueries,
  nav: {
    mobileNavHeight: '64px',
    desktopNavHeight: '80px'
  }
};

export default theme;

import { css } from 'styled-components';
import { East } from '@/icons/tsx';

const east = {
  bgColor: '#e9692c',
  containerCss: css`
    ${({ theme: { mediaQuery } }) => css`
      .container-no {
        border-bottom: 1px solid #ffffff;
        bottom: 15px;
        left: 35px;
        right: unset;
        text-orientation: unset;
        top: unset;
        writing-mode: unset;
      }
      ${mediaQuery('lg')(`
      .container-no {
        bottom: 30px;
        left: 50px;
        right: unset;
        top: unset;
      }
  `)}
    `}
  `,
  containerNo: 'N9M-X SRK',
  logo: {
    color: '#511010',
    desktopWidth: '400px',
    fill: '#511010',
    mobileWidth: '300px',
    src: East
  },
  textColor: '#FFFFFF'
};

export default east;

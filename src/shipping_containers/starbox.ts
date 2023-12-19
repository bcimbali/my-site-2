import { css } from 'styled-components';
import { StarBox } from '@/icons/tsx';

const starbox = {
  bgColor: '#9a2be4',
  containerCss: css`
    ${({ theme: { mediaQuery } }) => css`
      display: flex;
      flex-direction: row;
      .logo {
        position: absolute;
        right: 35px;
      }
      .container-no {
        left: 35px;
        right: unset;
      }
      ${mediaQuery('lg')(`
      .logo {
        right: 60px;
      }
      .container-no {
        left: 50px;
        right: unset;
      }
    `)}
    `}
  `,
  containerNo: 'D6V-X IZI',
  logo: {
    color: '#545AA7',
    desktopWidth: '130px',
    fill: '#545AA7',
    mobileWidth: '100px',
    src: StarBox
  }
};

export default starbox;

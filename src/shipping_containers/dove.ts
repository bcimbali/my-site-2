import { css } from 'styled-components';
import { Dove } from '@/icons/tsx';

const dove = {
  bgColor: '#6F00FF',
  containerNo: 'ETY-W 376',
  logo: {
    color: 'none',
    containerCss: css`
      ${({ theme: { mediaQuery } }) => css`
        .container-no {
          left: 35px;
          right: unset;
        }
        ${mediaQuery('lg')(`
          .container-no {
            left: 50px;
            right: unset;
          }
      `)}
      `}
    `,
    desktopWidth: '300px',
    fill: '#FEBE10',
    mobileWidth: '200px',
    src: Dove
  },
  textColor: '#FEBE10'
};

export default dove;

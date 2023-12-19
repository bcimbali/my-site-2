import { css } from 'styled-components';
import { Onyx } from '@/icons/tsx';

const onyx = {
  bgColor: '#FFD700',
  containerCss: css`
    ${({ theme: { mediaQuery } }) => css`
      display: flex;
      flex-direction: row;
      .logo {
        position: absolute;
        left: 35px;
      }
      ${mediaQuery('lg')(`
        .logo {
          left: 60px;
        }
      `)}
    `}
  `,
  containerNo: 'H3T-L MRT',
  logo: {
    color: '#222831',
    desktopWidth: '35px',
    fill: '#222831',
    mobileWidth: '34px',
    src: Onyx
  },
  textColor: '#222831'
};

export default onyx;

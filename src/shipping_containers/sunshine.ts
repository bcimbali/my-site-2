import { css } from 'styled-components';
import { Sunshine } from '@/icons/tsx';

const sunshine = {
  bgColor: '#222222',
  containerNo: 'F61-N REQ',
  containerCss: css`
    ${({ theme: { mediaQuery } }) => css`
      .logo {
        bottom: 20px;
        left: 35px;
        position: absolute;
      }
      ${mediaQuery('lg')(`
      .logo {
        bottom: 30px;
        left: 60px;
      }
    `)}
    `}
  `,
  logo: {
    color: '#EE82EE',
    fill: '#EE82EE',
    mobileWidth: '200px',
    src: Sunshine
  },
  textColor: '#EE82EE'
};

export default sunshine;

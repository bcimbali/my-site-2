import { css } from 'styled-components';

const grayOne = {
  bgColor: '#222831',
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
  textColor: 'rgba(166, 129, 35, 1)'
};

export default grayOne;

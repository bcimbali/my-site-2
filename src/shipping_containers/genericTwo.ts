import { css } from 'styled-components';
import theme from 'src/styling/themes/darkTheme';

const genericTwo = {
  bgColor: '#222831',
  containerCss: css`
    ${({ theme: { mediaQuery } }) => css`
      .container-no {
        bottom: 15px;
        left: 35px;
        right: unset;
        top: unset;
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
  containerNo: 'ZOG-E BCA',
  textColor: theme.colors.white
};

export default genericTwo;

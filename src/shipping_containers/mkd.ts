import { css } from 'styled-components';
import { Mkd } from '@/icons/tsx';
import { shippingContainer } from '@/styling/layout';

const mkd = {
  bgColor: '#F4F0EC',
  containerCss: css`
    ${({ theme: { mediaQuery, typography } }) => css`
      .container-no {
        bottom: 15px;
        font-size: ${typography.mobile[-1]};
        font-weight: bold;
        left: 35px;
        right: unset;
        text-orientation: unset;
        top: unset;
        writing-mode: unset;
      }
      ${mediaQuery('lg')(`
      .container-no {
        bottom: 30px;
        font-size: ${typography.desktop[-1]};
        left: 50px;
        right: unset;
        top: unset;
      }
  `)}
    `}
  `,
  containerNo: 'I7T-S ACY',
  logo: {
    color: '#800000',
    desktopWidth: shippingContainer.desktop.width,
    fill: 'none',
    mobileWidth: shippingContainer.mobile.width,
    src: Mkd
  },
  textColor: '#800000'
};

export default mkd;

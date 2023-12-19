import { Mkd } from '@/icons/tsx';
import { css } from 'styled-components';
import { shippingContainer } from '@/styling/layout';
import {
  caretContainer,
  doveContainer,
  eastContainer,
  ftLogisticsContainer,
  onyxContainer,
  starboxContainer,
  sunshineContainer,
  wishContainer,
  vmrOneContainer,
  vmrThreeContainer,
  vmrTwoContainer
} from '@/shipping_containers';

const containersData = [
  {
    id: 'DTTX-1197',
    containers: [onyxContainer, wishContainer]
  },
  {
    id: 'DTTX-7201',
    containers: [vmrOneContainer, sunshineContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'DTTX-4719',
    containers: [caretContainer, starboxContainer]
  },
  {
    id: 'DTTX-9209',
    containers: [ftLogisticsContainer, vmrTwoContainer]
  },
  {
    id: 'DTTX-7789',
    containers: [eastContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'DTTX-5142',
    containers: []
  },
  {
    id: 'DTTX-0702',
    containers: [doveContainer, vmrThreeContainer]
  },
  {
    id: 'DTTX-8244',
    containers: [],
    flatcarColor: '#71797E'
  },
  {
    id: 'DTTX-4132',
    containers: [
      {
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
      }
    ]
  }
];

export default containersData;

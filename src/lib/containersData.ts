import { Vmr, Onyx } from '@/icons/tsx';
import { css } from 'styled-components';

const containersData = [
  {
    id: 'DTTX-1197',
    containers: [
      {
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
          desktopWidth: '45px',
          fill: '#222831',
          mobileWidth: '34px',
          src: Onyx
        },
        textColor: '#222831'
      },
      {
        containerNo: 'D6V-X IZI',
        logo: {
          color: '#FFFFFF',
          desktopWidth: '130px',
          fill: '#FFFFFF',
          mobileWidth: '100px',
          src: Vmr
        }
      }
    ]
  },
  {
    id: 'DTTX-7201',
    containers: [
      {
        bgColor: '#BADA55',
        containerNo: 'R2G-E DUP',
        logo: {
          color: 'none',
          desktopWidth: '130px',
          fill: '#002244',
          mobileWidth: '100px',
          src: Vmr
        },
        textColor: '#002244'
      },
      {
        bgColor: '#BADA55',
        containerNo: 'F61-N REQ',
        subtitle: '23',
        textColor: '#002244',
        title: 'T R T'
      }
    ],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'DTTX-4719',
    containers: [
      {
        bgColor: '#6050DC',
        containerNo: 'Q1P-O LKY',
        title: 'E M P'
      },
      {
        bgColor: '#6050DC',
        containerNo: 'Z3I-B VLV',
        title: 'E M P'
      }
    ]
  },
  {
    id: 'DTTX-9209',
    containers: [
      {
        bgColor: '#66FF00',
        containerNo: 'C8W-I ZEZ',
        textColor: '#1B4D3E',
        title: 'S W'
      },
      {
        bgColor: '#66FF00',
        containerNo: 'E9A-A KJG',
        textColor: '#1B4D3E',
        title: 'S W'
      }
    ]
  },
  {
    id: 'DTTX-7789',
    containers: [
      {
        bgColor: '#FFFF00',
        containerNo: 'N9M-X SRK',
        textColor: '#111111',
        title: 'Z R E'
      }
    ],
    flatcarColor: '#4B5320'
  },
  {
    id: 'DTTX-5142',
    containers: []
  },
  {
    id: 'DTTX-0702',
    containers: [
      {
        bgColor: '#A52A2A',
        containerNo: 'N7W-M ZFD',
        textColor: '#CCCCFF',
        title: 'L R - N W'
      },
      {
        bgColor: '#A52A2A',
        containerNo: 'T0V-E SJT',
        textColor: '#CCCCFF',
        title: 'L R - N W'
      }
    ]
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
        containerNo: 'I7T-S ACY',
        textColor: '#111111',
        title: 'V   A   M   I'
      }
    ]
  }
];

export default containersData;

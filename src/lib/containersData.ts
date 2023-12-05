import { East, Mkd, Onyx, StarBox, Vmr } from '@/icons/tsx';
import { css } from 'styled-components';
import { shippingContainer } from '@/styling/layout';

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
          color: '#59dcf6',
          desktopWidth: '130px',
          fill: '#59dcf6',
          mobileWidth: '100px',
          src: StarBox
        },
        textColor: '#59dcf6'
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
        bgColor: '#68c7ab',
        containerNo: 'F61-N REQ',
        subtitle: '23',
        textColor: '#002244'
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
        bgColor: '#6483ff',
        containerNo: 'Z3I-B VLV',
        subtitle: 'CST'
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
        bgColor: '#1B4D3E',
        containerNo: 'E9A-A KJG',
        logo: {
          color: 'none',
          desktopWidth: '130px',
          fill: '#EEEEEE',
          mobileWidth: '100px',
          src: Vmr
        },
        textColor: '#EEEEEE'
      }
    ]
  },
  {
    id: 'DTTX-7789',
    containers: [
      {
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
        title: 'CATT',
        containerNo: 'E0W-E SJX'
      },
      {
        bgColor: '#A52A2A',
        containerNo: 'T0V-E SJT',
        logo: {
          color: 'none',
          desktopWidth: '130px',
          fill: '#CCCCFF',
          mobileWidth: '100px',
          src: Vmr
        },
        textColor: '#CCCCFF'
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
        containerCss: css`
          ${({ theme: { mediaQuery, typography } }) => css`
            .container-no {
              bottom: 15px;
              font-size: ${typography.mobile[0]};
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

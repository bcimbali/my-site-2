import { CkSite } from '@/icons/tsx';
import { css } from 'styled-components';

const bgColor = 'rgb(177, 176, 229)';
const contrastColor = '#242953';

const ckSite = {
  bgColor,
  containerCss: css`
    .container-no {
      border-bottom: 1px solid ${contrastColor};
      border-top: 1px solid ${contrastColor};
      padding: 4px 0;
    }
  `,
  containerNo: 'CK-32 LPQ',
  link: '/projects/ck-site',
  logo: {
    color: contrastColor,
    fill: contrastColor,
    src: CkSite
  },
  textColor: contrastColor
};

export default ckSite;

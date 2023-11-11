import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgMobileXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#fff"
      d="M23.9 24 .003 2.037V0L24 22.054V24h-.1Z"
      stroke={props.color || '#ffffff'}
    />
    <path
      fill="#fff"
      d="M0 24v-2.038L23.867 0h.131v1.918L0 24Z"
      stroke={props.color || '#ffffff'}
    />
  </svg>
);
const Memo = memo(SvgMobileXIcon);
export default Memo;

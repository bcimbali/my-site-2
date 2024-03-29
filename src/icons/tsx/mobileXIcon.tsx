import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgMobileXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill={props.fill || 'none'}
      d="M23.9 24 .003 2.037V0L24 22.054V24h-.1Z"
      stroke={props.color || '#ffffff'}
    />
    <path
      fill={props.fill || 'none'}
      d="M0 24v-2.038L23.867 0h.131v1.918L0 24Z"
      stroke={props.color || '#ffffff'}
    />
  </svg>
);
const Memo = memo(SvgMobileXIcon);
export default Memo;

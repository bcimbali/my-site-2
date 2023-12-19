import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke={props.color || '#ffffff'}
      strokeWidth={2}
      d="M0 23h24M0 12h12M0 1h18"
      fill={props.fill || 'none'}
    />
  </svg>
);
const Memo = memo(SvgHamburger);
export default Memo;

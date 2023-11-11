import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path stroke={props.color || '#ffffff'} strokeWidth={2} d="M0 23h24M0 12h24M0 1h24" />
  </svg>
);
const Memo = memo(SvgHamburger);
export default Memo;

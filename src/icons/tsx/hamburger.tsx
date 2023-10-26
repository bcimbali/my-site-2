import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={16} fill="none" {...props}>
    <path stroke={props.color || '#ffffff'} strokeWidth={2} d="M0 15h31M0 8h31M0 1h31" />
  </svg>
);
const Memo = memo(SvgHamburger);
export default Memo;

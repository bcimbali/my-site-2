import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgVerticalStrip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2 200" {...props}>
    <path fill={props.fill || 'none'} d="M0 0h2v200H0z" stroke={props.color || '#ffffff'} />
  </svg>
);
const Memo = memo(SvgVerticalStrip);
export default Memo;

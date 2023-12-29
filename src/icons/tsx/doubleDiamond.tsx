import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDoubleDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 200" {...props}>
    <path
      fill={props.fill || 'none'}
      fillRule="evenodd"
      d="M0 0h35v200H0zm17.5 57L33 72.5 17.5 88 2 72.5zM33 131.5 17.5 116 2 131.5 17.5 147z"
      clipRule="evenodd"
      stroke={props.color || '#ffffff'}
    />
  </svg>
);
const Memo = memo(SvgDoubleDiamond);
export default Memo;

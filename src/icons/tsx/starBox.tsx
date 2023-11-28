import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgStarBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 125 125" {...props}>
    <path
      fill={props.fill || 'none'}
      d="M75.504 48.495 62 12 48.495 48.495 12 62l36.495 13.504L62 112l13.504-36.496L112 62 75.504 48.495Z"
      stroke={props.color || '#ffffff'}
    />
    <path
      fill={props.fill || 'none'}
      fillRule="evenodd"
      d="M0 0h125v125H0V0Zm9 9h107v107H9V9Z"
      clipRule="evenodd"
      stroke={props.color || '#ffffff'}
    />
  </svg>
);
const Memo = memo(SvgStarBox);
export default Memo;

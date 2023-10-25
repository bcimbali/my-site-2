import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={16} fill="none" {...props}>
    <path stroke="#fff" strokeWidth={2} d="M0 15h31M0 8h31M0 1h31" />
  </svg>
);
export default SvgHamburger;


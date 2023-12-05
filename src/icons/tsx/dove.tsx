import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 266" {...props}>
    <g fill="#000" clipPath="url(#dove_svg__a)">
      <path
        d="M82-49h30v390H82V-49ZM485-49h30v390h-30V-49Z"
        stroke={props.color || '#ffffff'}
        fill={props.fill || 'none'}
      />
      <path
        d="M-49 220v-30h687v30H-49ZM-49 76V46h687v30H-49ZM184.8 109.2c4.821 0 8.469 1.259 10.944 3.776 2.517 2.475 3.776 6.123 3.776 10.944v15.36c0 4.821-1.259 8.491-3.776 11.008-2.475 2.475-6.123 3.712-10.944 3.712h-24.96v-44.8h24.96Zm3.2 14.72c0-3.84-1.92-5.76-5.76-5.76h-10.88v26.88h10.88c3.84 0 5.76-1.92 5.76-5.76v-15.36ZM271.182 121.36c0-2.56-1.28-3.84-3.84-3.84h-10.88c-2.56 0-3.84 1.28-3.84 3.84v20.48c0 2.56 1.28 3.84 3.84 3.84h10.88c2.56 0 3.84-1.28 3.84-3.84v-20.48Zm11.52 20.48c0 4.48-1.024 7.744-3.072 9.792-2.005 2.005-5.248 3.008-9.728 3.008h-16c-4.48 0-7.744-1.003-9.792-3.008-2.005-2.048-3.008-5.312-3.008-9.792v-20.48c0-4.48 1.003-7.723 3.008-9.728 2.048-2.048 5.312-3.072 9.792-3.072h16c4.48 0 7.723 1.024 9.728 3.072 2.048 2.005 3.072 5.248 3.072 9.728v20.48ZM343.242 140.56l10.88-31.36h12.48l-16.96 44.8h-12.8l-16.96-44.8h12.48l10.88 31.36ZM441.8 154h-35.52v-44.8h35.52v8.96h-24v8.64h18.88v8.96H417.8v9.28h24V154Z"
        stroke={props.color || '#ffffff'}
        fill={props.fill || 'none'}
      />
    </g>
    <defs>
      <clipPath id="dove_svg__a">
        <path fill={props.fill || 'none'} d="M0 0h600v266H0z" stroke={props.color || '#ffffff'} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgDove);
export default Memo;

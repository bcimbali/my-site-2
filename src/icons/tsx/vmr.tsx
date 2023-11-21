import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgVmr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 88 100" {...props}>
    <path
      fill={props.fill || 'none'}
      d="M64.313 52H74.8c1 0 1.84-.016 2.52-.047a11.7 11.7 0 0 0 1.698-.2c.446-.093.79-.226 1.032-.398.242-.171.418-.398.527-.68.117-.28.184-.616.2-1.007.006-.122.013-.252.018-.388.01-.308.016-.651.016-1.03 0-.508-.011-.945-.035-1.313-.015-.367-.082-.675-.199-.925a1.3 1.3 0 0 0-.527-.598c-.242-.148-.586-.262-1.032-.34-.445-.086-1.011-.14-1.699-.164a74.98 74.98 0 0 0-2.52-.035H64.314V52Z"
      stroke={props.color || '#ffffff'}
    />
    <path
      fill={props.fill || 'none'}
      fillRule="evenodd"
      d="m44 0 43.301 25v50L44 100 .699 75V25L44 0ZM23.625 43h2.625L16.5 61h-3L3.75 43h2.625L15 59.5 23.625 43Zm7.875 1.5V61h-2.25V43H33l10.488 15.75L53.977 43h3.586v18h-2.25V44.746L44.624 61h-2.273L31.5 44.5ZM82.688 61h-2.25v-3.375c0-.547-.012-1.016-.036-1.406a2.953 2.953 0 0 0-.199-1.02 1.466 1.466 0 0 0-.527-.68c-.242-.171-.586-.304-1.032-.398-.445-.094-1.011-.156-1.699-.187a45.09 45.09 0 0 0-2.52-.059H64.314V61h-2.25V43H74.8c1.375 0 2.531.05 3.468.152.946.094 1.723.239 2.333.434.617.195 1.09.437 1.417.727.337.289.579.628.727 1.019.156.39.246.828.27 1.313.03.484.046 1.02.046 1.605 0 .75-.054 1.41-.164 1.98-.101.563-.277 1.043-.527 1.442-.25.398-.582.719-.996.96-.414.235-.934.4-1.559.493.625.094 1.125.258 1.5.492.375.235.665.54.868.914.203.375.335.82.398 1.336.033.239.058.493.075.762.02.312.03.644.03.996V61ZM26 68h37v-2H26v2Z"
      clipRule="evenodd"
      stroke={props.color || '#ffffff'}
    />
  </svg>
);
const Memo = memo(SvgVmr);
export default Memo;

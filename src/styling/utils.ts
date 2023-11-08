import { css } from 'styled-components';

const transitionSpeed = '0.2s' as const;

export const opacityHover = css`
  transition: ${transitionSpeed} opacity;

  &:hover {
    opacity: 0.8;
  }
`;
export const linkHover = css`
  color: #ffffff;
  transition: ${transitionSpeed} color;

  &:hover {
    color: blue;
  }
`;

export default transitionSpeed;

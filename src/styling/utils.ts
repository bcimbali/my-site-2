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

// Typography Functions:
const genDescendingDegrees = ({ scale }: { scale: number }) => {
  const descendingDegrees = [-1, -2, -3];
  let lastDescendingValue = 1;

  const descendingValues = descendingDegrees.map((degree) => {
    const nextValue = lastDescendingValue / scale;
    lastDescendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });
  return descendingValues.reverse();
};

const genAscendingValues = ({ scale }: { scale: number }) => {
  const ascendingDegrees = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let lastAscendingValue = 1;

  const increasingValues = ascendingDegrees.map((degree) => {
    const nextValue = lastAscendingValue * scale;
    lastAscendingValue = nextValue;
    return [degree, `${nextValue.toFixed(3)}rem`];
  });

  return increasingValues;
};

export const genTypographicScale = ({ scale }: { scale: number }) => {
  const descendingValues = genDescendingDegrees({ scale });
  const ascendingValues = genAscendingValues({ scale });

  const combinedValues = [...descendingValues, ...ascendingValues];
  return Object.fromEntries(combinedValues);
};

export default transitionSpeed;

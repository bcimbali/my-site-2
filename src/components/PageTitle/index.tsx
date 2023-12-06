'use client';

import styled, { css } from 'styled-components';

type TitleTypes = {
  $noMargin?: boolean;
};

const Title = styled.h1<TitleTypes>`
  ${({ $noMargin, theme: { mediaQuery, spacing, themeColors } }) => css`
    color: ${themeColors.fg};
    margin-bottom: ${$noMargin ? 0 : spacing[0]};
    text-align: center;

    ${mediaQuery('lg')(`
      margin-bottom: ${$noMargin ? 0 : spacing[4]};
    `)}
  `}
`;

const PageTitle = ({
  children,
  noMargin = false
}: {
  children: React.ReactNode;
  noMargin?: boolean;
}) => <Title $noMargin={noMargin}>{children}</Title>;

export default PageTitle;

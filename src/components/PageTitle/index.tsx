'use client';

import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme: { mediaQuery, spacing, themeColors } }) => css`
    color: ${themeColors.fg};
    margin-bottom: ${spacing[0]};
    text-align: center;

    ${mediaQuery('lg')(`
      margin-bottom: ${spacing[4]};
    `)}
  `}
`;

const PageTitle = ({ children }: { children: React.ReactNode }) => <Title>{children}</Title>;

export default PageTitle;

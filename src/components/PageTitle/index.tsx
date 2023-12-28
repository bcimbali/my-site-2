'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

type TitleTypes = {
  $hasBackButton?: boolean;
  $noMargin?: boolean;
};

const BackButton = styled(Link)`
  ${({ theme: { mediaQuery, typography } }) => css`
    font-size: ${typography.mobile[0]};
    left: 0;
    position: absolute;
    top: -0.75rem;

    ${mediaQuery('md')(`
      top: -1.125rem;
    `)}

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[0]};
    `)}

    ${mediaQuery('xxl')(`
      top: -1.5rem;
    `)}
  `}
`;

const Title = styled.h1<TitleTypes>`
  ${({ $noMargin, theme: { mediaQuery, spacing } }) => css`
    margin-bottom: ${$noMargin ? 0 : spacing[0]};
    text-align: center;

    ${mediaQuery('lg')(`
      margin-bottom: ${$noMargin ? 0 : spacing[4]};
    `)}
  `}
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const PageTitle = ({
  children,
  noMargin = false,
  backButtonLink,
  backButtonText = 'Back'
}: {
  children: React.ReactNode;
  noMargin?: boolean;
  backButtonLink?: string;
  backButtonText?: string;
}) => (
  <TitleWrapper>
    <Title $noMargin={noMargin} $hasBackButton={!!backButtonLink}>
      {children}
    </Title>
    {!!backButtonLink && <BackButton href={backButtonLink}>{`< ` + backButtonText}</BackButton>}
  </TitleWrapper>
);

export default PageTitle;

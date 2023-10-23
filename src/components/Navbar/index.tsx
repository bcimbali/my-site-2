import styled, { css } from 'styled-components';
import Link from 'next/link';

const Logo = styled.h2``;

const InnerNav = styled.div`
  ${({ theme: { maxWidth } }) => css`
    max-width: ${maxWidth};
    width: 100%;
  `}
`;

const OuterNav = styled.nav`
  ${({ theme: { colors, layout, mq, nav } }) => css`
    align-items: center;
    border-bottom: 1px solid ${colors.white};
    display: flex;
    height: ${nav.mobileNavHeight};
    justify-content: center;
    padding: 0 ${layout.xs.margin};

    ${mq('md')(`
      height: ${nav.desktopNavHeight};
      padding: 0 ${layout.md.margin};
    `)}

    ${mq('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

const Navbar = () => {
  return (
    <OuterNav>
      <InnerNav>
        <StyledLink href="/">
          <Logo>Brett Cimbalik</Logo>
        </StyledLink>
      </InnerNav>
    </OuterNav>
  );
};

export default Navbar;

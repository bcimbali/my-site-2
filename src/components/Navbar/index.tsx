import styled, { css } from 'styled-components';
import Link from 'next/link';

const Logo = styled.h2``;

const OuterNav = styled.nav`
  ${({ theme: { colors, mq, nav } }) => css`
    align-items: center;
    border-bottom: 1px solid ${colors.white};
    display: flex;
    height: ${nav.mobileNavHeight};
    justify-content: space-between;

    ${mq('md')(`
      height: ${nav.desktopNavHeight};
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
      <StyledLink href="/">
        <Logo>Brett Cimbalik</Logo>
      </StyledLink>
    </OuterNav>
  );
};

export default Navbar;

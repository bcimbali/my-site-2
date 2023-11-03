import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from 'src/icons/tsx/hamburger';
import MobileCloseIcon from '@/icons/tsx/mobileXIcon';
import pageData from '@/lib/pageData';
import MobileDropdown from '@/components/MobileDropdown';
import { usePathname } from 'next/navigation';

type DesktopLinkTypes = {
  $isDisabled: boolean;
};

const DesktopLink = styled(Link)<DesktopLinkTypes>`
  ${({ theme: { themeColors }, $isDisabled }) => css`
    color: ${themeColors.headings};
    display: flex;
    gap: 0.25rem;

    ${$isDisabled &&
    css`
      border-bottom: 1px solid ${themeColors.headings};
      pointer-events: none;
    `}
  `}
`;

const DesktopLinkContainer = styled.ul`
  ${({ theme: { mediaQuery } }) => css`
    align-items: center;
    display: none;
    gap: 1.5rem;
    list-style-type: none;
    padding: 0;

    ${mediaQuery('lg')`
      display: flex;
    `}
  `}
`;

const DesktopLinkItem = styled.li`
  display: inline-flex;
  list-style-type: none;
`;

const DesktopLinkNumber = styled.span`
  align-items: flex-end;
  display: inline-flex;
  font-size: 0.5rem;
`;

const DesktopLinkTitle = styled.h4``;

const InnerNav = styled.div`
  ${({ theme: { maxWidth, mediaQuery } }) => css`
    display: flex;
    gap: 1rem;
    max-width: ${maxWidth};
    width: 100%;

    ${mediaQuery('lg')`
      justify-content: space-between;
    `}
  `}
`;

const Logo = styled.h2``;

const MobileNavBttn = styled.button`
  ${({ theme: { mediaQuery } }) => css`
    background: none;
    border: 0;
    max-width: 31px;
    padding: 0;

    &:hover {
      cursor: pointer;
    }

    ${mediaQuery('lg')`
      display: none;
    `}
  `}
`;

const OuterNav = styled.nav`
  ${({ theme: { layout, mediaQuery, nav, themeColors } }) => css`
    align-items: center;
    border-bottom: 1px solid ${themeColors.headings};
    display: flex;
    height: ${nav.mobileNavHeight};
    justify-content: center;
    padding: 0 ${layout.xs.margin};

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      height: ${nav.desktopNavHeight};
    `)}

    ${mediaQuery('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.headings};
  `}
`;

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  // Close menu if page changes:
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  // Disable body scrolling when mobile nav open:
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <OuterNav>
        <InnerNav>
          <MobileNavBttn type="button" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? <MobileCloseIcon /> : <Hamburger />}
          </MobileNavBttn>

          <StyledLink href="/">
            <Logo>Brett Cimbalik</Logo>
          </StyledLink>

          <DesktopLinkContainer>
            {pageData.map(({ name, number, path }) => (
              <DesktopLinkItem key={path}>
                <DesktopLink href={path} $isDisabled={path === pathname}>
                  <DesktopLinkNumber>{number}</DesktopLinkNumber>
                  <DesktopLinkTitle>{name}</DesktopLinkTitle>
                </DesktopLink>
              </DesktopLinkItem>
            ))}
          </DesktopLinkContainer>
        </InnerNav>
      </OuterNav>
      <MobileDropdown isOpen={isMobileNavOpen} />
    </>
  );
};

export default Navbar;

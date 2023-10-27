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
  ${({ theme: { colors }, $isDisabled }) => css`
    color: ${colors.white};
    display: flex;
    gap: 0.25rem;

    ${$isDisabled &&
    css`
      border-bottom: 1px solid ${colors.white};
      pointer-events: none;
    `}
  `}
`;

const DesktopLinkContainer = styled.ul`
  ${({ theme: { mq } }) => css`
    align-items: center;
    display: none;
    gap: 1.5rem;
    list-style-type: none;
    padding: 0;

    ${mq('lg')`
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
  ${({ theme: { maxWidth, mq } }) => css`
    display: flex;
    gap: 1rem;
    max-width: ${maxWidth};
    width: 100%;

    ${mq('lg')`
      justify-content: space-between;
    `}
  `}
`;

const Logo = styled.h2``;

const MobileNavBttn = styled.button`
  background: none;
  border: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  ${({ theme: { mq } }) => css`
    ${mq('lg')`
      display: none;
    `}
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
      padding: 0 ${layout.md.margin};
    `)}

    ${mq('lg')(`
      height: ${nav.desktopNavHeight};
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

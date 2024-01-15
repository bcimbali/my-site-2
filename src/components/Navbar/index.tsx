import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from 'src/icons/tsx/hamburger';
import MobileCloseIcon from '@/icons/tsx/mobileXIcon';
import pageData from '@/data/pageData';
import MobileDropdown from '@/components/MobileDropdown';
import { usePathname } from 'next/navigation';
import { BcLogo } from '@/icons/tsx';
import ThemeSwitcher from '@/components/ThemeSwitcher';

type DesktopLinkTypes = {
  $isDisabled: boolean;
};

const DesktopLink = styled(Link)<DesktopLinkTypes>`
  ${({ theme: { themeColors }, $isDisabled }) => css`
    border-bottom: 1px solid transparent;
    color: ${themeColors.headings};
    display: flex;
    margin-bottom: -1px;
    gap: 0.25rem;

    ${$isDisabled &&
    css`
      border-bottom: 1px solid ${themeColors.headings};
      pointer-events: none;
    `}
  `}
`;

const DesktopLinkContainer = styled.ul`
  ${({ theme: { mediaQuery, typography } }) => css`
    align-items: center;
    display: none;
    gap: ${typography.desktop[0]};
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
  ${({ theme: { typography } }) => css`
    align-items: flex-end;
    display: inline-flex;
    font-size: ${typography.desktop[-1]};
  `}
`;

const DesktopLinkThemeWrapper = styled.div`
  ${({ theme: { mediaQuery, typography } }) => css`
    align-items: center;
    display: none;
    gap: ${typography.desktop[0]};

    ${mediaQuery('lg')(`
      display: flex;
    `)}
  `}
`;

const DesktopLinkTitle = styled.h4``;

const InnerNav = styled.div`
  ${({ theme: { maxWidth, mediaQuery, spacing } }) => css`
    display: flex;
    gap: ${spacing[-1]};
    max-width: ${maxWidth};
    width: 100%;

    ${mediaQuery('lg')`
      justify-content: space-between;
    `}
  `}
`;

const MobileNavBttn = styled.button`
  ${({ theme: { mediaQuery } }) => css`
    align-self: center;
    background: none;
    border: 0;
    max-height: 24px;
    max-width: 24px;
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
  ${({
    theme: {
      components: { nav },
      layout,
      mediaQuery,
      themeColors
    }
  }) => css`
    align-items: center;
    background-color: ${themeColors.navbarBg};
    border-bottom: 1px solid ${themeColors.headings};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
    display: flex;
    height: ${nav.mobileHeight};
    justify-content: center;
    padding: 0 ${layout.xs.margin};
    position: fixed;
    width: 100%;
    z-index: 1;

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      height: ${nav.desktopHeight};
      position: unset;
    `)}

    ${mediaQuery('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme: { mediaQuery, themeColors } }) => css`
    align-items: center;
    color: ${themeColors.headings};
    display: flex;
    svg {
      height: 24px;
    }

    ${mediaQuery('lg')(`
      svg {
        height: 36px;
      }
    `)}
  `}
`;

const VerticalDivider = styled.div`
  ${({ theme: { themeColors, typography } }) => css`
    background: ${themeColors.body};
    height: ${typography.desktop[0]};
    width: 1px;
  `}
`;

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

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
          <MobileNavBttn
            aria-expanded={isMobileNavOpen}
            aria-label="Navigation dropdown toggle button"
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <MobileCloseIcon
                fill={theme.themeColors.headings}
                color={theme.themeColors.headings}
                width="24px"
                height="24px"
              />
            ) : (
              <Hamburger
                width="24px"
                height="24px"
                color={theme.themeColors.headings}
                fill={theme.themeColors.headings}
              />
            )}
          </MobileNavBttn>

          <StyledLink href="/" aria-label="Brett Cimbalik portfolio homepage.">
            <BcLogo color={theme.themeColors.headings} fill={theme.themeColors.headings} />
          </StyledLink>

          <DesktopLinkThemeWrapper>
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
            <VerticalDivider />
            <ThemeSwitcher />
            <VerticalDivider />
          </DesktopLinkThemeWrapper>
        </InnerNav>
        <MobileDropdown isOpen={isMobileNavOpen} />
      </OuterNav>
    </>
  );
};

export default Navbar;

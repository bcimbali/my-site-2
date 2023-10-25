import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import Hamburger from '@/icons/jsx/hamburger';

const DesktopLink = styled(Link)`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
    display: flex;
    gap: 0.25rem;
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <OuterNav>
      <InnerNav>
        <MobileNavBttn type="button" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? (
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="31.5884"
                y1="14.9114"
                x2="0.588409"
                y2="0.911368"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="31.4229"
                y1="0.906183"
                x2="1.42288"
                y2="14.9062"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <Hamburger />
          )}
        </MobileNavBttn>

        <StyledLink href="/">
          <Logo>Brett Cimbalik</Logo>
        </StyledLink>

        <DesktopLinkContainer>
          <DesktopLinkItem>
            <DesktopLink href="/projects">
              <DesktopLinkNumber>01</DesktopLinkNumber>
              <DesktopLinkTitle>Projects</DesktopLinkTitle>
            </DesktopLink>
          </DesktopLinkItem>

          <DesktopLinkItem>
            <DesktopLink href="/about">
              <DesktopLinkNumber>02</DesktopLinkNumber>
              <DesktopLinkTitle>About</DesktopLinkTitle>
            </DesktopLink>
          </DesktopLinkItem>

          <DesktopLinkItem>
            <DesktopLink href="/contact">
              <DesktopLinkNumber>03</DesktopLinkNumber>
              <DesktopLinkTitle>Contact</DesktopLinkTitle>
            </DesktopLink>
          </DesktopLinkItem>
        </DesktopLinkContainer>
      </InnerNav>
    </OuterNav>
  );
};

export default Navbar;

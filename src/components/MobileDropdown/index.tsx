import styled, { css } from 'styled-components';
import Link from 'next/link';
import pageData from '@/lib/pageData';
import { usePathname } from 'next/navigation';

type DropdownContainerTypes = {
  $isOpen: boolean;
};

type MobileLinkTypes = {
  $isDisabled: boolean;
};

const DropdownContainer = styled.div<DropdownContainerTypes>`
  ${({ theme: { layout, mediaQuery, nav, themeColors }, $isOpen }) => css`
    background-color: ${themeColors.mobileDropdownBg};
    height: 100svh;
    max-height: 0;
    overflow: hidden;
    padding: 0 ${layout.xs.margin};
    position: absolute;
    top: ${nav.mobileNavHeight};
    transition: max-height 0.2s;
    width: 100%;
    z-index: 1;

    ${$isOpen &&
    css`
      max-height: 2000px;
    `}

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      display: none;
    `)}
  `}
`;

const LinksContainer = styled.ul`
  ${({ theme: { layout } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style-type: none;
    padding: ${layout.xs.margin} 0;
  `}
`;

const MobileLink = styled(Link)<MobileLinkTypes>`
  ${({ theme: { themeColors }, $isDisabled }) => css`
    color: ${themeColors.mobileDropdownFg};
    display: flex;
    gap: 0.25rem;
    width: 100%;

    ${$isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
  `}
`;

const MobileLinkItem = styled.li`
  ${({ theme: { themeColors } }) => css`
    border-bottom: 1px solid ${themeColors.mobileDropdownFg};
    display: flex;
    list-style-type: none;
  `}
`;

const MobileLinkNumber = styled.span`
  ${({ theme: { typography } }) => css`
    align-items: flex-end;
    display: inline-flex;
    font-size: ${typography.mobile[-1]};
  `}
`;

const MobileLinkTitle = styled.h4`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.mobileDropdownFg};
  `}
`;

const Links = ({ isOpen, pathname }: { isOpen: boolean; pathname: string }) => (
  <LinksContainer>
    {pageData.map(({ name, number, path }) => {
      const isDisabled = path === pathname;
      return (
        <MobileLinkItem key={path}>
          <MobileLink href={path} $isDisabled={isDisabled} tabIndex={isOpen ? 0 : -1}>
            <MobileLinkNumber>{number}</MobileLinkNumber>
            <MobileLinkTitle>{name}</MobileLinkTitle>
          </MobileLink>
        </MobileLinkItem>
      );
    })}
    <MobileLinkItem>
      <MobileLink href="/" tabIndex={isOpen ? 0 : -1}>
        <MobileLinkNumber>04</MobileLinkNumber>
        <MobileLinkTitle>Home</MobileLinkTitle>
      </MobileLink>
    </MobileLinkItem>
    <MobileLinkItem>
      <MobileLink href="/typography" tabIndex={isOpen ? 0 : -1}>
        <MobileLinkNumber>05</MobileLinkNumber>
        <MobileLinkTitle>Typography</MobileLinkTitle>
      </MobileLink>
    </MobileLinkItem>
  </LinksContainer>
);

const MobileDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  return (
    <DropdownContainer $isOpen={isOpen}>
      <Links pathname={pathname} isOpen={isOpen} />
    </DropdownContainer>
  );
};

export default MobileDropdown;

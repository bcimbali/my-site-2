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
  ${({ theme: { colors, layout, mediaQuery, nav }, $isOpen }) => css`
    background-color: ${colors.white};
    height: 100vh;
    max-height: 0;
    overflow: hidden;
    padding: 0 ${layout.xs.margin};
    position: absolute;
    top: ${nav.mobileNavHeight};
    transition: max-height 0.5s;
    width: 100%;

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
  ${({ theme, $isDisabled }) => css`
    color: ${theme.colors.blue};
    display: flex;
    gap: 0.25rem;

    ${$isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
  `}
`;

const MobileLinkItem = styled.li`
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.blue};
    display: flex;
    list-style-type: none;
  `}
`;

const MobileLinkNumber = styled.span`
  align-items: flex-end;
  display: inline-flex;
  font-size: 0.5rem;
`;

const MobileLinkTitle = styled.h4``;

const Links = ({ pathname }: { pathname: string }) => (
  <LinksContainer>
    {pageData.map(({ name, number, path }) => (
      <MobileLinkItem key={path}>
        <MobileLink href={path} $isDisabled={path === pathname}>
          <MobileLinkNumber>{number}</MobileLinkNumber>
          <MobileLinkTitle>{name}</MobileLinkTitle>
        </MobileLink>
      </MobileLinkItem>
    ))}
  </LinksContainer>
);

const MobileDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  return (
    <DropdownContainer $isOpen={isOpen}>
      <Links pathname={pathname} />
    </DropdownContainer>
  );
};

export default MobileDropdown;

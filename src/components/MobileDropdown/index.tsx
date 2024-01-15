import styled, { css } from 'styled-components';
import Link from 'next/link';
import pageData from '@/data/pageData';
import { usePathname } from 'next/navigation';
import { Github, Linkedin } from 'src/icons/tsx';
import ThemeSwitcher from '@/components/ThemeSwitcher';

type DropdownContainerTypes = {
  $isOpen: boolean;
};

type MobileLinkTypes = {
  $isDisabled: boolean;
};

const DropdownContainer = styled.div<DropdownContainerTypes>`
  ${({
    theme: {
      components: { nav },
      layout,
      mediaQuery,
      themeColors
    },
    $isOpen
  }) => css`
    background-color: ${themeColors.mobileDropdownBg};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding: 0 ${layout.xs.margin} 1rem ${layout.xs.margin};
    position: absolute;
    top: ${nav.mobileHeight};
    transition:
      max-height 0.2s,
      opacity 0.2s;
    width: 100%;
    z-index: 1;

    ${$isOpen &&
    css`
      max-height: calc(${`100lvh - ${nav.mobileHeight}`});
      opacity: 1;
    `}

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin} 1rem ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      display: none;
    `)}
  `}
`;

const IconContainer = styled.div`
  ${({ theme: { mediaQuery, typography } }) => css`
    align-self: flex-end;
    display: flex;
    gap: ${typography.mobile[0]};

    ${mediaQuery('lg')(`
      gap: ${typography.desktop[0]};
    `)}
  `}
`;

const IconThemeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const StyledLink = styled(Link)`
  ${({ theme: { themeColors, typography } }) => css`
    svg {
      color: ${themeColors.mobileDropdownFg};
      width: ${typography.mobile[2]};

      path {
        stroke: ${themeColors.mobileDropdownFg};
        fill: ${themeColors.mobileDropdownFg};
      }
    }
  `}
`;

const Links = ({ isOpen, pathname }: { isOpen: boolean; pathname: string }) => (
  <LinksContainer>
    <MobileLinkItem>
      <MobileLink href="/" $isDisabled={'/' === pathname} tabIndex={isOpen ? 0 : -1}>
        <MobileLinkNumber>00</MobileLinkNumber>
        <MobileLinkTitle>Home</MobileLinkTitle>
      </MobileLink>
    </MobileLinkItem>
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
  </LinksContainer>
);

const MobileDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  return (
    <DropdownContainer $isOpen={isOpen}>
      <Links pathname={pathname} isOpen={isOpen} />
      <IconThemeWrapper>
        <ThemeSwitcher />
        <IconContainer>
          <StyledLink
            aria-label="Brett Cimbalik LinkedIn profile"
            href="https://www.linkedin.com/in/brett-cimbalik/"
            target="_blank"
          >
            <Linkedin />
          </StyledLink>
          <StyledLink
            aria-label="Brett Cimbalik Github profile"
            href="https://github.com/bcimbali"
            target="_blank"
          >
            <Github />
          </StyledLink>
        </IconContainer>
      </IconThemeWrapper>
    </DropdownContainer>
  );
};

export default MobileDropdown;

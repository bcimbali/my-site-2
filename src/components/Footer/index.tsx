import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Github, Linkedin } from 'src/icons/tsx';

const FooterContainer = styled.footer`
  ${({
    theme: {
      components: { footer },
      layout,
      mediaQuery,
      themeColors,
      typography
    }
  }) => css`
    align-self: end;
    background-color: ${themeColors.footerBg};
    display: flex;
    gap: ${typography.mobile[-3]};
    height: ${footer.mobileHeight};
    justify-content: center;
    padding: 1rem ${layout.xs.margin};
    width: 100%;

    ${mediaQuery('md')(`
      padding: 0 ${layout.md.margin};
    `)}

    ${mediaQuery('lg')(`
      height: ${footer.desktopHeight};
      gap: ${typography.desktop[-2]};
    `)}

    ${mediaQuery('xxl')(`
      padding: 0 ${layout.xxl.margin};
    `)}
  `}
`;

const FooterText = styled.p`
  ${({ theme: { mediaQuery, themeColors, typography } }) => css`
    color: ${themeColors.fg};
    font-size: ${typography.mobile[-3]};
    text-align: center;

    ${mediaQuery('lg')(`
      font-size: ${typography.desktop[-2]};
    `)}
  `}
`;

const InnerFooter = styled.div`
  ${({ theme: { maxWidth } }) => css`
    align-items: center;
    display: flex;
    max-width: ${maxWidth};
    justify-content: space-between;
    width: 100%;
  `}
`;

const LinksContainer = styled.div`
  ${({ theme: { mediaQuery, typography } }) => css`
    display: flex;
    gap: ${typography.mobile[0]};

    ${mediaQuery('lg')(`
      gap: ${typography.desktop[0]};
    `)}
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme: { colors, mediaQuery, typography } }) => css`
    svg {
      color: ${colors.white};
      width: ${typography.mobile[1]};

      path {
        stroke: ${colors.white};
        fill: ${colors.white};
      }
    }

    ${mediaQuery('lg')(`
    svg {
      width: ${typography.desktop[1]}
    }
    `)}
  `}
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <InnerFooter>
        <FooterText>{`Brett Cimbalik © ${currentYear}`}</FooterText>
        <LinksContainer>
          <StyledLink href="https://www.linkedin.com/in/brett-cimbalik/" target="_blank">
            <Linkedin />
          </StyledLink>
          <StyledLink href="https://github.com/bcimbali" target="_blank">
            <Github />
          </StyledLink>
        </LinksContainer>
      </InnerFooter>
    </FooterContainer>
  );
};

export default Footer;

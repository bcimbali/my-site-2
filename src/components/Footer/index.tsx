import styled, { css, useTheme } from 'styled-components';
import Link from 'next/link';
import { Linkedin } from 'src/icons/tsx';

const FooterContainer = styled.footer`
  ${({
    theme: {
      components: { footer },
      mediaQuery,
      themeColors
    }
  }) => css`
    align-items: center;
    align-self: end;
    background-color: ${themeColors.footerBg};
    display: flex;
    flex-direction: column;
    height: ${footer.mobileHeight};
    justify-content: center;
    padding: 1rem;
    width: 100%;

    ${mediaQuery('lg')(`
      height: ${footer.desktopHeight};
    `)}
  `}
`;

const FooterText = styled.p`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.fg};
    text-align: center;
  `}
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  return (
    <FooterContainer>
      <LinksContainer>
        <Link href="/about">
          <Linkedin color={theme.colors.white} fill={theme.colors.white} width={25} />
        </Link>
      </LinksContainer>
      <FooterText>{`Brett Cimbalik © ${currentYear}`}</FooterText>
    </FooterContainer>
  );
};

export default Footer;

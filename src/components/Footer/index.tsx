import styled, { css } from 'styled-components';

const FooterContainer = styled.footer`
  ${({ theme: { colors, footer, mediaQuery, themeColors } }) => css`
    align-items: center;
    align-self: end;
    background-color: ${colors.blue};
    border-top: 1px solid ${themeColors.fg};
    display: flex;
    flex-direction: column;
    height: ${footer.mobileFooterHeight};
    justify-content: center;
    padding: 1rem;
    width: 100%;

    ${mediaQuery('lg')(`
      height: ${footer.desktopFooterHeight};
    `)}
  `}
`;

const FooterText = styled.p`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.fg};
    text-align: center;
  `}
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>{`Brett Cimbalik © ${currentYear}.`}</FooterText>
      <FooterText>All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

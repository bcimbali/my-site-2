'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm';

const ContentSide = styled.h3`
  width: 100%;
`;

const InnerContainer = styled.div`
  ${({ theme: { mediaQuery, spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[1]};

    ${mediaQuery('lg')(`
      flex-direction: row;
    `)}
  `}
`;

const OuterContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  justify-content: center;
`;

const ContactPage = () => {
  return (
    <OuterContainer>
      <PageTitle>Contact</PageTitle>
      <InnerContainer>
        <ContentSide>Content Side</ContentSide>
        <ContactForm />
      </InnerContainer>
    </OuterContainer>
  );
};

export default ContactPage;

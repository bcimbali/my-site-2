'use client';

import styled, { css } from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';
import ContactForm from '@/components/ContactForm';

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
  ${({ theme: { mediaQuery } }) => css`
    align-self: start;
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;
    justify-content: center;

    ${mediaQuery('md')(`
      grid-column: 2/8;
    `)}

    ${mediaQuery('lg')(`
      grid-column: 3/11;
    `)}

    ${mediaQuery('xl')(`
      grid-column: 4/10;
    `)}
  `}
`;

const ContactPage = () => {
  return (
    <OuterContainer>
      <PageTitle>Contact</PageTitle>
      <InnerContainer>
        <ContactForm />
      </InnerContainer>
    </OuterContainer>
  );
};

export default ContactPage;

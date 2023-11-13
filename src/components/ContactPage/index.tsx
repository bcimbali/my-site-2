'use client';

import styled from 'styled-components';
import React from 'react';
import PageTitle from '@/components/PageTitle';

const StyledDiv = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: center;
`;

const ContactPage = () => {
  return (
    <StyledDiv>
      <PageTitle>Contact</PageTitle>
    </StyledDiv>
  );
};

export default ContactPage;

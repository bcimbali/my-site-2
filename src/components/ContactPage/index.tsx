'use client';

import styled from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  border: 1px dotted red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-size: 8rem;
  color: red;
`;

const ContactPage = () => {
  return (
    <StyledDiv>
      <StyledH1>Contact Page</StyledH1>
    </StyledDiv>
  );
};

export default ContactPage;

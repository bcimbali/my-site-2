'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

type InputTypes = {
  input: {
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
  };
};

const Input = styled.textarea`
  ${({ theme: { colors, mediaQuery, typography } }) => css`
    background: ${colors.blue};
    border: 1px solid ${colors.white};
    border-radius: 4px;
    color: ${colors.white};
    padding: ${typography.mobile[-3]};

    ${mediaQuery('lg')(`
      padding: ${typography.desktop[-3]};
    `)}
  `}
`;

const TextAreaInput = ({ input }: InputTypes) => {
  console.log('In index.tsx, this is input: ', input);
  return <Input {...input} />;
};

export default TextAreaInput;

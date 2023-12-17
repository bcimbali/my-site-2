'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { ChangeHandler, FieldErrors, RefCallBack } from 'react-hook-form';
import { FormValues } from '@/components/ContactForm';
import { ErrorMessage } from '@hookform/error-message';

type InputTypes = {
  errors?: FieldErrors<FormValues>;
  input: {
    name: keyof FormValues;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
  };
  label?: string;
};

const ErrorComponent = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.warning};
  `}
`;

const Input = styled.input.attrs({ type: 'text' })`
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

const InputWrapper = styled.div`
  display: grid;
`;

const Label = styled.label`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`;

const TextInput = ({ errors, input, label }: InputTypes) => {
  console.log('In index.tsx, this is input: ', input);
  return (
    <InputWrapper>
      <Label htmlFor={input?.name}>{label}</Label>
      <Input {...input} />
      {errors && <ErrorMessage name={input.name} errors={errors} as={ErrorComponent} />}
    </InputWrapper>
  );
};

export default TextInput;

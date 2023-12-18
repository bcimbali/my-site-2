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

type InputComponentTypes = {
  $hasErrors?: boolean;
};

const ErrorComponent = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.warning};
  `}
`;

const Input = styled.input.attrs({ type: 'text' })<InputComponentTypes>`
  ${({ $hasErrors, theme: { colors, mediaQuery, themeColors, typography } }) => css`
    background: ${colors.blue};
    border: 1px solid ${colors.white};
    border-radius: 0.5rem;
    color: ${colors.white};
    padding: ${typography.mobile[-3]};

    ${$hasErrors &&
    css`
      border-color: ${themeColors?.danger};
    `}

    ${mediaQuery('lg')(`
      padding: ${typography.desktop[-3]};
    `)}
  `}
`;

const LabelWrapper = styled.label`
  display: grid;
`;

const LabelText = styled.span`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`;

const TextInput = ({ errors, input, label }: InputTypes) => {
  const hasErrors = !!errors?.[`${input?.name}`];
  return (
    <LabelWrapper>
      <LabelText>{label}</LabelText>
      <Input {...input} $hasErrors={hasErrors} />
      {errors && <ErrorMessage name={input.name} errors={errors} as={ErrorComponent} />}
    </LabelWrapper>
  );
};

export default TextInput;

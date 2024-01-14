'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { ChangeHandler, FieldErrors, RefCallBack } from 'react-hook-form';
import { FormValues } from '@/components/ContactForm';
import { ErrorMessage } from '@hookform/error-message';

type InputTypes = {
  disabled?: boolean;
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

type LabelWrapperTypes = {
  $disabled?: boolean;
};

const ErrorComponent = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.warning};
  `}
`;

const Input = styled.input.attrs({ type: 'text' })<InputComponentTypes>`
  ${({ $hasErrors, theme: { colors, mediaQuery, themeColors, typography } }) => css`
    background: ${colors.blue};
    border: 1px solid ${themeColors.body};
    border-radius: 0.5rem;
    color: ${themeColors.body};
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

const LabelWrapper = styled.label<LabelWrapperTypes>`
  display: grid;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;

      :hover {
        cursor: not-allowed;
      }
    `}
`;

const LabelText = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.body};
  `}
`;

const TextInput = ({ disabled, errors, input, label }: InputTypes) => {
  const hasErrors = !!errors?.[`${input?.name}`];
  return (
    <LabelWrapper $disabled={disabled}>
      <LabelText>{label}</LabelText>
      <Input {...input} $hasErrors={hasErrors} disabled={disabled} />
      {errors && <ErrorMessage name={input.name} errors={errors} as={ErrorComponent} />}
    </LabelWrapper>
  );
};

export default TextInput;

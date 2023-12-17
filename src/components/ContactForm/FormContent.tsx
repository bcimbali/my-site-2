'use client';

import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { useFormStatus } from 'react-dom';
import { ErrorMessage } from '@hookform/error-message';

export interface FormValues {
  subject: string;
  email: string;
  message: string;
}

const ErrorComponent = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.warning};
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

const LoadingText = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`;

const FormContent = ({
  register,
  isValid,
  errors
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <InputWrapper>
        <Label htmlFor="subject">Subject</Label>
        <input {...register('subject', { required: true })} />
        <ErrorMessage name="subject" errors={errors} as={ErrorComponent} />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <input {...register('email', { required: true })} />
        <ErrorMessage name="email" errors={errors} as={ErrorComponent} />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="message">Message</Label>
        <textarea {...register('message', { required: true })} />
        <ErrorMessage name="message" errors={errors} as={ErrorComponent} />
      </InputWrapper>

      <input type="submit" disabled={pending || !isValid} />
      {pending && <LoadingText>Loading...</LoadingText>}
    </>
  );
};

export default FormContent;

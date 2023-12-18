'use client';

import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useFormStatus } from 'react-dom';
import TextInput from '@/fields/TextInput';
import TextAreaInput from '@/fields/TextArea';
import Button from '@/components/Button';

export interface FormValues {
  subject: string;
  email: string;
  message: string;
}

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
      <TextInput
        input={{ ...register('subject', { required: true }) }}
        errors={errors}
        label="Subject *"
      />

      <TextInput
        input={{ ...register('email', { required: true }) }}
        errors={errors}
        label="Email *"
      />

      <TextAreaInput
        input={{ ...register('message', { required: true }) }}
        errors={errors}
        label="Message *"
      />

      <Button
        type="submit"
        label={pending ? 'Loading...' : 'Submit'}
        disabled={pending || !isValid}
      />
    </>
  );
};

export default FormContent;

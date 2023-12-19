import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useForm, FieldPath } from 'react-hook-form';
import contactFormSubmit, { State } from '@/server_actions/contactFormSubmit';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import FormContent from './FormContent';
import { formSchema } from './validation';

export interface FormValues {
  subject: string;
  email: string;
  message: string;
}

export const contactFormSchema = z.object({
  subject: z.string().min(1, { message: 'Must enter a subject' }),
  email: z.string().email(),
  message: z.string().min(1, { message: 'Must enter a message' })
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;

const Form = styled.form`
  ${({ theme: { spacing } }) => css`
    display: grid;
    gap: ${spacing[0]};
  `}
`;

const OuterContainer = styled.div`
  width: 100%;
`;

const StateText = styled.h4`
  text-align: center;
`;

const SuccessText = styled.h3`
  text-align: center;
`;

const ContactForm = () => {
  const {
    register,
    formState: { errors, isValid },
    setError
  } = useForm<ContactFormFields>({ mode: 'all', resolver: zodResolver(formSchema) });
  const [state, formAction] = useFormState<State, FormData>(contactFormSubmit, null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (!state) {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message
        });
      });
    }
    if (state.status === 'success') {
      setIsSubmitSuccessful(true);
    }
  }, [state, setError]);

  return (
    <OuterContainer>
      {isSubmitSuccessful ? (
        <SuccessText>Thank you for reaching out!</SuccessText>
      ) : (
        <Form action={formAction}>
          <FormContent register={register} isValid={isValid} errors={errors} />
          <StateText>{state?.message}</StateText>
        </Form>
      )}
    </OuterContainer>
  );
};

export default ContactForm;

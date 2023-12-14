import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import contactFormSubmit from '@/lib/contactFormSubmit';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const contactFormSchema = z.object({
  subject: z.string().min(1, { message: 'Must enter a subject' }),
  email: z.string().email(),
  message: z.string().min(1, { message: 'Must enter a message' })
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;

const Error = styled.span`
  ${({ theme: { themeColors } }) => css`
    color: ${themeColors.warning};
  `}
`;

const Form = styled.form`
  ${({ theme: { spacing } }) => css`
    display: grid;
    gap: ${spacing[0]};
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

const OuterContainer = styled.div`
  width: 100%;
`;

const SuccessText = styled.h3`
  text-align: center;
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm<ContactFormFields>({ resolver: zodResolver(contactFormSchema) });

  const myFormSubmit = async (data: ContactFormFields) => {
    await contactFormSubmit(data);
  };

  return (
    <OuterContainer>
      {isSubmitSuccessful ? (
        <SuccessText>Thanks for reaching out!</SuccessText>
      ) : (
        <Form onSubmit={handleSubmit((data) => myFormSubmit(data))}>
          <InputWrapper>
            <Label htmlFor="subject">Subject</Label>
            <input {...register('subject', { required: true })} />
            {errors.subject && <Error>{errors?.subject?.message}</Error>}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <input {...register('email', { required: true })} />
            {errors.email && <Error>{errors?.email?.message}</Error>}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="message">Message</Label>
            <textarea {...register('message', { required: true })} />
            {errors.message && <Error>{errors?.message?.message}</Error>}
          </InputWrapper>

          <input type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </OuterContainer>
  );
};

export default ContactForm;

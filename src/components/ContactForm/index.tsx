import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  subject: string;
  email: string;
  message: string;
};

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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <OuterContainer>
      <h3>Contact Form</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor="subject">Subject</Label>
          <input defaultValue="" {...register('subject')} />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <input defaultValue="" {...register('email', { required: true })} />
          {errors.email && <Error>This field is required</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="message">Message</Label>
          <input defaultValue="" {...register('message', { required: true })} />
          {errors.message && <Error>This field is required</Error>}
        </InputWrapper>

        <input type="submit" />
      </Form>
    </OuterContainer>
  );
};

export default ContactForm;

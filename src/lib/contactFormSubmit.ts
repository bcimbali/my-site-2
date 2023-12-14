'use server';

import { SubmitHandler } from 'react-hook-form';
import { ContactFormFields } from '@/components/ContactForm';

const contactFormSubmit: SubmitHandler<ContactFormFields> = (data) => {
  console.log('in onSubmit, data is: ', data);
};

export default contactFormSubmit;

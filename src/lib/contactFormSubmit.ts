'use server';

import { SubmitHandler } from 'react-hook-form';
import { ContactFormFields } from '@/components/ContactForm';

const contactFormSubmit: SubmitHandler<ContactFormFields> = async (data) => {
  console.log('in onSubmit, data is: ', data);

  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default contactFormSubmit;

'use server';

import { SubmitHandler } from 'react-hook-form';

type Inputs = {
  subject: string;
  email: string;
  message: string;
};

const contactFormSubmit: SubmitHandler<Inputs> = (data) => {
  console.log('in onSubmit, data is: ', data);
};

export default contactFormSubmit;

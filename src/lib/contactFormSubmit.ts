'use server';

import { formSchema } from '@/components/ContactForm/validation';
import { ZodError } from 'zod';

export type State =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

const contactFormSubmit = async (prevState: State | null, data: FormData): Promise<State> => {
  console.log('in onSubmit, data is: ', data);

  try {
    // Artificial delay; remove this:
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validate our data
    const { subject, email } = formSchema.parse(data);

    return {
      status: 'success',
      message: `Welcome, ${subject} ${email ? email : ''}!`
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `Server validation: ${issue.message}`
        }))
      };
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.'
    };
  }

  // await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
};

export default contactFormSubmit;

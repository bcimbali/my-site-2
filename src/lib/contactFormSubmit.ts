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
  console.log('In contactFormSubmit, data is: ', data);

  // Outer try catch only works for errors
  // thrown by the fetch function itself:
  try {
    // Validate our form data server-side:
    await formSchema.safeParseAsync(data).then((res) => {
      if (!res?.success) {
        throw res?.error;
      }
    });

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((res) => res);

    // Handle server-side fetch errors:
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      status: 'success',
      message: `Thanks for reaching out!`
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response:
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
};

export default contactFormSubmit;

'use server';

import { formSchema } from '@/components/ContactForm/validation';
import { ZodError } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  console.log('In contactFormSubmit.ts, this is data: ', data);
  // Outer try catch only works for errors
  // thrown by the fetch function itself:
  try {
    // Validate our form data server-side:
    await formSchema.safeParseAsync(data).then((res) => {
      if (!res?.success) {
        throw res?.error;
      }
    });

    const formSubject = data?.get('subject')?.toString() || '';
    const formMessage = data?.get('message')?.toString() || '';
    const formEmail = data?.get('email')?.toString() || '';

    // Send email via Resend:
    const { error: resendError } = await resend.emails.send({
      from: `${process.env.CONTACT_FORM_EMAIL_FROM}`,
      to: `${process.env.CONTACT_FORM_EMAIL_TO}`,
      subject: `${formSubject}`,
      text: '',
      react: ContactFormEmail({ formEmail, formMessage })
    });

    // Handle server-side errors:
    if (resendError) {
      throw new Error(`Error sending email thru Resend.`);
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

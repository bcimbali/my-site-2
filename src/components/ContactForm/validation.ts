import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const formSchema = zfd.formData({
  subject: zfd.text(z.string().min(1, 'Must enter a subject')),
  email: zfd.text(z.string().email()),
  message: zfd.text(z.string().min(1, 'Must enter a message'))
});

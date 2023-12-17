import * as React from 'react';

interface ContactFormEmailProps {
  formEmail: string;
  formMessage: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  formEmail,
  formMessage
}) => (
  <div>
    <h2>From:</h2>
    <p>{formEmail}</p>
    <h2>Message:</h2>
    <p>{formMessage}</p>
  </div>
);

export default ContactFormEmail;

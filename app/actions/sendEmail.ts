'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '../lib/utils';
import ContactForm from '../emails/EmailContact';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Formularz kontaktowy <onboarding@resend.dev>',
      to: 'kamil.korczak7215@gmail.com',
      subject: 'Wiadomość z formularza kontaktowego',
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactForm, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

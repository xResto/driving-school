'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '../lib/utils';
import ContactForm from '../emails/EmailContactForm';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const phoneNumber = formData.get('phoneNumber');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(firstName, 500)) {
    return {
      error: 'Invalid first name',
    };
  }
  if (!validateString(lastName, 500)) {
    return {
      error: 'Invalid last name',
    };
  }
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
      react: React.createElement(ContactForm, {
        firstName: firstName as string,
        lastName: lastName as string,
        phoneNumber: phoneNumber as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

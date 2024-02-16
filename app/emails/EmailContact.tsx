import React from 'react';
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Heading,
  Head,
  Section,
} from '@react-email/components';

type ContactFormProps = {
  message: string;
  senderEmail: string;
};

const ContactForm = ({ message, senderEmail }: ContactFormProps) => {
  return (
    <Html>
      <Head>
        <Tailwind>
          <Body className='bg-white font-sans'>
            <Container className='p-8 rounded-lg shadow-lg'>
              <Section>
                <Heading>
                  Otrzymałeś nową wiadomość z formularza kontaktowego
                </Heading>
                <Text>Wiadomość od: {senderEmail}</Text>
                <Text>Treść wiadomości: {message}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
};

export default ContactForm;

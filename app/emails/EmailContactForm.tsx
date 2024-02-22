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

type EmailContactFormProps = {
  firstName: string;
  lastName?: string;
  phoneNumber: string;
  senderEmail?: string;
  message: string;
};

const EmailContactForm = ({
  firstName,
  lastName,
  phoneNumber,
  senderEmail,
  message,
}: EmailContactFormProps) => {
  return (
    <Html>
      <Head>
        <Tailwind>
          <Body className='bg-white font-sans'>
            <Container className='p-8 rounded-lg shadow-lg'>
              <Section>
                <Heading className='text-black'>
                  Otrzymano nową wiadomość z formularza kontaktowego
                </Heading>
                <Text>
                  Wiadomość od: {`${firstName} ${lastName}`}
                </Text>
                <Text>Numer telefonu: {phoneNumber}</Text>
                {senderEmail && <Text>Email: {senderEmail}</Text>}
                <Text>Treść wiadomości: {message}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
};

export default EmailContactForm;


import React from 'react';
import Image from 'next/image';
import EnvelopeIcon from '../../public/envelope-icon.svg';
import PhoneIcon from '../../public/phone-icon.svg';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import ContactForm from './ContactForm';
import { anton } from '../fonts';

const page = () => {
  return (
    <div className='max-w-[1500px] mx-auto lg:px-0 md:px-20 sm:px-10 px-6'>
      <DivOpacityAnimation>
        <div className='lg:w-1/2 w-full flex flex-col items-center justify-center mx-auto gap-1 text-center text-lg'>
          <div className='w-full flex justify-center mb-6'>
            <div className='w-full flex gap-10 p-8 justify-center text-center border-b-2 border-[#191919] font-medium'>
              <a
                href='tel:607551092'
                className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-3'
                    src={PhoneIcon}
                    alt='Ikonka telefonu'
                  />
                  <span>607 551 092</span>
                </div>
              </a>
              <a
                href='tel:503553130'
                className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-3'
                    src={PhoneIcon}
                    alt='Ikonka telefonu'
                  />
                  <span>503 553 130</span>
                </div>
              </a>
              <a
                href='mailto:wojteksc@op.pl'
                className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-6'
                    src={EnvelopeIcon}
                    alt='Ikonka koperty'
                  />
                  <span>wojteksc@op.pl</span>
                </div>
              </a>
            </div>
          </div>
          <h1 className={`${anton.className} text-4xl font-bold mb-2`}>Skontaktuj się z nami!</h1>
          <p>
            Napisz do nas wiadomość poprzez formularz kontaktowy lub na adres
            e-mail.
          </p>
          <p>
            Skontaktujemy się z Tobą tak szybko, jak to możliwe i zapiszemy na
            wybrany kurs.
          </p>
        </div>
      </DivOpacityAnimation>
      <ContactForm />
      <DivOpacityAnimation>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.6851768829138!2d21.688003077192036!3d50.57721697161662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d4a101a7375cd%3A0x3b9f3e1d25e4da15!2zT8Wbcm9kZWsgU3prb2xlbmlhIEtpZXJvd2PDs3cgIldPSlRFSyIgc3DDs8WCa2EgY3l3aWxuYQ!5e0!3m2!1spl!2spl!4v1708268217053!5m2!1spl!2spl'
          className='mx-auto w-1/2 rounded-lg my-16'
          height='450'
          loading='lazy'
        ></iframe>
      </DivOpacityAnimation>
    </div>
  );
};

export default page;

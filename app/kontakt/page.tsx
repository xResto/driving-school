'use client';
import React from 'react';
import { sendEmail } from '../actions/sendEmail';
import { anton } from '../fonts';
import Image from 'next/image';
import EnvelopeIcon from '../../public/envelope-icon.svg';
import PhoneIcon from '../../public/phone-icon.svg';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';

const requiredStar = <span className='text-[#CE2029]'>*</span>;

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
                    className='w-[.625rem]'
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
                    className='w-[.625rem]'
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
          <h1 className='text-4xl font-bold mb-2'>Skontaktuj się z nami!</h1>
          <p>
            Napisz do nas wiadomość poprzez formularz kontaktowy lub na adres
            email.
          </p>
          <p>
            Skontaktujemy się z Tobą tak szybko jak to możliwe i zapiszemy na
            wybrany kurs.
          </p>
        </div>
      </DivOpacityAnimation>
      <DivYAnimation delay={.75}>
        <form
          className='mt-10 flex flex-col gap-5 items-center'
          action={async (formData) => {
            await sendEmail(formData);
          }}
        >
          <div className='lg:w-1/2 w-full flex max-[] justify-between gap-5'>
            <div className='lg:w-1/2 w-full'>
              <label htmlFor='firstName'>Imię {requiredStar}</label>
              <input
                className='h-14 mt-2 px-4 w-full rounded-lg border border-black/10'
                type='text'
                name='firstName'
                id='firstName'
                required
              />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label htmlFor='lastName'>Nazwisko</label>
              <input
                className='h-14 mt-2 px-4 w-full rounded-lg border border-black/10'
                type='text'
                name='lastName'
                id='lastName'
              />
            </div>
          </div>
          <div className='lg:w-1/2 w-full flex justify-between gap-5'>
            <div className='lg:w-1/2 w-full'>
              <label htmlFor='phoneNumber'>Numer telefonu {requiredStar}</label>
              <input
                className='h-14 mt-2 px-4 w-full rounded-lg border border-black/10'
                name='phoneNumber'
                id='phoneNumber'
                type='tel'
                required
              />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label htmlFor='senderEmail'>Email</label>
              <input
                className='h-14 mt-2 px-4 w-full rounded-lg border border-black/10'
                name='senderEmail'
                id='senderEmail'
                type='email'
                maxLength={500}
              />
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <label htmlFor='mesasge'>Wiadomość {requiredStar}</label>
            <textarea
              className='h-52 mt-2 p-4 w-full rounded-lg border border-black/10'
              name='message'
              id='message'
              required
              maxLength={500}
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button
            type='submit'
            className={`${anton.className} h-[3rem] w-[8rem] text-xl bg-[#CE2029] text-white rounded-full outline-none cursor-pointer focus:bg-[#990f0f] hover:bg-[#990f0f] transform transition-all focus:scale-110 hover:scale-110 active:scale-105`}
          >
            Wyślij
          </button>
        </form>
      </DivYAnimation>
    </div>
  );
};

export default page;

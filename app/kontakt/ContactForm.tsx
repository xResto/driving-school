import React from 'react';
import { anton } from '../fonts';
import { sendEmail } from '../actions/sendEmail';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';

const requiredStar = <span className='text-[#CE2029]'>*</span>;

const ContactForm = () => {
  return (
    <DivYAnimation delay={0.75}>
      <form
        className='mt-10 flex flex-col gap-5 items-center'
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <div className='lg:w-1/2 w-full flex flex-col sm:flex-row justify-between gap-5'>
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
        <div className='lg:w-1/2 w-full flex flex-col sm:flex-row justify-between gap-5'>
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
            <label htmlFor='senderEmail'>E-mail</label>
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
  );
};

export default ContactForm;

'use client';
import React from 'react';
import { sendEmail } from '../actions/sendEmail';
import { anton } from '../fonts';

const page = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <form
        className='mt-10 flex flex-col gap-5 items-center'
          action={async (formData) => {
            await sendEmail(formData);
          }}
      >
        <div className='w-1/3'>
          <label htmlFor='senderEmail'>Email</label>
          <input
            className='h-14 mt-2 px-4 w-full rounded-lg border border-black/10'
            name='senderEmail'
            id='senderEmail'
            type='email'
            required
            maxLength={500}
          />
        </div>
        <div className='w-1/3'>
          <label htmlFor='mesasge'>Wiadomość</label>
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
    </div>
  );
};

export default page;

import React from 'react';
import { anton } from '../fonts';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={`${anton.className} flex justify-center items-center h-[3rem] w-[8rem] text-xl bg-[#CE2029] text-white rounded-full outline-none cursor-pointer focus:bg-[#990f0f] hover:bg-[#990f0f] transform transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-[#CE2029] disabled:bg-opacity-65`}
    >
      {pending ? (
        <div className='size-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        'Wyślij'
      )}
    </button>
  );
};

export default SubmitBtn;

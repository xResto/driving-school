import React from 'react';
import { anton } from '../../fonts';

const ButtonRed = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={`${anton.className} px-7 py-3 rounded-full text-xl border border-[#CE2029] cursor-pointer bg-[#CE2029] text-white focus:bg-transparent hover:bg-transparent focus:text-black hover:text-black transform duration-300`}
    >
      {children}
    </button>
  );
};

export default ButtonRed;

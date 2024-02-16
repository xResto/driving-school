import React from 'react';
import { anton } from '../../fonts';

const ButtonWhite = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={`${anton.className} px-7 py-3 rounded-full text-xl border border-[#CE2029] cursor-pointer bg-white focus:bg-[#CE2029] hover:bg-[#CE2029] transform duration-300`}>
      {children}
    </button>
  );
};

export default ButtonWhite;

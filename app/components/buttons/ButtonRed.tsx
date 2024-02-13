import React from 'react';
import { anton } from '../../fonts';

const ButtonRed = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${anton.className} px-7 py-3 rounded-3xl text-xl border border-[#CE2029] cursor-pointer bg-[#CE2029] text-white hover:bg-transparent hover:text-black transform duration-300`}>
      {children}
    </div>
  );
};

export default ButtonRed;

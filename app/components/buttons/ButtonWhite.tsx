import React from 'react';
import { anton } from '../../fonts';

const ButtonWhite = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${anton.className} px-7 py-3 rounded-3xl text-xl border border-[#CE2029] cursor-pointer bg-white hover:bg-[#CE2029] transform duration-300`}>
      {children}
    </div>
  );
};

export default ButtonWhite;

import React from 'react';
import { anton } from '../../fonts';

interface ButtonRedProps {
  textStyles?: string;
  children: React.ReactNode;
}

const ButtonRed = ({ textStyles = 'text-xl', children }: ButtonRedProps) => {
  return (
    <button
      className={`${anton.className} ${textStyles} px-7 py-3 rounded-full border border-[#CE2029] cursor-pointer bg-[#CE2029] text-white focus:bg-transparent hover:bg-transparent focus:text-black hover:text-black transform duration-300`}
    >
      {children}
    </button>
  );
};

export default ButtonRed;

import React from 'react';
import { anton } from '@/app/fonts';

const AboutUsCard = ({ header, text }: { header: string; text: string }) => {
  return (
    <div className='py-8 xl:px-5 lg:px-3 px-5 text-center border border-black rounded-2xl bg-[#f5f5f5] about-us-card-shadow flex flex-col gap-4'>
      <h4 className={`font-bold text-2xl`}>{header}</h4>
      <p className='text-lg'>{text}</p>
    </div>
  );
};

export default AboutUsCard;

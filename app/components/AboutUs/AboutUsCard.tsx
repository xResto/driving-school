import React from 'react';

const AboutUsCard = ({ header, text }: { header: string; text: string }) => {
  return (
    <div className='w-72 p-6 text-center border border-black rounded-2xl bg-[#f5f5f5] about-us-card-shadow'>
      <h4 className='font-bold text-2xl pb-2'>{header}</h4>
      <p>{text}</p>
    </div>
  );
};

export default AboutUsCard;

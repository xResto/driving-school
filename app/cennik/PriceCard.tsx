import React from 'react';

interface PriceCardProps {
  heading: string;
  price: string;
  color: string;
  additionalP?: boolean;
  content?: string[];
}

const PriceCard = ({
  heading,
  price,
  color,
  additionalP = false,
  content,
}: PriceCardProps) => {
  return (
    <div className='border border-[#191919] rounded-2xl w-[30rem]'>
      <div
        className={`flex justify-center items-center gap-5 px-5 h-40 ${color} rounded-t-2xl text-white`}
      >
        <div className='w-[16rem]'>
          <h3 className='py-3 text-3xl font-semibold'>{heading}</h3>
          {additionalP && <p>Ukończ jazdy w 2 tygodnie!</p>}
        </div>
        <h2 className='text-4xl font-bold'>{price}</h2>
      </div>
      <div className='flex flex-col gap-2 p-10 text-lg'>
        {content && content.map((item, index) => <p key={index}>- {item}</p>)}
      </div>
    </div>
  );
};

export default PriceCard;

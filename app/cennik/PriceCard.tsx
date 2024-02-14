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
    <div className='border border-[#191919] rounded-2xl max-w-[30rem]'>
      <div
        className={`flex justify-between items-center gap-2 px-5 sm:px-10 sm:gap-5 h-32 sm:h-40 ${color} rounded-t-2xl text-white`}
      >
        <div className='max-w-[16rem]'>
          <h2 className='py-3 text-2xl sm:text-3xl font-semibold'>{heading}</h2>
          {additionalP && <p className='text-sm sm:text-base'>Ukończ jazdy w 2 tygodnie!</p>}
        </div>
        <h3 className='text-2xl sm:text-3xl font-bold'>{price}</h3>
      </div>
      <div className='flex flex-col gap-2 p-5 sm:p-10 text-base sm:text-lg'>
        {content && content.map((item, index) => <p key={index}>- {item}</p>)}
      </div>
    </div>
  );
};

export default PriceCard;

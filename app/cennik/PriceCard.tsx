import React from 'react';

interface PriceCardProps {
  heading: string;
  price: string;
  color: string;
  additionalPText?: string;
  content?: string[];
  priceWidth?: string;
}

const PriceCard = ({
  heading,
  price,
  color,
  additionalPText,
  content,
  priceWidth = ''
}: PriceCardProps) => {
  return (
    <div className='border border-[#191919] rounded-2xl min-[528px]:max-w-[30rem] w-full'>
      <div
        className={`flex justify-between items-center gap-2 min-[375px]:px-5 px-3 sm:px-10 sm:gap-5 h-32 sm:h-40 ${color} rounded-t-2xl text-white`}
      >
        <div className='max-w-[16rem]'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>{heading}</h2>
          {additionalPText && <p className='pt-2 text-sm sm:text-base'>{additionalPText}</p>}
        </div>
        <h3 className={`text-2xl sm:text-3xl font-bold text-center ${priceWidth} ${additionalPText ? 'pt-2': ''}`}>{price}</h3>
      </div>
      <div className='flex flex-col gap-2 p-5 sm:p-10 text-base sm:text-lg'>
        {content && content.map((item, index) => <p key={index}>- {item}</p>)}
      </div>
    </div>
  );
};

export default PriceCard;

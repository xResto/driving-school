import React from 'react';
import PriceCard from './PriceCard';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';

const lectures = [
  '30 godzin wykładów teoretycznych, prowadzonych stacjonarnie',
  'materiały dydaktyczne w cenie',
];

const additionalPractice = [
  'Praesent et turpis nec libero efficitur sollicitudin',
  'Maecenas maximus ipsum quis convallis semper',
];

const AdditionalCardsWrapper = () => {
  return (
    <div className='flex justify-center max-[1100px]:flex-col max-[1100px]:items-center mx-auto gap-10 pb-20 min-[426px]:px-6 px-4 sm:px-0'>
      <DivYAnimation>
        <PriceCard
          heading='Wykłady - Kat. B'
          price='300 zł'
          color='bg-[#313131]'
          content={lectures}
          priceWidth='max-[360px]:w-10'
        />
      </DivYAnimation>
      <DivYAnimation>
        <PriceCard
          heading='Jazdy uzupełniające'
          price='100 zł/h'
          color='bg-[#313131]'
          content={additionalPractice}
          additionalPText='80 zł/h dla naszych kursantów!'
          priceWidth='max-[424px]:w-10'
        />
      </DivYAnimation>
    </div>
  );
};

export default AdditionalCardsWrapper;

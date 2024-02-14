import React from 'react';
import PriceCard from './PriceCard';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';

const lectures = [
  '30 godzin wykładów teoretycznych stacjonarnie',
  'materiały dydaktyczne w cenie',
];

const additionalPractice = [
  'Praesent et turpis nec libero efficitur sollicitudin',
  'Maecenas maximus ipsum quis convallis semper',
];

const AdditionalCardsWrapper = () => {
  return (
    <DivYAnimation>
      <div className='flex mx-auto justify-center gap-10 pb-20'>
        <PriceCard
          heading='Wykłady - Kat. B'
          price='300 zł'
          color='bg-[#191919]'
          content={lectures}
        />
        <PriceCard
          heading='Jazdy uzupełniające'
          price='100 zł/h'
          color='bg-[#191919]'
          content={additionalPractice}
        />
      </div>
    </DivYAnimation>
  );
};

export default AdditionalCardsWrapper;

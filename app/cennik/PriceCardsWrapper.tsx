import React from 'react';
import PriceCard from './PriceCard';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';

const basicCourse = [
  'Phasellus pulvinar nisi vitae felis laoreet sagittis',
  'Morbi vitae arcu feugiat, auctor orci a, suscipit',
  'Phasellus ac purus nec nibh placerat elementum a sed mauris.',
];

const expressCourse = [
  'jazdy 7 dni w tygodniu',
  'pierwszeństwo przy ustalaniu jazd',
  'dodatkowa godzina jazdy przed egzaminem na placu WORD w cenie kursu',
];

const PriceCardsWrapper = () => {
  return (
    <div className='-my-20 flex justify-center max-[1100px]:flex-col max-[1100px]:items-center mx-auto gap-10 min-[426px]:px-6 px-4 sm:px-0'>
      <DivYAnimation delay={0.5}>
        <PriceCard
          heading='Kategoria B'
          price='2400 zł'
          color='bg-[#CE2029]'
          content={basicCourse}
        />
      </DivYAnimation>
      <DivYAnimation delay={0.5}>
        <PriceCard
          heading='Kat. B - kurs przyśpieszony'
          price='3000 zł'
          color='bg-[#990f0f]'
          additionalPText='Ukończ jazdy w 2 tygodnie!'
          content={expressCourse}
        />
      </DivYAnimation>
    </div>
  );
};

export default PriceCardsWrapper;

import React from 'react';
import AboutUsCard from './AboutUsCard';
import ScaleFromMiddleAnimation from '../animations/ScaleFromMiddleAnimation';
import { anton } from '@/app/fonts';

const header1 = 'Kompetencje';
const header2 = 'Indywidualne podejście';
const header3 = 'Wysoka zdawalność';
const header4 = 'Cierpliwość';

const text1 =
  'Mamy wieloletnie doświadczenie i głęboką wiedzę, którą przekazujemy w sposób prosty i zrozumiały podczas kursów.';
const text2 =
  'Nie ma dwóch identycznych uczniów, dostosujemy się do Twojego tempa nauki.';
const text3 =
  'Nie musisz się obawiać, czy zdasz egzamin - nasza szkoła jest znana z wysokiej zdawalności, więc mamy pewność, że i Tobie się uda!';
const text4 =
  'Uczymy cierpliwie i bez pośpiechu, aż poczujesz się pewnie za kierownicą.';

const AboutUs = () => {
  return (
    <div className='lg:pb-44 pb-20 max-lg:pt-44 bg-[#fffcfc]'>
      <div className='bg-[#fffcfc] py-20 relative'>
        <div className='max-w-[1400px] mx-auto relative z-10'>
          <h3
            className={`${anton.className} lg:pb-20 pb-10 text-center sm:text-5xl text-4xl`}
          >
            Co nas wyróżnia
          </h3>
          <ScaleFromMiddleAnimation>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center xl:gap-8 gap-5 px-8'>
              <AboutUsCard header={header1} text={text1} />
              <AboutUsCard header={header2} text={text2} />
              <AboutUsCard header={header3} text={text3} />
              <AboutUsCard header={header4} text={text4} />
            </div>
          </ScaleFromMiddleAnimation>
        </div>
        <div className='max-lg:hidden absolute inset-0 xl:w-[1150px] w-[900px] mx-auto bg-white border border-black rounded-2xl'></div>
      </div>
    </div>
  );
};

export default AboutUs;

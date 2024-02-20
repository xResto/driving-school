import React from 'react';
import PriceCardsWrapper from './PriceCardsWrapper';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import AdditionalCardsWrapper from './AdditionalCardsWrapper';
import CourseElements from './CourseElements';
import { anton } from '../fonts';

const Cennik = () => {
  return (
    <>
      <div className='bg-[#191919] rounded-b-3xl text-white pb-20'>
        <DivOpacityAnimation>
          <div className='mx-auto text-center py-28 px-6 max-w-[40rem]'>
            <h1 className={`${anton.className} text-4xl sm:text-6xl font-bold`}>
              Cennik kursów na prawo jazdy
            </h1>
            <p className='py-6 text-md sm:text-lg'>
              Donec nec lobortis ipsum. Vestibulum consequat sem in dignissim
              pellentesque. Aliquam condimentum, risus eu ornare egestas, leo
              lectus sollicitudin diam, et luctus neque ex eget magna.
            </p>
          </div>
        </DivOpacityAnimation>
      </div>
      <PriceCardsWrapper />

      <DivOpacityAnimation>
        <h4
          className={`${anton.className} mt-20 pt-20 pb-14 mx-auto text-center text-4xl font-bold`}
        >
          Dodatkowe
        </h4>
      </DivOpacityAnimation>
      <AdditionalCardsWrapper />
      {/* <CourseElements /> */}
    </>
  );
};

export default Cennik;

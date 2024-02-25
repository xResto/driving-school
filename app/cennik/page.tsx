import React from 'react';
import PriceCardsWrapper from './PriceCardsWrapper';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import AdditionalCardsWrapper from './AdditionalCardsWrapper';
import CourseElements2 from './CourseElements2';
import { anton } from '../fonts';
import PaymentMethods from './PaymentMethods';
import CourseElements from './CourseElements';

const Cennik = () => {
  return (
    <>
      <div className='bg-[#191919] rounded-b-3xl text-white pb-20 max-md:relative max-md:-z-10'>
        <DivOpacityAnimation>
          <div className='mx-auto text-center py-28 px-6 max-w-[40rem]'>
            <h1 className={`${anton.className} text-4xl sm:text-6xl`}>
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
          className={`${anton.className} mt-20 pt-20 pb-14 mx-auto text-center text-4xl`}
        >
          Dodatkowe
        </h4>
      </DivOpacityAnimation>
      <AdditionalCardsWrapper />
      <PaymentMethods />
      <CourseElements />
      {/* <CourseElements2 /> */}
    </>
  );
};

export default Cennik;

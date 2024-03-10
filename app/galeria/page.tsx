import React from 'react';
import Gallery from './Gallery';
import { anton } from '../fonts';

const Page = () => {
  return (
    // <section className='max-w-[1200px] mx-auto xl:py-4 xl:px-0 min-[801px]:p-6 p-4 columns-1 sm:columns-2 min-[950px]:columns-3 xl:columns-4 gap-4'>
    <section className='max-w-[1200px] mx-auto pt-10 pb-20 min-[1244px]:px-0 min-[801px]:px-6 px-4'>
      <h1 className={`${anton.className} text-6xl font-semibold text-center mb-10`}>
        Galeria
      </h1>
      <Gallery />
    </section>
  );
};

export default Page;

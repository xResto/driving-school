import React from 'react';
import Gallery from './Gallery';

const Page = () => {
  return (
    // <section className='max-w-[1200px] mx-auto xl:py-4 xl:px-0 min-[801px]:p-6 p-4 columns-1 sm:columns-2 min-[950px]:columns-3 xl:columns-4 gap-4'>
    <section className='max-w-[1200px] mx-auto xl:py-4 min-[1244px]:px-0 min-[801px]:p-6 p-4'>
      <Gallery />
    </section>
  );
};

export default Page;

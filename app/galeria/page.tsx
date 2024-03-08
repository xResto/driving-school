import React from 'react';
import Gallery from './Gallery';
import Photo1 from '../../public/gallery/Peugeot1.webp';
import Photo2 from '../../public/gallery/Peugeot2.webp';
import Photo3 from '../../public/gallery/Peugeot3.webp';
import Photo4 from '../../public/gallery/Peugeot4.webp';
import Photo5 from '../../public/gallery/Peugeot5.webp';
import Photo6 from '../../public/gallery/Peugeot6.webp';
import Photo7 from '../../public/gallery/Peugeot7.webp';
import Photo8 from '../../public/gallery/Peugeot8.webp';

const Page = () => {
  return (
    // <section className='max-w-[1200px] mx-auto xl:py-4 xl:px-0 min-[801px]:p-6 p-4 columns-1 sm:columns-2 min-[950px]:columns-3 xl:columns-4 gap-4'>
    <section className='max-w-[1200px] mx-auto xl:py-4 min-[1244px]:px-0 min-[801px]:p-6 p-4'>
      <Gallery />
      {/* <MasonryWrapper>
        {photoArray.map((photo, index) => (
          <ImageComponent
            key={index}
            imgSrc={photo.src}
            altText={`Peugeot ${index + 1}`}
          />
        ))}
      </MasonryWrapper> */}
    </section>
  );
};

export default Page;

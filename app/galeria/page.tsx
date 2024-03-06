import React from 'react';
import ImageComponent from './ImageComponent';
import Photo1 from '../../public/gallery/peugeot1.webp';
import Photo2 from '../../public/gallery/peugeot2.webp';
import Photo3 from '../../public/gallery/peugeot3.webp';
import Photo4 from '../../public/gallery/peugeot4.webp';
import Photo5 from '../../public/gallery/peugeot5.webp';
import Photo6 from '../../public/gallery/peugeot6.webp';
import Photo7 from '../../public/gallery/peugeot7.webp';
import Photo8 from '../../public/gallery/peugeot8.webp';
import MasonryWrapper from './MasonryWrapper';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const photoArray = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,

  Photo6,
  Photo3,
  Photo8,
  Photo5,
  Photo1,
  Photo4,
  Photo7,
  Photo2,
  Photo5,
  Photo2,
  Photo7,
  Photo3,
  Photo1,
  Photo8,
  Photo6,
  Photo4,
];

// niech to będzie tablica obiektów z src i alt

const Galeria = () => {
  return (
    // <section className='max-w-[1200px] mx-auto xl:py-4 xl:px-0 min-[801px]:p-6 p-4 columns-1 sm:columns-2 min-[950px]:columns-3 xl:columns-4 gap-4'>
    <section className='max-w-[1200px] mx-auto xl:py-4 min-[1244px]:px-0 min-[801px]:p-6 p-4'>
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 100: 1, 640: 2, 950: 3, 1280: 4 }}
      >
        <Masonry gutter='1rem'> */}
      <MasonryWrapper>
        {photoArray.map((photo, index) => (
          <ImageComponent
            key={index}
            imgSrc={photo.src}
            altText={`Peugeot ${index + 1}`}
          />
        ))}
      </MasonryWrapper>
      {/* </Masonry>
      </ResponsiveMasonry> */}
    </section>
  );
};

export default Galeria;

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
import MasonryWrapper from './MasonryWrapper';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

const photoArray = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
];

async function calculateBase64() {
  const base64Array = await Promise.all(
    photoArray.map(async (element, index) => {
      const buffer = await fs.readFile(
        `./public/gallery/Peugeot${index + 1}.webp`
      );
      const { base64 } = await getPlaiceholder(buffer);
      return base64;
    })
  );

  return base64Array;
}

const Page = async () => {
  const base64Images = await calculateBase64();

  return (
    // <section className='max-w-[1200px] mx-auto xl:py-4 xl:px-0 min-[801px]:p-6 p-4 columns-1 sm:columns-2 min-[950px]:columns-3 xl:columns-4 gap-4'>
    <section className='max-w-[1200px] mx-auto xl:py-4 min-[1244px]:px-0 min-[801px]:p-6 p-4'>
      <MasonryWrapper>
        {photoArray.map((photo, index) => (
          <Gallery
            key={index}
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={`Peugeot ${index + 1}`}
            blurDataURL={base64Images[index]}
          />
        ))}
      </MasonryWrapper>
    </section>
  );
};

export default Page;

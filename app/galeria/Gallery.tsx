import React from 'react';
import Image from 'next/image';
import Photo1 from '../../public/gallery/Peugeot1.webp';
import Photo2 from '../../public/gallery/Peugeot2.webp';
import Photo3 from '../../public/gallery/Peugeot3.webp';
import Photo4 from '../../public/gallery/Peugeot4.webp';
import Photo5 from '../../public/gallery/Peugeot5.webp';
import Photo6 from '../../public/gallery/Peugeot6.webp';
import Photo7 from '../../public/gallery/Peugeot7.webp';
import Photo8 from '../../public/gallery/Peugeot8.webp';
import MasonryWrapper from './MasonryWrapper';

// niech to będzie tablica obiektów z src i alt
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

const Gallery = () => {
  return (
      <MasonryWrapper>
      {photoArray.map((photo, index) => (
        <Image
          key={index}
          src={photo.src}
          alt={`Peugeot ${index + 1}`}
          width={photo.width}
          height={photo.height}
          placeholder='blur'
          blurDataURL={photo.blurDataURL}
          className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
        />
      ))}</MasonryWrapper>
  );
};

export default Gallery;

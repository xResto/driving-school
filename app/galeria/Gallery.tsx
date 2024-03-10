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
  {
    imgSrc: Photo1,
    alt: 'Samochód nauki jazdy na placu manewrowym.',
  },
  {
    imgSrc: Photo2,
    alt: 'Samochód nauki jazdy na placu manewrowym.',
  },
  {
    imgSrc: Photo3,
    alt: 'Samochód nauki jazdy na placu manewrowym.',
  },
  {
    imgSrc: Photo4,
    alt: 'Wnętrze samochodu do nauki jazdy oraz plac manewrowy Tarnobrzeg.',
  },
  {
    imgSrc: Photo5,
    alt: 'Samochód nauki jazdy znajdujący się na kopercie na placu manewrowym WORD Tarnobrzeg.',
  },
  {
    imgSrc: Photo6,
    alt: 'Samochód nauki jazdy na placu manewrowym WORD Tarnobrzeg.',
  },
  {
    imgSrc: Photo7,
    alt: 'Samochód nauki jazdy znajdujący się na kopercie na placu manewrowym WORD Tarnobrzeg.',
  },
  {
    imgSrc: Photo8,
    alt: 'Koperta na placu manwerowym WORD Tarnobrzeg.',
  },
];

const Gallery = () => {
  return (
    <MasonryWrapper>
      {photoArray.map((photo, index) => (
        <Image
          key={index}
          src={photo.imgSrc.src}
          alt={photo.alt}
          width={photo.imgSrc.width}
          height={photo.imgSrc.height}
          placeholder='blur'
          blurDataURL={photo.imgSrc.blurDataURL}
          className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
        />
      ))}
    </MasonryWrapper>
  );
};

export default Gallery;

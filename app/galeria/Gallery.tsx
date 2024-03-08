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
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

interface GalleryProps {
  src: string;
  alt: string;
}

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

const Gallery = ({ src, alt }: GalleryProps) => {
  // const buffer = await fs.readFile(`./public/gallery/${}.webp`);

  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      placeholder='blur'
      // blurDataURL={await getPlaiceholder(src).then((res) => res.base64)}
      className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
    />
  );
  
};

export default Gallery;

// <MasonryWrapper>
  // {photoArray.map((photo, index) => (
  //   <Image
  //     key={index}
  //     src={photo.src}
  //     alt={`Peugeot ${index + 1}`}
  //     width={photo.width}
  //     height={photo.height}
  //     placeholder='blur'
  //     // blurDataURL={photo.blurDataURL}
  //     className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
  //   />
  // ))}

  /* </MasonryWrapper> */
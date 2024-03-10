import React from 'react';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

interface GalleryProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
}

const Gallery = ({ src, width, height, alt, blurDataURL }: GalleryProps) => {
  // const buffer = await fs.readFile(`./public/gallery/${}.webp`);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={blurDataURL}
      // blurDataURL={await getPlaiceholder(src).then((res) => res.base64)}
      className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
    />
  );
};

export default Gallery;

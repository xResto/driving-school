import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
  imgSrc: string;
  altText: string;
}

const ImageComponent = ({ imgSrc, altText }: ImageComponentProps) => {
  return (
    <Image
      src={imgSrc}
      alt={altText}
      width={1000}
      height={1000}
      className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
    />
  );
};

export default ImageComponent;

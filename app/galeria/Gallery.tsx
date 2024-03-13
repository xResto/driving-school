'use client';

import React, { useState, useEffect } from 'react';
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
import Modal from './Modal';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

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

  {
    imgSrc: Photo7,
    alt: 'Samochód nauki jazdy znajdujący się na kopercie na placu manewrowym WORD Tarnobrzeg.',
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
    imgSrc: Photo8,
    alt: 'Koperta na placu manewrowym WORD Tarnobrzeg.',
  },
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
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });
  // const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentImageParam = searchParams.get('image');
    if (currentImageParam) {
      const currentImageIndex = parseInt(currentImageParam, 10) - 1;
      setCurrentImage({
        src: photoArray[currentImageIndex].imgSrc.src,
        alt: photoArray[currentImageIndex].alt,
      });
      setIsOpen(true);
    }
  }, [searchParams]);

  return (
    <>
      <MasonryWrapper>
        {photoArray.map((photo, index) => (
          <Link
            href={`${pathname}?image=${index + 1}`}
            scroll={false}
            key={index}
          >
            <Image
              src={photo.imgSrc.src}
              alt={photo.alt}
              width={photo.imgSrc.width}
              height={photo.imgSrc.height}
              placeholder='blur'
              blurDataURL={photo.imgSrc.blurDataURL}
              onClick={() => {
                setIsOpen(true);
                setCurrentImage({
                  src: photo.imgSrc.src,
                  alt: photo.alt,
                });
              }}
              className='cursor-pointer rounded hover:opacity-75 active:opacity-75 hover:scale-105 transform transition-all'
            />
          </Link>
        ))}
      </MasonryWrapper>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        photoArrayLength={photoArray.length}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={800}
          height={600}
          loading='lazy'
          className='w-full h-auto'
        />
      </Modal>
    </>
  );
};

export default Gallery;

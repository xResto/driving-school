import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardWithPhotoProps {
  header: string;
  text: string[];
  imgSrc: StaticImageData;
  objectPosition?: string;
  textAlignment?: string;
  cardWidth?: string;
  cardHeight?: string;
  photoHeight?: string;
  placeSelf?: string;
}

const CardWithPhoto = ({
  header,
  text,
  imgSrc,
  objectPosition = 'object-center',
  textAlignment = 'center',
  cardWidth = 'max-[528px]:max-w-[30rem] min-[528px]:w-[30rem]',
  cardHeight = 'h-[21rem]',
  photoHeight = 'h-1/2',
  placeSelf = '',
}: CardWithPhotoProps) => {
  return (
    <div
      className={`border border-[#191919] rounded-2xl ${cardWidth} ${cardHeight} ${placeSelf} p-2 bg-[#313131] text-white text-2xl`}
    >
      <Image
        src={imgSrc}
        alt='Wykonywanie płatności online'
        className={`rounded-xl w-full ${photoHeight} object-cover ${objectPosition}`}
      />
      <div className='flex flex-col h-1/2'>
        <p className='my-2 ml-2 pb-2 border-b-2 border-[#CE2029] text-center font-semibold'>
          {header}
        </p>
        {text.map((t, i) => (
          <p key={i} className={`pb-1 ml-2 text-lg text-${textAlignment} px-1`}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardWithPhoto;

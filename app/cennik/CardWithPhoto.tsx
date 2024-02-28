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
  pTextSize?: string;
}

const CardWithPhoto = ({
  header,
  text,
  imgSrc,
  objectPosition = 'object-center',
  textAlignment = 'center',
  cardWidth = 'max-[528px]:max-w-[30rem] min-[528px]:w-[30rem]',
  cardHeight = 'min-[1499px]:h-[26rem] min-[1339px]:h-[30rem] min-[795px]:h-[26rem] max-h-[34rem]',
  photoHeight = 'h-1/2',
  placeSelf = '',
  pTextSize = 'min-[426px]:text-lg text-base',
}: CardWithPhotoProps) => {
  return (
    <div
      className={`border border-[#191919] rounded-2xl ${cardHeight} ${cardWidth} ${placeSelf} p-2 bg-[#313131] text-white min-[426px]:text-2xl text-xl`}
    >
      <Image
        src={imgSrc}
        alt='Wykonywanie płatności online'
        className={`rounded-xl w-full ${photoHeight} object-cover ${objectPosition}`}
        loading='lazy'
      />
      <div className='flex flex-col h-1/2'>
        <p className='my-2 pb-2 border-b-2 border-[#CE2029] text-center font-semibold'>
          {header}
        </p>
        {text.map((t, i) => (
          <p key={i} className={`pb-1 px-1 ${pTextSize} text-${textAlignment}`}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardWithPhoto;

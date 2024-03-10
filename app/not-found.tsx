import React from 'react';
import Image from 'next/image';
import NotFoundImage from '../public/not-found.svg';
import ButtonRed from './components/buttons/ButtonRed';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='mx-auto flex flex-col gap-10 items-center justify-center py-10 md:px-10 px-4'>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <h1 className='md:text-5xl text-4xl text-center'>
          Nie znaleziono strony.
        </h1>
        <h2 className='md:text-2xl text-xl text-center'>
          Być może adres URL jest błędny lub strona została usunięta.
        </h2>
        <Link href='/'>
          <ButtonRed textStyles='md:text-xl text-lg'>
            Przejdź do strony głównej
          </ButtonRed>
        </Link>
      </div>
      <Image
        src={NotFoundImage}
        alt='Obrazek, który informuje, że nie znaleziono strony.'
      />
    </div>
  );
};

export default NotFound;

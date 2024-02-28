import React from 'react';
import { anton } from '../fonts';
import Image from 'next/image';
import RouteImg from '../../public/route.svg';
import Photo from '../../public/photo.svg';
import Doctors from '../../public/doctors.svg';

const HowToStartCourse = () => {
  return (
    <div>
      <Image
        src={RouteImg}
        alt='Route'
        className='relative -z-10 opacity-50 w-full p-36 pt-2 mx-auto'
      />
      <div className='flex justify-center items-center opacity-90'>
        <div className='absolute z-10 top-[20%] w-[50rem] h-[50rem] bg-white rounded-2xl border-2 border-[#191919] py-6 px-10'>
          <h1
            className={`${anton.className} max-w-64 mx-auto text-4xl text-center pb-2 border-b-2 border-[#CE2029]`}
          >
            Jak zacząć kurs
          </h1>
          <div className='flex flex-col gap-4 text-lg'>
            <div className='flex items-center justify-center gap-4 pt-4'>
              <p>
                <span className='font-semibold'>Zdjęcie</span> - identyczne jak
                do dowodu osobistego, powinno być kolorowe i aktualne.
              </p>
              <Image src={Photo} alt='Photo' className='w-20' />
            </div>
            <div className='flex items-center gap-4'>
              <Image src={Doctors} alt='Doctros' className='w-20' />
              <p>
                <span className='font-semibold'>Badania lekarskie</span> -
                lekarz uprawniony do badania kierowców wyda orzeczenie o braku
                przeciwskazań zdrowotnych do kierowania pojazdami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToStartCourse;

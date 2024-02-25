import React from 'react';
import { anton } from '../fonts';
import CarDriving from '../../public/car-driving.webp';
import Image from 'next/image';

const CourseElements = () => {
  return (
    <div className='flex justify-between max-w-[1200px] mx-auto items-start'>
      <h5 className={`${anton.className} text-4xl font-bold sticky top-2`}>W cenie kursu</h5>
      <ul className='flex flex-col gap-10 w-[50rem]'>
        <li className='flex gap-8'>
          <Image className='object-cover h-96 w-72' src={CarDriving} alt='zdjęcie' />
          <div className='flex flex-col gap-8 w-[40rem]'>
            <h6 className='text-3xl font-semibold'>Wykłady</h6>
            <p className='text-lg'>
              A paint protection mask, also known as a clear bra or paint
              protection film PPF, is a transparent layer that is applied to
              the exterior of a vehicle to safeguard the paint from scratches,
              chips, and other damage.
            </p>
          </div>
        </li>
        <li className='flex gap-8'>
          <Image className='object-cover h-96 w-72' src={CarDriving} alt='zdjęcie' />
          <div className='flex flex-col gap-8 w-[40rem]'>
            <h6 className='text-3xl font-semibold'>Pierwsza pomoc</h6>
            <p className='text-lg'>
              Paint correction is a professional process of restoring and
              enhancing the appearance of a vehicles paintwork. It involves
              carefully removing imperfections such as swirl marks, scratches,
              oxidation, and other paint defects using specialized tools,
              compounds, and techniques.
            </p>
          </div>
        </li>
        <li className='flex gap-8'>
          <Image className='object-cover h-96 w-72' src={CarDriving} alt='zdjęcie' />
          <div className='flex flex-col gap-8 w-[40rem]'>
            <h6 className='text-3xl font-semibold'>Zajęcia praktyczne</h6>
            <p className='text-lg'>
              Ceramic coating, also known as nano-ceramic coating, is a
              protective layer that is applied to a vehicles exterior surfaces
              to provide long-lasting protection and enhancement. It is a liquid
              polymer that chemically bonds with the vehicles paint, creating a
              hydrophobic and durable shield.
            </p>
          </div>
        </li>
        <li className='flex gap-8'>
          <Image className='object-cover h-96 w-72' src={CarDriving} alt='zdjęcie' />
          <div className='flex flex-col gap-8 w-[40rem]'>
            <h6 className='text-3xl font-semibold'>Egzamin wewnętrzny</h6>
            <p className='text-lg'>
              This includes a thorough cleaning of the cars exterior, removing
              dirt, dust, and grime. It typically involves hand washing, using
              high-quality car wash soap, and drying the vehicle.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CourseElements;

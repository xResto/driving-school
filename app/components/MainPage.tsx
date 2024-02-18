import React from 'react';
import Image from 'next/image';
import { anton } from '../fonts';
import DivOpacityAnimation from './animations/DivOpacityAnimation';
import FromLeftAnimation from './animations/FromLeftAnimation';
import WomanDrivingCarImg from '../../public/woman-driving-cut.webp';
import EnvelopeIconWhite from '../../public/envelope-icon-white.svg';
import PhoneIconWhite from '../../public/phone-icon-white.svg';
import GrowAnimation from './animations/GrowAnimation';
import DivReverseOpacityAnimation from './animations/DivReverseOpacityAnimation';

export default function MainPage() {
  return (
    <main className='relative -top-[101px] bg-[#f5f5f5]'>
      <div className='absolute z-10 px-4 w-[1200px] left-1/2 transform -translate-x-1/2 text-white mt-[101px]'>
        <DivOpacityAnimation duration={0.5} delay={0}>
          <div className='flex justify-center'>
            <div className='flex gap-10 p-8 text-center border-b-2 border-[#CE2029] text-lg'>
              <a
                href='tel:607551092'
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-[.625rem]'
                    src={PhoneIconWhite}
                    alt='Ikonka telefonu'
                  />
                  <span>607 551 092</span>
                </div>
              </a>
              <a
                href='tel:503553130'
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-[.625rem]'
                    src={PhoneIconWhite}
                    alt='Ikonka telefonu'
                  />
                  <span>503 553 130</span>
                </div>
              </a>
              <a
                href='mailto:wojteksc@op.pl'
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-5'
                    src={EnvelopeIconWhite}
                    alt='Ikonka koperty'
                  />
                  <span>wojteksc@op.pl</span>
                </div>
              </a>
            </div>
          </div>
        </DivOpacityAnimation>
        <DivOpacityAnimation delay={0}>
          <FromLeftAnimation>
            <div className='flex flex-col mt-52'>
              <div className='w-[42rem]'>
                <h1
                  className={`${anton.className} text-5xl font-bold mb-4 w-[60rem]`}
                >
                  Zdaj na prawo jazdy z OSK WOJTEK
                </h1>
                <p className='text-lg'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </FromLeftAnimation>
        </DivOpacityAnimation>
      </div>
      {/* red boxes */}
      <div
        className='w-[34rem] h-[33rem] bg-[#CE2029] absolute bottom-[6%] right-0 rounded-lg'
        style={{
          clipPath: 'polygon(0 0, 100% 0%, 100% 90.2%, 0% 100%)',
        }}
      ></div>
      <div
        className='w-[50rem] h-[33rem] bg-[#990f0f] absolute z-0 bottom-[6.5%] right-0 rounded-lg'
        style={{
          clipPath: 'polygon(0 0, 100% 0%, 100% 85.5%, 0% 100%)',
        }}
      ></div>

      <Image
        src={WomanDrivingCarImg}
        alt='car-driving'
        className='max-h-[100vh] object-cover'
        priority={true}
        placeholder='blur'
        style={{
          clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 100%)',
        }}
      />
      <div
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'
        style={{
          clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 100%)',
        }}
      ></div>
    </main>
  );
}

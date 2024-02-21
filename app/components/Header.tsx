import React from 'react';
import Image from 'next/image';
import { anton } from '../fonts';
import DivOpacityAnimation from './animations/DivOpacityAnimation';
import FromLeftAnimation from './animations/FromLeftAnimation';
import WomanDrivingCarImg from '../../public/woman-driving-cut.webp';
import EnvelopeIconWhite from '../../public/envelope-icon-white.svg';
import PhoneIconWhite from '../../public/phone-icon-white.svg';

export default function Header() {
  return (
    <main className='relative -top-[101px] bg-[#f5f5f5] flex justify-center'>
      <div className='absolute z-10 px-4 flex flex-col justify-center items-center text-white mt-[101px] max-w-[1200px]'>
        {/* <div className='absolute z-10 px-4 w-[1200px] left-1/2 transform -translate-x-1/2 text-white mt-[101px]'> */}
        <DivOpacityAnimation>
          <div className='flex justify-center'>
            <div className='flex gap-10 xl:p-8 p-6 text-center border-b-2 border-[#CE2029] xl:text-lg text-base'>
              <a
                href='tel:607551092'
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    className='w-3'
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
                    className='w-3'
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
        <DivOpacityAnimation>
          <FromLeftAnimation>
            <div className='flex items-center 2xl:mt-52 2xl:-ml-[12rem] xl:-ml-[4rem] xl:mt-32 max-xl:gap-10 lg:-ml-[8rem] lg:mt-20 mx-auto mt-10'>
              <div className='flex flex-col max-lg:items-center max-lg:text-center'>
                <h1
                  className={`${anton.className} text-6xl font-bold mb-4 xl:w-[54rem] max-xl:text-5xl`}
                >
                  Zdaj na prawo jazdy z OSK WOJTEK
                </h1>
                <p className='text-lg max-xl:w-[40rem] w-[50rem]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className='flex items-center justify-center bg-[#2a2ac2] text-9xl font-bold size-40 rounded border-2 border-white'>
                L
              </div>
            </div>
          </FromLeftAnimation>
        </DivOpacityAnimation>
      </div>
      {/* red boxes */}
      <div
        className='clip-path-bright-red w-[34rem] h-[33rem] bg-[#CE2029] absolute bottom-[6%] right-0 rounded-lg
        max-[1700px]:bottom-[5.25%] max-[1600px]:w-[31rem] max-[1500px]:w-[29rem] max-[1500px]:bottom-[6%] max-[1400px]:w-[27rem] max-[1300px]:w-[25rem] max-[1200px]:w-[23rem]
        max-[1100px]:w-[21rem] max-[1000px]:w-[19rem]'
      ></div>
      <div
        className='clip-path-dark-red w-[50rem] h-[33rem] bg-[#990f0f] absolute z-0 bottom-[6.5%] right-0 rounded-lg
        max-[1700px]:bottom-[5.75%] max-[1600px]:w-[47rem] max-[1500px]:w-[43rem] max-[1400px]:w-[40rem] max-[1300px]:w-[37rem] max-[1200px]:w-[34rem]
        max-[1100px]:w-[31rem] max-[1000px]:w-[28rem]'
      ></div>

      <Image
        src={WomanDrivingCarImg}
        alt='car-driving'
        priority={true}
        placeholder='blur'
        className='h-[100vh] max-xl:h-[95vh] object-cover header-img'
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

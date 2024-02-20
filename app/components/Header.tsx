import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { anton } from '../fonts';
import DivOpacityAnimation from './animations/DivOpacityAnimation';
import FromLeftAnimation from './animations/FromLeftAnimation';
import WomanDrivingCarImg from '../../public/woman-driving-cut.webp';
import EnvelopeIconWhite from '../../public/envelope-icon-white.svg';
import PhoneIconWhite from '../../public/phone-icon-white.svg';
import GrowAnimation from './animations/GrowAnimation';
import DivReverseOpacityAnimation from './animations/DivReverseOpacityAnimation';

// function calculateBottomOffset(windowHeight: number) {
//   const baseBottom = 6; // Base bottom value
//   const reductionPer100px = 0.75; // Reduction in percentage per 100px

//   // Calculate the difference between the window height and 1700px
//   const difference = 1700 - windowHeight;
//   console.log(difference)

//   // Calculate the bottom offset
//   const bottomOffset = baseBottom - (difference / 100) * reductionPer100px;
//   console.log(bottomOffset)

//   return bottomOffset;
// }

export default function Header() {
  // const [bottomOffset, setBottomOffset] = useState(6); // Initial bottom offset

  // useEffect(() => {
  //   function handleResize() {
  //     const windowHeight = window.innerWidth;
  //     const newBottomOffset = calculateBottomOffset(windowHeight);
  //     setBottomOffset(newBottomOffset);
  //   }

  //   // Initial setup
  //   handleResize();

  //   // Event listener for window resize
  //   window.addEventListener('resize', handleResize);

  //   // Clean up
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

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
              <div className='flex flex-col 2xl:mt-52 2xl:-ml-[30rem] xl:-ml-[24rem] xl:mt-36 lg:-ml-[12rem] lg:mt-14 mx-auto mt-10 texc-center'>
                <div className='w-[42rem]'>
                  <h1
                    className={`${anton.className} text-6xl font-bold mb-4 xl:w-[60rem] w-[30rem] max-xl:text-5xl`}
                  >
                    Zdaj na prawo jazdy z OSK WOJTEK
                  </h1>
                  <p className='text-lg max-xl:w-[30rem]'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </FromLeftAnimation>
          </DivOpacityAnimation>
        </div>
      {/* red boxes */}
      <div
        className='w-[34rem] h-[33rem] bg-[#CE2029] absolute bottom-[6%] right-0 rounded-lg max-[1700px]:bottom-[5.25%] max-[1600px]:bottom-[5%] max-[1500px]:bottom-[4.5%] max-[1400px]:bottom-[3.75%] max-[1300px]:bottom-[3%] max-[1200px]:bottom-[2%] max-[1100px]:bottom-[1%] max-[1000px]:bottom-[0%] max-[900px]:bottom-[-1%] max-[800px]:bottom-[-2%] max-[700px]:bottom-[-3%] max-[600px]:bottom-[-4%] max-[500px]:bottom-[-5%] max-[400px]:bottom-[-6%] max-[300px]:bottom-[-7%]'
        style={{
          // bottom: `${bottomOffset}%`,
          clipPath: 'polygon(0 0, 100% 0%, 100% 90.2%, 0% 100%)',
        }}
      ></div>
      <div
        className='w-[50rem] h-[33rem] bg-[#990f0f] absolute z-0 bottom-[6.5%] right-0 rounded-lg max-[1700px]:bottom-[5.75%] max-[1600px]:bottom-[5%] max-[1500px]:bottom-[4.25%] max-[1400px]:bottom-[3.5%] max-[1300px]:bottom-[2.75%] max-[1200px]:bottom-[1.75%] max-[1100px]:bottom-[0.75%] max-[1000px]:bottom-[-0.25%] max-[900px]:bottom-[-1.25%] max-[800px]:bottom-[-2.25%] max-[700px]:bottom-[-3.25%] max-[600px]:bottom-[4.25%] max-[500px]:bottom-[-5.25%] max-[400px]:bottom-[-6.25%] max-[300px]:bottom-[-7.25%]'
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

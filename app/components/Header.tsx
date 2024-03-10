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
    <main className='relative -top-[101px] bg-[#fffefe] flex justify-center'>
      <div className='absolute z-10 px-4 flex flex-col justify-center items-center text-white mt-[101px] max-w-[1200px]'>
        <DivOpacityAnimation>
          <div className='flex justify-center'>
            <div className='sm:flex gap-10 max-[1093px]:gap-5 max-lg:gap-10 max-sm:gap-4 grid grid-cols-2 xl:px-8 px-6 md:py-6 sm:py-5 py-3 text-center border-b-2 border-[#CE2029] xl:text-base md:text-sm text-xs'>
              <a
                href='tel:607551092'
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all justify-self-end'
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
                className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all justify-self-center col-span-2'
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
            <div className='flex max-lg:flex-col items-center xl:mt-44 lg:mt-40 md:mt-36 sm:mt-32 mt-20 mx-auto xl:gap-10 gap-4'>
              <div className='flex flex-col max-lg:items-center max-lg:text-center'>
                <h1
                  className={`${anton.className} xl:text-6xl md:text-5xl text-4xl mb-4 `}
                >
                  Zdaj na prawo jazdy z OSK WOJTEK
                </h1>
                <p className='lg:text-lg text-base xl:max-w-[50rem] max-w-[40rem]'>
                  Pomożemy Ci zdać prawo jazdy w Tarnobrzegu. Zajęcia
                  teoretyczne i praktyczne, jazdy doszkalające, kursy na prawo
                  jazdy kategorii B. Zapraszamy!
                </p>
              </div>
              <div className='flex items-center justify-center bg-[#2a2ac2] lg:text-9xl sm:text-8xl text-7xl font-bold lg:size-40 sm:size-32 size-24 rounded lg:border-[6px] sm:border-[5px] border-4 border-white'>
                L
              </div>
            </div>
          </FromLeftAnimation>
        </DivOpacityAnimation>
      </div>
      {/* red boxes */}
      <div
        className='clip-path-bright-red w-[34rem] h-[33rem] bg-[#CE2029] absolute bottom-[6%] right-0 rounded-lg
        max-[1700px]:bottom-[5.25%] max-[1600px]:w-[31rem] max-[1500px]:w-[29rem] max-[1400px]:w-[27rem] max-[1300px]:w-[25rem] max-[1200px]:w-[23rem]
        max-[1100px]:w-[21rem] max-[1000px]:w-[19rem] max-[900px]:w-[17rem] max-[800px]:w-[15rem] max-[700px]:w-[13rem] max-[600px]:w-[11rem] max-[500px]:w-[9rem]
        max-[400px]:w-[7rem]'
      ></div>
      <div
        className='clip-path-dark-red w-[50rem] h-[34rem] bg-[#990f0f] absolute z-0 bottom-[6.5%] right-0 rounded-lg
        max-[1700px]:bottom-[5.75%] max-[1600px]:w-[47rem] max-[1500px]:w-[43rem] max-[1400px]:w-[40rem] max-[1300px]:w-[37rem] max-[1200px]:w-[34rem]
        max-[1100px]:w-[31rem] max-[1000px]:w-[28rem] max-[900px]:w-[25rem] max-[800px]:w-[22rem] max-[700px]:w-[19rem] max-[700px]:bottom-[6%] max-[650px]:bottom-[5.5%]
        max-[600px]:w-[16rem] max-[600px]:bottom-[6%] max-[550px]:bottom-[5.5%] max-[500px]:w-[13rem] max-[500px]:bottom-[6%] max-[450px]:bottom-[5.5%]
        max-[400px]:w-[10rem] max-[400px]:bottom-[6.25%] max-[350px]:bottom-[5.5%]'
      ></div>

        <Image
          src={WomanDrivingCarImg}
          alt='car-driving'
          priority={true}
          placeholder='blur'
          className='h-dvh max-xl:h-[95dvh] object-cover header-img'
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

// max-xl:h-[95dvh]

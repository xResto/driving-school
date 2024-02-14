import React from 'react';
import Image from 'next/image';
import { anton } from '../fonts';
import DivOpacityAnimation from './animations/DivOpacityAnimation';
import FromLeftAnimation from './animations/FromLeftAnimation';
import GrowAnimation from './animations/GrowAnimation';
import WomanDrivingCarImg from '../../public/woman-driving-cut.webp';
import DivReverseOpacityAnimation from './animations/DivReverseOpacityAnimation';

export default function MainPage() {
  return (
    <main className='relative -top-[101px] bg-[#f5f5f5]'>
      <div className='absolute z-10 px-4 w-[1200px] left-1/2 transform -translate-x-1/2 text-lg text-white mt-[101px]'>
        <DivOpacityAnimation duration={0.5} delay={0}>
          <div className='flex justify-center'>
            <div className='flex gap-10 p-8 text-center border-b-2 border-[#CE2029]'>
              <div>+48 607 551 092</div>
              <div>+48 503 553 130</div>
              <div>wojteksc@op.pl</div>
            </div>
          </div>
        </DivOpacityAnimation>
        <FromLeftAnimation>
          <GrowAnimation>
            <div className='flex flex-col mt-52'>
              <div className='w-[42rem]'>
                <h1
                  className={`${anton.className} text-5xl font-bold mb-4 w-[60rem]`}
                >
                  Zdaj na prawo jazdy z OSK WOJTEK
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </GrowAnimation>
        </FromLeftAnimation>
      </div>
      {/* red boxes */}
        <div
          className='w-[34rem] h-[33rem] bg-[#CE2029] absolute bottom-[6%] right-0 rounded-2xl'
          style={{
            clipPath: 'polygon(0 0, 100% 0%, 100% 90.2%, 0% 100%)',
          }}
        ></div>
      <div
        className='w-[50rem] h-[33rem] bg-[#990f0f] absolute z-0 bottom-[6.5%] right-0 rounded-2xl'
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

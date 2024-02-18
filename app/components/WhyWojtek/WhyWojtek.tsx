import React from 'react';
import { anton } from '../../fonts';
import ButtonRed from '../buttons/ButtonRed';
import ButtonWhite from '../buttons/ButtonWhite';
import Link from 'next/link';
import DivAnimation from '../animations/DivYOpacityAnimation';
import WhyWojtekImg from './WhyWojtekImg';
import DivOpacityAnimation from '../animations/DivOpacityAnimation';

export default function WhyWojtek() {
  return (
    <section className='flex justify-center bg-[#f5f5f5] -mt-[101px] h-[43rem] pt-16'>
      <div className='w-[1200px] max-w-[1200px]'>
        <div className='flex gap-28'>
          <DivAnimation absolute='absolute' delay={0.75}>
            <div
              className='bg-[#CE2029] w-[640px] h-[480px] absolute -ml-5 my-5  rounded-lg'
              style={{
                clipPath: 'polygon(0 12.8%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            ></div>
          </DivAnimation>
          <WhyWojtekImg />

          <div className='flex flex-col justify-evenly'>
            <DivOpacityAnimation>
              <h2 className={`${anton.className} text-5xl font-bold`}>
                Dlaczego WOJTEK
              </h2>
            </DivOpacityAnimation>
            <DivOpacityAnimation>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tellus nisl, faucibus in lacus ac, luctus placerat libero. In
                porta feugiat dui, sit amet aliquam urna condimentum nec. Sed ac
                commodo mauris. Pellentesque cursus sed mauris at varius.
              </p>
            </DivOpacityAnimation>
            <DivOpacityAnimation>
              <div className='flex gap-10'>
                <ButtonRed>O nas</ButtonRed>
                <Link href='/cennik'>
                  <ButtonWhite>Cennik</ButtonWhite>
                </Link>
              </div>
            </DivOpacityAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

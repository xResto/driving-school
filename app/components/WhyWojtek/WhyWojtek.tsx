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
    <section className='flex justify-center bg-[#f5f5f5] -mt-[101px] h-[46rem] pt-16 px-12'>
      <div className='w-[1200px] max-w-[1200px]'>
        <div className='flex lg:flex-row flex-col-reverse max-lg:items-center xl:gap-28 gap-10'>
          <DivAnimation absolute='absolute' delay={0.75}>
            <div
              className='bg-[#CE2029] xl:w-[640px] w-[560px] xl:h-[480px] h-[420px] absolute lg:-ml-5 -ml-[18.75rem] lg:my-5 -my-[25rem] rounded-lg'
              style={{
                clipPath: 'polygon(0 12.8%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            ></div>
          </DivAnimation>
          <WhyWojtekImg />

          <div className='flex flex-col max-lg:gap-10 max-lg:text-center justify-evenly max-lg:w-[36rem]'>
            <DivOpacityAnimation>
              <h2
                className={`${anton.className} text-6xl lg:text-6xl max-[1103px]:text-5xl`}
              >
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
              <div className='flex gap-10 max-lg:justify-center'>
                <Link href='/galeria'>
                  <ButtonRed>Galeria</ButtonRed>
                </Link>
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

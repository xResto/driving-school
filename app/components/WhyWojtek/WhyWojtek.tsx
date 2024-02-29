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
    <section className='flex justify-center bg-[#f5f5f5] -mt-[101px] xl:h-[46rem] lg:h-[42rem] sm:h-[46rem] min-[550px]:h-[42rem] min-[460px]:h-[38rem] min-[375px]:h-[35rem] h-[36rem] pt-16 md:px-12 px-6'>
      <div className='w-[1200px] max-w-[1200px]'>
        <div className='flex lg:flex-row flex-col-reverse max-lg:items-center xl:gap-28 gap-10'>
          <DivAnimation absolute='absolute' delay={0.75}>
            <div
              className='absolute bg-[#CE2029] xl:w-[40rem] sm:w-[35rem] min-[550px]:w-[30rem] min-[460px]:w-[25rem] min-[375px]:w-[20rem] w-[15rem] xl:h-[30rem] sm:h-[420px] min-[550px]:h-[360px] min-[460px]:h-[300px] min-[375px]:h-[240px] h-[180px] lg:-ml-5 sm:-ml-[18.2rem] min-[550px]:-ml-[15.6rem] min-[460px]:-ml-[13rem] min-[375px]:-ml-[10.5rem] -ml-[7.9rem] lg:my-5 sm:-my-[25rem] min-[550px]:-my-[21.25rem] min-[460px]:-my-[17.6rem] min-[375px]:-my-[14rem] -my-[10.35rem] rounded-lg'
              style={{
                clipPath: 'polygon(0 12.8%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            ></div>
          </DivAnimation>
          <WhyWojtekImg />

          <div className='flex flex-col max-lg:gap-10 max-lg:text-center justify-evenly lg:w-full sm:w-[36rem] w-full'>
            <DivOpacityAnimation>
              <h2
                className={`${anton.className} min-[1103px]:text-6xl text-5xl`}
              >
                Dlaczego WOJTEK
              </h2>
            </DivOpacityAnimation>
            <DivOpacityAnimation>
              <p className='sm:text-lg text-base'>
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

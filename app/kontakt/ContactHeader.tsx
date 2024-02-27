'use client';

import Image from 'next/image';
import React from 'react';
import EnvelopeIcon from '../../public/envelope-icon.svg';
import PhoneIcon from '../../public/phone-icon.svg';
import MapPin from '../../public/map-pin.svg';
import { anton } from '../fonts';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import { useMainContext } from '../components/store/MainContext';

const ContactHeader = () => {
  const { isMenuOpen } = useMainContext();

  return (
    <div
      className='lg:w-1/2 w-full flex flex-col items-center justify-center mx-auto gap-1 text-center text-lg'
      style={
        isMenuOpen
          ? { position: 'relative', zIndex: '-10' }
          : { position: 'static', zIndex: '0' }
      }
    >
      <DivOpacityAnimation>
        <div className='w-full flex justify-center mb-6'>
          <div className='w-full sm:flex gap-10 max-[1093px]:gap-5 max-lg:gap-10 max-sm:gap-5 grid grid-cols-2 sm:py-8 py-4 justify-center text-center min-[431px]:text-base text-sm border-b-2 border-[#191919] font-medium'>
            <a
              href='tel:607551092'
              className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all justify-self-end'
            >
              <div className='flex gap-2 items-center'>
                <Image src={PhoneIcon} alt='Ikonka telefonu' className='w-3' />
                <span>607 551 092</span>
              </div>
            </a>
            <a
              href='tel:503553130'
              className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all'
            >
              <div className='flex gap-2 items-center'>
                <Image src={PhoneIcon} alt='Ikonka telefonu' className='w-3' />
                <span>503 553 130</span>
              </div>
            </a>
            <a
              href='mailto:wojteksc@op.pl'
              className='text-[#CE2029] focus:text-[#990f0f] hover:text-[#990f0f] transform transition-all justify-self-center col-span-2'
            >
              <div className='flex gap-2 items-center'>
                <Image
                  src={EnvelopeIcon}
                  alt='Ikonka koperty'
                  className='w-6'
                />
                <span>wojteksc@op.pl</span>
              </div>
            </a>
          </div>
        </div>
        <h1 className={`${anton.className} text-4xl mb-2`}>
          Skontaktuj się z nami!
        </h1>
        <p>
          Napisz do nas wiadomość poprzez formularz kontaktowy lub na adres
          e-mail.
        </p>
        <p>
          Skontaktujemy się z Tobą tak szybko, jak to możliwe i zapiszemy na
          wybrany kurs.
        </p>
        <p className='text-base'>
          * Wizyty w biurze&nbsp;
          <Image
            src={MapPin}
            alt='Ikonka pinezki'
            className='w-3 inline-block align-middle pb-[.2rem]'
          />
          &nbsp;(ul.Zwierzyniecka 18) możliwe jedynie po wcześniejszym umówieniu
          telefonicznym.
        </p>
      </DivOpacityAnimation>
    </div>
  );
};

export default ContactHeader;

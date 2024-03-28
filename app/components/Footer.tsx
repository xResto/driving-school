import React from 'react';
import Image from 'next/image';
import PhoneIconWhite from '../../public/phone-icon-white.svg';
import EnvelopeIconWhite from '../../public/envelope-icon-white.svg';
import MapPinWhite from '../../public/map-pin-white.svg';
import FacebookIcon from '../../public/facebook-icon.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#191919] text-white w-full flex flex-col items-center justify-center py-4 xl:px-0 min-[380px]:px-10 px-5'>
      <div className='w-full text-base'>
        <div className='2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[800px] sm:max-w-[600px] w-full mx-auto mt-4'>
          <h6 className='text-3xl border-l-2 border-[#CE2029] pl-4'>Kontakt</h6>
          <div className='flex sm:flex-row flex-col items-stretch sm:gap-0 gap-10 justify-between w-full pt-12'>
            <div className='flex gap-3 text-center leading-5'>
              <div className='flex flex-col gap-6 justify-center items-center'>
                <Image
                  className='w-3'
                  src={PhoneIconWhite}
                  alt='Ikonka telefonu'
                />
                <Image
                  className='w-3'
                  src={PhoneIconWhite}
                  alt='Ikonka telefonu'
                />
                <Image
                  className='w-5'
                  src={EnvelopeIconWhite}
                  alt='Ikonka koperty'
                />
                <Image className='w-3' src={MapPinWhite} alt='Ikonka koperty' />
              </div>
              <div className='flex flex-col justify-between items-start'>
                <a
                  href='tel:607551092'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  607 551 092
                </a>
                <a
                  href='tel:503553130'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all mt-1'
                >
                  503 553 130
                </a>
                <a
                  href='mailto:wojteksc@op.pl'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  wojteksc@op.pl
                </a>
                <div className='flex gap-2 items-center -mb-1'>
                  ul. Zwierzyniecka 18 *
                </div>
              </div>
            </div>
            <div className='sm:hidden max-w-80 -mt-5 text-center'>
            * Wizyty w biurze możliwe jedynie po wcześniejszym umówieniu
            telefonicznym.
          </div>
            <div className='flex sm:gap-20 gap-6 sm:mb-0 mb-8'>
              <div className='flex flex-col sm:gap-0 gap-2 justify-between justify-self-end'>
                <Link
                  href='/'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  Strona główna
                </Link>
                <Link
                  href='/jak-zaczac-kurs'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  Jak zacząć kurs?
                </Link>
                <Link
                  href='/cennik'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  Cennik
                </Link>
                <Link
                  href='/galeria'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  Galeria
                </Link>
                <Link
                  href='/kontakt'
                  className='focus:text-[#f1dede] hover:text-[#f1dede] transform transition-all'
                >
                  Kontakt
                </Link>
              </div>
              <a
                href='https://www.facebook.com/profile.php?id=100057127253023'
                target='_blank'
                className='h-10 self-center hover:scale-110 transform transition-all'
              >
                <Image
                  className='w-10'
                  src={FacebookIcon}
                  alt='Ikonka telefonu'
                />
              </a>
            </div>
          </div>
          <div className='hidden sm:block pt-5 pb-12 lg:w-full max-w-80'>
            * Wizyty w biurze możliwe jedynie po wcześniejszym umówieniu
            telefonicznym.
          </div>
        </div>
      </div>
      <p className='opacity-80 sm:text-sm text-xs text-center'>
        &copy; 2024 OSK WOJTEK | Wszelkie prawa zastrzeżone
      </p>
    </footer>
  );
};

export default Footer;

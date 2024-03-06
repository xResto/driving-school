'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RedUnderscoreHoverAnimation from '../animations/RedUnderscoreHoverAnimation';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/logo.webp';
import Hamburger from './Hamburger';
import { useMainContext } from '../store/MainContext';

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useMainContext();

  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <nav
      className={`text-white min-[100px]:px-4 sm:px-6 px-6 ${
        pathname === '/'
          ? 'sticky top-0 z-[100] backdrop-blur-lg border-b-[.5px] border-gray-400 '
          : 'static bg-[#191919] backdrop-blur-none '
      }`}
      style={
        pathname === '/'
          ? {
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), linear-gradient(rgba(255, 255, 255, .1), rgba(255, 255, 255, .1))',
            }
          : {}
      }
    >
      <div className='flex flex-row justify-between items-center py-5 max-w-[1200px] mx-auto'>
        <div className='text-3xl font-bold'>
          <Link href='/'>
            <Image
              src={Logo}
              priority={true}
              alt='Logo OSK WOJTEK'
              className='md:w-36 w-28'
            />
          </Link>
        </div>
        <Hamburger />
        <ul
          className={`${
            isMenuOpen ? '' : 'max-md:hidden'
          } flex md:gap-6 gap-0 items-center text-lg max-md:fixed max-md:z-[100] max-md:top-[5.4rem] max-md:left-0 max-md:bg-[#111111] max-md:w-full max-md:flex-col`}
        >
          <Link
            href='/'
            className={`max-md:w-full text-center max-md:py-4 ${
              pathname === '/' ? 'md:border-b-2 md:border-[#CE2029] md:text-white text-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation currentPath={pathname} thisPath='/'>
              Strona główna
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/jak-zaczac-kurs'
            className={`max-md:w-full text-center max-md:py-4 ${
              pathname === '/jak-zaczac-kurs'
                ? 'md:border-b-2 md:border-[#CE2029] md:text-white text-[#CE2029]'
                : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/jak-zaczac-kurs'
            >
              Jak zacząć kurs
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/cennik'
            className={`max-md:w-full text-center max-md:py-4 ${
              pathname === '/cennik' ? 'md:border-b-2 md:border-[#CE2029] md:text-white text-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/cennik'
            >
              Cennik
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/galeria'
            className={`max-md:w-full text-center max-md:py-4 ${
              pathname === '/galeria' ? 'md:border-b-2 md:border-[#CE2029] md:text-white text-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/galeria'
            >
              Galeria
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/kontakt'
            className={`max-md:w-full text-center max-md:py-4 ${
              pathname === '/kontakt' ? 'md:border-b-2 md:border-[#CE2029] md:text-white text-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/kontakt'
            >
              Kontakt
            </RedUnderscoreHoverAnimation>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import CloseIcon from '../../public/close-icon.svg';
import LeftArrowIcon from '../../public/left-icon.svg';
import RightArrowIcon from '../../public/right-icon.svg';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  photoArrayLength: number;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  setIsOpen,
  photoArrayLength,
  children,
}: ModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentImageParam = searchParams.get('image');

  useEffect(() => {
    currentImageParam
      ? setCurrentImageIndex(parseInt(currentImageParam, 10))
      : 0;
  }, [searchParams]);

  const handleLeftNavigation = () => {
    const newImageParam = currentImageParam
      ? parseInt(currentImageParam, 10) - 1
      : 0;
    router.push(`${pathname}?image=${newImageParam}`, { scroll: false });
  };

  const handleRightNavigation = () => {
    if (currentImageIndex < photoArrayLength) {
      const newImageParam = currentImageParam
        ? parseInt(currentImageParam, 10) + 1
        : 0;
      router.push(`${pathname}?image=${newImageParam}`, { scroll: false });
    } else {
      return;
    }
  };

  const isLeftArrowVisible = currentImageIndex !== 1;
  const isRightArrowVisible = currentImageIndex !== photoArrayLength;

  const handleClose = () => {
    setIsOpen(false);
    const params = new URLSearchParams(searchParams);
    params.delete('image');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className='fixed inset-0 z-10 sm:flex hidden items-center justify-center p-4'
    >
      <div className='fixed inset-0 bg-black/75' aria-hidden='true' />
      <Dialog.Panel className={`w-full flex items-center justify-between`}>
        {isLeftArrowVisible && (
          <button className='z-[100] text-white' onClick={handleLeftNavigation}>
            <Image
              src={LeftArrowIcon}
              alt='Ikonka strzałki w lewo'
              className='w-10 opacity-90 hover:scale-110 transform transition-all'
            />
          </button>
        )}
        {!isLeftArrowVisible && <div className='w-10'></div>}
        <div className='transform overflow-hidden rounded-2xl p-2 text-left align-middle transition-all'>
          <div className='flex flex-col'>
            <button className='self-end' onClick={handleClose}>
              <Image
                src={CloseIcon}
                alt='Ikonka X'
                className='w-8 pb-2 hover:scale-110 transform transition-all opacity-90'
              />
            </button>
            <div className='w-full box-border'>{children}</div>
          </div>
        </div>
        {isRightArrowVisible && (
          <button
            className='z-[100] text-white'
            onClick={handleRightNavigation}
          >
            <Image
              src={RightArrowIcon}
              alt='Ikonka strzałki w prawo'
              className='w-10 opacity-90 hover:scale-110 transform transition-all'
            />
          </button>
        )}
        {!isRightArrowVisible && <div className='w-10'></div>}
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;

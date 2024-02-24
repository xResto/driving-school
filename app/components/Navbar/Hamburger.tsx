'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { useMainContext } from '../store/MainContext';


const Hamburger = () => {
  const { isMenuOpen, setIsMenuOpen } = useMainContext();

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
      }}
    >
      <motion.button
        className='py-3 px-4'
        aria-controls='primary-navigation'
        onClick={() => setIsMenuOpen((prev) => !prev)}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <motion.div className='md:hidden relative w-6 h-5'>
          <motion.span
            className='absolute h-[2px] w-full bg-white/90'
            style={{ left: '50%', top: '35%', x: '-50%', y: '-50%' }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['10%', '50%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '10%'],
              },
            }}
          ></motion.span>
          <motion.span
            className='absolute h-[2px] w-full bg-white/90'
            style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
            variants={{ open: { opacity: 0 }, closed: { opacity: 100 } }}
          ></motion.span>
          <motion.span
            className='absolute h-[2px] w-full bg-white/90'
            style={{ left: '50%', top: '65%', x: '-50%', y: '-50%' }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
                top: ['90%', '50%', '50%'],
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
                top: ['50%', '50%', '90%'],
              },
            }}
          ></motion.span>
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default Hamburger;

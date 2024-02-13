'use client'
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WhyWojtekImg = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <motion.img
      ref={ref}
      src='/peugeot1.webp'
      width={1920}
      height={1440}
      loading='lazy'
      alt='driving'
      style={{
        clipPath: 'polygon(0 12.8%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      className='w-[40rem]'
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    />
  );
};

export default WhyWojtekImg;

'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const DivYAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <div ref={ref} className='absolute'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DivYAnimation;

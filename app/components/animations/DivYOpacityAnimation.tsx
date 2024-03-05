'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface DivYAnimationProps {
  absolute?: string;
  delay?: number;
  minW?: string;
  additionalStyles?: string;
  children: React.ReactNode;
}

const DivYAnimation = ({
  absolute = '',
  delay = 0.15,
  minW = 'min-[529px]:w-auto w-full',
  additionalStyles = '',
  children,
}: DivYAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className={`${absolute} ${minW} ${additionalStyles}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.75, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DivYAnimation;

'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface DivOpacityAnimationProps {
  delay?: number;
  duration?: number;
}

const DivOpacityAnimation = ({
  delay = 0.25,
  duration = 1,
  children,
}: DivOpacityAnimationProps & { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default DivOpacityAnimation;

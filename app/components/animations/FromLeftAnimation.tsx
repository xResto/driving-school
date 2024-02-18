'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface GrowFromLeftAnimationProps {
  duration?: number;
}

const FromLeftAnimation = ({
  duration = 0.6,
  children,
}: GrowFromLeftAnimationProps & { children: React.ReactNode }) => {
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
          hidden: { x: -25 },
          visible: { x: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FromLeftAnimation;

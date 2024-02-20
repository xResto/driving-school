'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface GrowAnimationProps {
  duration?: number;
}

const GrowAnimation = ({
  duration = .75,
  children,
}: GrowAnimationProps & { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1},
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: duration, delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GrowAnimation;

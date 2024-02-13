'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ScaleFromMiddleAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
          hidden: { scale: 0, y: 200 },
          visible: { scale: 1, y: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: .75, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScaleFromMiddleAnimation;

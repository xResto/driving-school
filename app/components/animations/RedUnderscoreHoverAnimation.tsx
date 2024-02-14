import React from 'react';
import { motion } from 'framer-motion';

interface RedUnderscoreHoverAnimationProps {
  currentPath: string;
  thisPath: string;
  children: React.ReactNode;
}

const RedUnderscoreHoverAnimation = ({
  currentPath,
  thisPath,
  children,
}: RedUnderscoreHoverAnimationProps) => {
  const variants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  return (
    <motion.li className='relative py-2' initial='hidden' whileHover='visible'>
      {children}
      {currentPath !== thisPath && (
        <motion.div
          variants={variants}
          transition={{ duration: 0.4 }}
          className='absolute bottom-0 left-0 border-b-2 border-[#CE2029]'
        />
      )}
    </motion.li>
  );
};

export default RedUnderscoreHoverAnimation;

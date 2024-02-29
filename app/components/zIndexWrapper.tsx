'use client';

import React from 'react';
import { useMainContext } from './store/MainContext';

const ZIndexWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isMenuOpen } = useMainContext();

  return (
    <div
      style={
        isMenuOpen
          ? { position: 'relative', zIndex: '-10' }
          : { position: 'static', zIndex: '0' }
      }
    >
      {children}
    </div>
  );
};

export default ZIndexWrapper;

'use client';

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 100: 1, 640: 2, 950: 3, 1280: 4 }}
    >
      <Masonry gutter='1rem'>{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryWrapper;

import React from 'react';
import DivOpacityAnimation from './animations/DivOpacityAnimation';

const Video = () => {
  return (
    <div className='relative bg-[#f5f5f5]'>
      <video muted loop autoPlay disablePictureInPicture>
        <source src='/driving-cut.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 flex justify-center items-center bg-black/50 p-4'>
        <DivOpacityAnimation duration={0.75}>
          <h4 className='text-white text-center sm:p-4 min-[384px]:p-3 p-2 lg:text-4xl md:text-3xl sm:text-2xl min-[425px]:text-xl text-lg bg-black/50 rounded-2xl'>
            Osiągnij swój cel - zdaj prawo jazdy z nami!
          </h4>
        </DivOpacityAnimation>
      </div>
    </div>
  );
};

export default Video;

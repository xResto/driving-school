import React from 'react';

const Video = () => {
  return (
    <div className='relative bg-[#f5f5f5]'>
      <video muted loop autoPlay disablePictureInPicture>
        <source src='/driving-cut.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <h4 className='text-white p-4 text-4xl bg-black/50 rounded-2xl'>Osiągnij swój cel - zdaj prawo jazdy z nami!</h4>
      </div>
    </div>
  );
};

export default Video;

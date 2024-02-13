import React from 'react';

const Video = () => {
  return (
    <div className='relative -z-10 pt-36 bg-[#f5f5f5]'>
      <video muted loop autoPlay disablePictureInPicture>
        <source src='/driving-cut.mp4' type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className='bg-black bg-opacity-50 text-white p-4 rounded-md'>
          siema
        </div>
      </div>
    </div>
  );
};

export default Video;

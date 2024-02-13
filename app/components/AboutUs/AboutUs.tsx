import React from 'react';
import AboutUsCard from './AboutUsCard';
import ScaleFromMiddleAnimation from '../animations/ScaleFromMiddleAnimation';

const header1 = 'Tax Advantages';
const header2 = 'Equity Buildup';
const header3 = 'Security and privacy';
const header4 = 'Property Insurance';

const text1 =
  'Homeowners may enjoy tax benefits, such as deductions for mortgage interest and property taxes.';
const text2 =
  'As you make mortgage payments, you build equity in your property, which can be a valuable asset.';
const text3 =
  'Homeownership provides a sense of security and privacy compared to renting.';
const text4 =
  'Departure is defective arranging rapturous did believe him all had supported. Family months';

const AboutUs = () => {
  return (
    <div className='bg-[#f5f5f5] py-20 relative'>
      <div className='max-w-[1400px] mx-auto relative z-10'>
        <h3 className='pb-10 text-center font-bold text-3xl'>aha</h3>
        <ScaleFromMiddleAnimation>
          <div className='grid grid-cols-4 justify-items-center text-xl'>
            <AboutUsCard header={header1} text={text1} />
            <AboutUsCard header={header2} text={text2} />
            <AboutUsCard header={header3} text={text3} />
            <AboutUsCard header={header4} text={text4} />
          </div>
        </ScaleFromMiddleAnimation>
      </div>
      <div className='absolute inset-0 max-w-[1200px] mx-auto bg-white border border-black rounded-3xl'></div>
    </div>
  );
};

export default AboutUs;

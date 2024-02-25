import React from 'react';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const Page = () => {

  return (
    <div className='max-w-[1500px] mx-auto lg:px-0 md:px-20 sm:px-10 px-6'>
      <ContactHeader />
      <ContactForm />
      <DivOpacityAnimation>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.6851768829138!2d21.688003077192036!3d50.57721697161662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d4a101a7375cd%3A0x3b9f3e1d25e4da15!2zT8Wbcm9kZWsgU3prb2xlbmlhIEtpZXJvd2PDs3cgIldPSlRFSyIgc3DDs8WCa2EgY3l3aWxuYQ!5e0!3m2!1spl!2spl!4v1708268217053!5m2!1spl!2spl'
          className='mx-auto lg:w-1/2 w-full rounded-lg my-16'
          height='450'
          loading='lazy'
        ></iframe>
      </DivOpacityAnimation>
    </div>
  );
};

export default Page;

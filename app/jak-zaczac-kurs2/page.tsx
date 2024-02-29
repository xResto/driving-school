import React from 'react';
import { anton } from '../fonts';
import Image from 'next/image';
import RouteImg from '../../public/route.svg';
import Photo from '../../public/photo.svg';
import Doctors from '../../public/doctors.svg';
import Document from '../../public/document.svg';
import LogoW from '../../public/logo-w.webp';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import ZIndexWrapper from '../components/zIndexWrapper';

const HowToStartCourse = () => {
  return (
    <ZIndexWrapper>
      <DivOpacityAnimation delay={0.1}>
        <Image
          src={RouteImg}
          alt='Route'
          className='relative -z-10 opacity-75 w-full 2xl:p-36 min-[1436px]:p-20 p-10 pt-2 mx-auto'
        />
        <div className='flex justify-center items-center mb-40'>
          <div className='absolute z-10 top-[20%] w-[50rem] h-[38rem] bg-white rounded-2xl border-2 border-[#191919] py-6 px-10'>
            <h1
              className={`${anton.className} max-w-64 mx-auto text-4xl text-center pb-2 border-b-2 border-[#CE2029]`}
            >
              Jak zacząć kurs
            </h1>
            <div className='flex flex-col gap-6 text-lg'>
              <div className='flex items-center justify-center gap-4 pt-4'>
                <p>
                  <span className='font-semibold'>Zdjęcie</span> - identyczne
                  jak do dowodu osobistego, powinno być kolorowe i aktualne.
                </p>
                <Image src={Photo} alt='Photo' className='w-24' />
              </div>
              <div className='flex items-center gap-4'>
                <Image src={Doctors} alt='Dwóch lekarzy' className='w-24' />
                <p>
                  <span className='font-semibold'>Badania lekarskie</span> -
                  lekarz uprawniony do badania kierowców wyda orzeczenie o braku
                  przeciwskazań zdrowotnych do kierowania pojazdami. Nie
                  potrzebujesz skierowania, koszt badania zazwyczaj wynosi 200
                  zł.
                </p>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <p>
                  <span className='font-semibold'>PKK</span> - potrzebne Ci
                  będzie wykonane wcześniej zdjęcie oraz badania lekarskie, nie
                  zapomnij także zabrać ze sobą dowodu osobistego lub
                  legitymacji. Uzyskaj numer profilu kandydata na kierowcę:
                  <br />
                  <span>
                    - w urzędzie miasta - jeśli mieszkasz w Tarnobrzegu,
                  </span>
                  <br />
                  <span>
                    - w urzędzie starostwa powiatowego - jeśli mieszkasz poza
                    Tarnobrzegiem.
                  </span>
                  <br />
                </p>
                <Image src={Document} alt='Dokument' className='w-24' />
              </div>
              <div className='flex items-center gap-4'>
                <Image src={LogoW} alt='Logo Wojtek' className='w-24' />
                <p>
                  <span className='font-semibold'>OSK WOJTEK</span> - przyjdź do
                  naszego ośrodka z numerem PKK i rozpocznij kurs na prawo
                  jazdy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </DivOpacityAnimation>
    </ZIndexWrapper>
  );
};

export default HowToStartCourse;

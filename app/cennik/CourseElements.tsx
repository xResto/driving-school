import React from 'react';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';
import { anton } from '../fonts';
import CardWithPhoto from './CardWithPhoto';
import Lecture from '../../public/lecture.webp';
import FirstAid from '../../public/first-aid.webp';
import DrivingPractice from '../../public/driving-practice.webp';
import Exam from '../../public/exam.webp';

const CourseElements = () => {
  return (
    <div className='max-w-[1900px] px-6 mx-auto'>
      <DivYAnimation>
        <h5 className={`${anton.className} pb-14 mx-auto text-center text-4xl`}>
          Co zawiera kurs?
        </h5>
      </DivYAnimation>
      <DivYAnimation>
        <div className='grid xl:grid-cols-4  min-[794px]:grid-cols-2 grid-cols-1 max-xl:place-items-center gap-5 mx-auto pb-20 sm:px-0'>
          <CardWithPhoto
            header='Wykłady'
            text={[
              '30 godzin wykładów teoretycznych, prowadzonych stacjonarnie.',
              'Materiały dydaktyczne - książka i płyta z aktualną bazą pytań egzaminacyjncyh.',
            ]}
            imgSrc={Lecture}
            textAlignment='left'
            cardWidth='min-[794px]:max-w-[27rem] max-[794px]:max-w-[30rem]'
            cardHeight='h-[26rem] max-[1545px]:h-[32rem] max-[1366px]:h-[36rem] max-xl:h-[27rem] max-[794px]:h-[26rem]'
            photoHeight='h-1/3'
            placeSelf='max-[794px]:place-self-center min-[794px]:place-self-end max-xl:place-self-end'
          />
          <CardWithPhoto
            header='Pierwsza pomoc'
            text={[
              'Szkolenie z ratownikiem medycznym dotyczące udzielania pierwszej pomocy przedmedycznej, ze szczególnym uwzględnieniem wypadków drogowych.',
            ]}
            imgSrc={FirstAid}
            textAlignment='left'
            cardWidth='min-[794px]:max-w-[27rem] max-[794px]:max-w-[30rem]'
            cardHeight='h-[26rem] max-[1545px]:h-[32rem] max-[1366px]:h-[36rem] max-xl:h-[27rem] max-[794px]:h-[26rem]'
            photoHeight='h-1/3'
            placeSelf='max-[794px]:place-self-center min-[794px]:place-self-start max-xl:place-self-start'
          />
          <CardWithPhoto
            header='Zajęcia praktyczne'
            text={[
              'Szkolenie obejmuje 30 godzin jazdy praktycznej na kat. B, podczas którego nauczysz się m.in.:',
              '- podstawowych umiejętności prowadzenia pojazdu,',
              '- bezpiecznej jazdy w ruchu drogowym,',
              '- reakcji na sytuacje awaryjne.',
            ]}
            imgSrc={DrivingPractice}
            textAlignment='left'
            cardWidth='min-[794px]:max-w-[27rem] max-[794px]:max-w-[30rem]'
            cardHeight='h-[26rem] max-[1545px]:h-[32rem] max-[1366px]:h-[36rem] max-xl:h-[27rem] max-[794px]:h-[26rem]'
            photoHeight='h-1/3'
            placeSelf='max-[794px]:place-self-center min-[794px]:place-self-end max-xl:place-self-end'
          />
          <CardWithPhoto
            header='Egzamin wewnętrzny'
            text={[
              '- Egzamin teoretyczny w formie testu.',
              '- Egzamin praktyczny, przeprowadzany przez instruktora prowadzącego zajęcia.',
              'Egzamin można zdadawć dowolną ilość razy, dzięki czemu kursant ma możliwość zapoznania się z warunkami egzaminu.',
            ]}
            imgSrc={Exam}
            objectPosition='object-bottom'
            textAlignment='left'
            cardWidth='min-[794px]:max-w-[27rem] max-[794px]:max-w-[30rem]'
            cardHeight='h-[26rem] max-[1545px]:h-[32rem] max-[1366px]:h-[36rem] max-xl:h-[27rem] max-[794px]:h-[26rem]'
            photoHeight='h-1/3'
            placeSelf='max-[794px]:place-self-center min-[794px]:place-self-start max-xl:place-self-start'
          />
        </div>
      </DivYAnimation>
    </div>
  );
};

export default CourseElements;

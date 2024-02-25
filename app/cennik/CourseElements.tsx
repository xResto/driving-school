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
    <div className='px-6 mx-auto'>
      <DivYAnimation>
        <h5 className={`${anton.className} pb-14 mx-auto text-center text-4xl`}>
          Co zawiera kurs?
        </h5>
      </DivYAnimation>
      <DivYAnimation>
        <div className='grid min-[1339px]:grid-cols-4 min-[795px]:grid-cols-2 grid-cols-1 max-xl:place-items-center min-[1339px]:gap-5 min-[1101px]:gap-10 gap-5 mx-auto pb-20 sm:px-0'>
          <CardWithPhoto
            header='Wykłady'
            text={[
              '30 godzin wykładów teoretycznych, prowadzonych stacjonarnie.',
              'Materiały dydaktyczne - książka i płyta z aktualną bazą pytań egzaminacyjncych.',
            ]}
            imgSrc={Lecture}
            textAlignment='left'
            cardWidth='min-[1101px]:max-w-[30rem] min-[795px]:max-w-[27rem] max-w-[30rem]'
            cardHeight = 'min-[1546px]:h-[26rem] min-[1339px]:h-[32rem] min-[795px]:h-[21rem] max-h-[32rem]'
            photoHeight='max-h-[9rem] min-[1339px]:h-1/3 min-[795px]:h-1/2 h-1/3'
            placeSelf='max-[794px]:place-self-center min-[1339px]:place-self-center max-[1339px]:place-self-end'
          />
          <CardWithPhoto
            header='Pierwsza pomoc'
            text={[
              'Szkolenie z ratownikiem medycznym dotyczące udzielania pierwszej pomocy przedmedycznej, ze szczególnym uwzględnieniem wypadków drogowych.',
            ]}
            imgSrc={FirstAid}
            textAlignment='left'
            cardWidth='min-[1101px]:max-w-[30rem] min-[795px]:max-w-[27rem] max-w-[30rem]'
            cardHeight = 'min-[1546px]:h-[26rem] min-[1339px]:h-[32rem] min-[795px]:h-[21rem] max-h-[32rem]'
            photoHeight='max-h-[9rem] min-[1339px]:h-1/3 min-[795px]:h-1/2 h-1/3'
            placeSelf='max-[794px]:place-self-center min-[1339px]:place-self-center max-[1339px]:place-self-start'
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
            cardWidth='min-[1101px]:max-w-[30rem] min-[795px]:max-w-[27rem] max-w-[30rem]'
            photoHeight='max-h-[9rem] h-1/3'
            placeSelf='max-[794px]:place-self-center min-[1339px]:place-self-center max-[1339px]:place-self-end'
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
            cardWidth='min-[1101px]:max-w-[30rem] min-[795px]:max-w-[27rem] max-w-[30rem]'
            photoHeight='max-h-[9rem] h-1/3'
            placeSelf='max-[794px]:place-self-center min-[1339px]:place-self-center max-[1339px]:place-self-start'
          />
        </div>
      </DivYAnimation>
    </div>
  );
};

export default CourseElements;

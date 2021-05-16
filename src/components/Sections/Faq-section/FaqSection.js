import React from 'react';
import { Faq } from './FaqElements';
import { Toggle } from '../../Toggle';
import { AnimateSharedLayout } from 'framer-motion';
const FaqSection = ({ data }) => {
 return (
  <Faq>
   <h2>{data.h2}</h2>
   <AnimateSharedLayout>
    {data.questions.map((question) => {
     return (
      <>
       <Toggle title={question.q}>
        <p>{question.a}</p>
       </Toggle>
      </>
     );
    })}
   </AnimateSharedLayout>
  </Faq>
 );
};

export default FaqSection;

import React from 'react';
import { Faq, Question } from './FaqElements';
const FaqSection = ({ data }) => {
 return (
  <Faq>
   <h2>{data.h2}</h2>
   {data.questions.map((question) => {
    return (
     <>
      <Question>
       <h4>{question.q}</h4>
       <p>{question.a}</p>
       <div className='faq-line'></div>
      </Question>
     </>
    );
   })}
  </Faq>
 );
};

export default FaqSection;

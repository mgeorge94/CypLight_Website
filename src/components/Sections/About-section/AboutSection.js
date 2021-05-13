import React from 'react';
import { Button } from '../../ButtonElements';
import img from '../../../images/me.jpg';
import { motion } from 'framer-motion';
import { Description, Image, AboutContainer } from './AboutSectionElements';

const AboutSection = ({ data }) => {
 return (
  <>
   <AboutContainer>
    <Description>
     <div className='title'>
      <h2>
       {data.h2}{' '}
       <motion.span animate={{ opacity: 1, transition: { duration: 2 } }} initial={{ opacity: 0 }}>
        {data.h2Span}
       </motion.span>
      </h2>
      <p>
       {data.p}
       <span>{data.pSpan}</span>{' '}
      </p>
      <div className='btn-wrapper'>
       <Button>{data.buttonLabel}</Button>
      </div>
     </div>
    </Description>

    <Image>
     <img src={img} alt='me' />
    </Image>
   </AboutContainer>
  </>
 );
};

export default AboutSection;

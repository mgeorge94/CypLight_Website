import React from 'react';
import { Button } from '../../ButtonElements';
import img from '../../../images/me.jpg';
import { motion } from 'framer-motion';
import { Description, Image, AboutContainer } from './AboutSectionElements';

const AboutSection = ({ data }) => {
 const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 4 } },
 };
 const animateContainerTitle = {
  hidden: { x: 100 },
  show: { x: 0, transition: { duration: 1 } },
 };
 return (
  <>
   <AboutContainer>
    <Description>
     <motion.div variants={animateContainerTitle} initial='hidden' animate='show' className='title'>
      <h2>
       {data.h2}{' '}
       <motion.span variants={titleAnimation} initial='hidden' animate='show'>
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
     </motion.div>
    </Description>

    <Image>
     <img src={img} alt='me' />
    </Image>
   </AboutContainer>
  </>
 );
};

export default AboutSection;

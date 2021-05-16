import React from 'react';
import { Button } from '../../ButtonElements';
import img from '../../../images/me.jpg';
import { motion } from 'framer-motion';
import { Description, Image, AboutContainer } from './AboutSectionElements';
import { fade } from '../../Animation';
import { useScroll } from '../../useScroll';
import { containerAnimation, titleAnimation } from '../../Animation';
const AboutSection = ({ data }) => {
 const [element, controls] = useScroll();

 return (
  <>
   <AboutContainer variants={fade} animate={controls} initial='hidden' ref={element}>
    <Description>
     <motion.div variants={containerAnimation} exit='exit' initial='hidden' animate='show' className='title'>
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

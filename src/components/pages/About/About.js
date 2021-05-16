import React from 'react';
import AboutSection from '../../Sections/About-section/AboutSection';
import FaqSection from '../../Sections/Faq-section/FaqSection';
import RoleSection from '../../Sections/Role-section/Role';
import { pageAnimation } from '../../Animation';
import { motion } from 'framer-motion';
const AboutPage = ({ data }) => {
 return (
  <motion.div variants={pageAnimation} initial='hidden' animate='show'>
   <AboutSection data={data[0]} />
   <RoleSection data={data[1]} />
   <FaqSection data={data[2]} />
  </motion.div>
 );
};

export default AboutPage;

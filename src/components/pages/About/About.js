import React from 'react';
import AboutSection from '../../Sections/About-section/AboutSection';
import FaqSection from '../../Sections/Faq-section/FaqSection';
import RoleSection from '../../Sections/Role-section/Role';

const AboutPage = ({ data }) => {
 return (
  <div>
   <AboutSection data={data[0]} />
   <RoleSection data={data[1]} />
   <FaqSection data={data[2]} />
  </div>
 );
};

export default AboutPage;

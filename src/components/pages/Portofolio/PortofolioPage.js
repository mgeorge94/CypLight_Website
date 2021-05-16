import React from 'react';
import { Route, Link } from 'react-router-dom';
import { projects } from './PortofolioData';
import { ProjectsContainer, GridContainer, GridElement } from './PortofolioElements';

import { pageAnimation, gridAnimation, gridElementAnimation, titleAnimation, containerAnimation } from '../../Animation';
import { motion } from 'framer-motion';

const PortofolioPage = () => {
 return (
  <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
   <motion.div variants={gridAnimation} initial='hidden' animate='show'>
    <ProjectsContainer>
     <h2>
      Proiecte la care{' '}
      <motion.span variants={titleAnimation} initial='hidden' animate='show'>
       am lucrat
      </motion.span>
     </h2>
     <motion.div variants={gridAnimation} initial='hidden' animate='show'>
      <GridContainer>
       {projects.map((project) => {
        return (
         <>
          <Link key={project.id} to={project.url} id={project.id}>
           <motion.div
            whileHover={{
             scale: 0.95,
             transition: { duration: 0.5 },
            }}
            variants={gridElementAnimation}
           >
            <GridElement>
             <h6>{project.name}</h6>
             <img src={project.gridPic} alt={project.alt} />
            </GridElement>
           </motion.div>
          </Link>
         </>
        );
       })}
      </GridContainer>
     </motion.div>
    </ProjectsContainer>
   </motion.div>
  </motion.div>
 );
};

export default PortofolioPage;

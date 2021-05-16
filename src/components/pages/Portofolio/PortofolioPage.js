import React from 'react';
import { Link, Route } from 'react-router-dom';
import { projects } from './PortofolioData';
import { ProjectsContainer, GridContainer, GridElement } from './PortofolioElements';
import { motion } from 'framer-motion';

const PortofolioPage = () => {
 const AnimatePage = {
  hidden: { y: 1000 },
  show: { y: 0, transition: { duration: 1 } },
 };
 const AnimateGrid = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
 };
 const AnimateGridElement = {
  hidden: { x: 1000, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
 };
 return (
  <motion.div variants={AnimatePage} initial='hidden' animate='show'>
   <ProjectsContainer>
    <h2>
     Proiecte la care <span>am lucrat</span>
    </h2>
    <motion.div variants={AnimateGrid} initial='hidden' animate='show'>
     <GridContainer>
      {projects.map((project) => {
       return (
        <>
         <Link to='/details'>
          <motion.div
           whileHover={{
            scale: 0.95,
            transition: { duration: 0.5 },
           }}
           variants={AnimateGridElement}
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
 );
};

export default PortofolioPage;

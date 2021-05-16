import React, { useState, useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import { projects } from './PortofolioData';
import { DetailsContainer, SliderContainer } from './ProjectDetailsElements';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { titleAnimation, containerAnimation, pageAnimation, fade } from '../../Animation';
const ProjectDetails = ({ active }) => {
 //get url location
 const history = useHistory();
 const url = history.location.pathname;
 const [theProjects, setTheProjects] = useState(projects);
 const [project, setProject] = useState(null);

 useEffect(() => {
  const currentProject = theProjects.filter((projects) => projects.url === url);
  setProject(currentProject[0]);
 }, [theProjects, url]);

 let slides;
 if (project !== null) {
  slides = project.pictures.map((img) => {
   return <img src={img} alt={project.alt} />;
  });
 }
 //page Animation

 return (
  <>
   {project && (
    <DetailsContainer exit='exit' variants={pageAnimation} initial='hidden' animate='show' className='details-container'>
     <motion.h2 variants={titleAnimation} initial='hidden' animate='show'>
      {project.name}
     </motion.h2>
     <motion.p variants={fade} initial='hidden' animate='show' variants={containerAnimation} initial='hidden' animate='show'>
      {project.description}
     </motion.p>

     <SliderContainer variants={fade} initial='hidden' animate='show' variants={fade} initial='hidden' animate='show'>
      <Carousel slides={slides} />
     </SliderContainer>

     <h4>
      De ce să îți montezi <span>{project.alt} </span>?
     </h4>
     <ol>
      {project.avantaje.map((avantaj, index) => {
       return <li key={index}>{avantaj}</li>;
      })}
     </ol>
    </DetailsContainer>
   )}
  </>
 );
};

export default ProjectDetails;

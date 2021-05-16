import React, { useState, useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import { projects } from './PortofolioData';
import { DetailsContainer, SliderContainer } from './ProjectDetailsElements';
import { useHistory } from 'react-router-dom';

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
 // set Hide class

 return (
  <>
   {project && (
    <DetailsContainer className='details-container'>
     <h2>{project.name}</h2>

     <SliderContainer>
      <Carousel slides={slides} autoplay={true} interval={2000} />
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

import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './PortofolioData';
import { ProjectsContainer, Image, GridContainer, GridElement } from './PortofolioElements';
const PortofolioPage = () => {
 return (
  <>
   {projects.map((project) => {
    return (
     <>
      <ProjectsContainer>
       <h2>Proiecte la care am lucrat</h2>

       <GridContainer>
        <GridElement>
         <h6>Navigatii</h6>

         <img src={project.pictures[0]} alt='hjhk' />
        </GridElement>
        <GridElement>
         <h6>Foot-well lights</h6>

         <img src={project.pictures[0]} alt='hjhk' />
        </GridElement>
        <GridElement>
         <h6>lumini interioare</h6>

         <img src={project.pictures[0]} alt='hjhk' />
        </GridElement>
        <GridElement>
         <h6>Leduri</h6>

         <img src={project.pictures[0]} alt='hjhk' />
        </GridElement>
        <GridElement>
         <h6>Boxe</h6>

         <img src={project.pictures[0]} alt='hjhk' />
        </GridElement>
       </GridContainer>
      </ProjectsContainer>
     </>
     //  <div>
     //   <h2>{project.name}</h2>
     //   {project.pictures.map((picture, index) => {
     //    return <Image src={project.pictures[index]} alt=' car head-unit' />;
     //   })}
     //  </div>
    );
   })}
  </>
 );
};

export default PortofolioPage;

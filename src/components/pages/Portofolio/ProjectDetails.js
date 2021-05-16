import React from 'react';
import { Carousel } from '3d-react-carousal';
import { projects } from './PortofolioData';
import { DetailsContainer, SliderContainer } from './ProjectDetailsElements';

const ProjectDetails = () => {
 const slides = projects[0].pictures.map((img) => {
  return <img src={img} alt={projects[0]} />;
 });

 return (
  <DetailsContainer>
   <h2>Navigații</h2>

   <SliderContainer>
    <Carousel slides={slides} />
   </SliderContainer>
   <h4>De ce să îți montezi?</h4>
   <ol>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores laudantium ducimus delectus od</li>
   </ol>
  </DetailsContainer>
 );
};

export default ProjectDetails;

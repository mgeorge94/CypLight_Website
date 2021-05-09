import React from 'react';
import { SectionContainer, Header } from './SectionElements';
import { Data } from './SectionData';
const Section = ({ active, toggleClass }) => {
 const sections = document.querySelectorAll('.section');
 const goToSection = () => {
  sections.forEach((section) => {
   if (active === 'active') {
    section.addEventListener('click', toggleClass());
   }
  });
 };
 const scrollDownOnPage = () => {
  sections.forEach((section) => {
   if (section.classList.contains('first')) {
    section.style.transform = 'perspective(1300px) translateZ(500px) rotateY(20deg) scale(0.6) translateY(300%)';
   }
   if (section.classList.contains('second')) {
    section.classList.replace('second', 'first');
   }
   if (section.classList.contains('third')) {
    section.classList.replace('third', 'second');
   }
   if (section.classList.contains('fourth')) {
    section.classList.replace('fourth', 'third');
   }
   if (section.classList.contains('fifth')) {
    section.classList.replace('fifth', 'fourth');
   }
  });
 };

 function detectMouseWheelDirection(e) {
  var delta = null,
   direction = false;
  if (!e) {
   // if the event is not provided, we get it from the window object
   e = window.event;
  }
  if (e.wheelDelta) {
   // will work in most cases
   delta = e.wheelDelta / 60;
  } else if (e.detail) {
   // fallback for Firefox
   delta = -e.detail / 2;
  }
  if (delta !== null) {
   direction = delta > 0 ? 'up' : 'down';
  }

  return direction;
 }
 function handleMouseWheelDirection(direction) {
  // see the direction in the console
  if (direction == 'down') {
   // do something, like show the next page
   scrollDownOnPage();
  } else if (direction == 'up') {
   // do something, like show the previous page
  } else {
   // this means the direction of the mouse wheel could not be determined
  }
 }
 document.onmousewheel = function (e) {
  handleMouseWheelDirection(detectMouseWheelDirection(e));
 };
 if (window.addEventListener) {
  document.addEventListener('DOMMouseScroll', function (e) {
   handleMouseWheelDirection(detectMouseWheelDirection(e));
  });
 }

 return (
  <>
   {Data.map((data) => {
    return (
     <SectionContainer onClick={goToSection} key={data.id} className={active + data.class}>
      <Header>
       <h2 className='title'>{data.h1}</h2>
       <p>{data.p}</p>
      </Header>
     </SectionContainer>
    );
   })}
  </>
 );
};

export default Section;

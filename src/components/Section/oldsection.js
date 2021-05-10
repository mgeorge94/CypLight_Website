import React from 'react';
import { SectionContainer, Header } from './SectionElements';
import { Data } from './SectionData';
const Section = ({ active, toggleClass }) => {
 const sections = document.querySelectorAll('.section');

 const goToSection = () => {
  sections.forEach((section) => {
   if (active === 'active') {
    section.addEventListener('click', () => {
     toggleClass();

     section.classList.replace('active', 'normal');
    });
   }
  });
 };
 // make array of classes

 let classesArr = [];
 let reverseClassesArr;
 const pushClasses = () => {
  sections.forEach((section) => {
   for (let i = 0; i < Data.length; i++) {
    if (!classesArr.includes(Data[i].class)) {
     classesArr.push(Data[i].class);
    }
   }
  });
  console.log(classesArr);
  //   reverseClassesArr = classesArr.reverse();
 };

 const scrollThroughNav = (arr) => {
  pushClasses();
  for (let i = 0; i < Data.length; i++) {
   sections.forEach((section) => {
    if (i <= 5) {
     if (!section.classList.contains('first')) {
      section.classList.replace(arr[i + 1], arr[i]);
     } else {
      //   section.classList.replace('first', 'passed');
      section.style.transform = 'perspective(1800px) translateZ(10px) rotateY(20deg) scale(0.7) translateX(10%)';
     }
    }
   });
  }
 };
 scrollThroughNav(classesArr);

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
  if (direction === 'down') {
   // do something, like show the next page
   //   scrollDownOnPage();
   scrollThroughNav(classesArr);
  } else if (direction === 'up') {
   // do something, like show the previous page
   //    scrollThroughNav(classesArr.reverse());
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
     <SectionContainer onClick={goToSection} key={data.id} className={'section ' + active + data.class}>
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

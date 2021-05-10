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
 let index = 0;
 let counter = -1;

 const pushClasses = () => {
  sections.forEach((section) => {
   for (let i = 0; i < Data.length; i++) {
    if (!classesArr.includes(Data[i].class)) {
     classesArr.push(Data[i].class);
    }
   }
  });

  //   reverseClassesArr = classesArr.reverse();
 };
 const scrollThroughNav = () => {
  pushClasses();
  for (let i = 0; i < Data.length; i++) {
   if (i > Data.length - 1) i = 0;
   if (i < 0) i = Data.length - 1;

   sections[i].classList.replace(classesArr[i], classesArr[i - 1]);
  }
  sections.forEach((section) => {
   //!if arrived at the end go back
   if (index > Data.length - 1) index = 0;
   if (index < 0) index = Data.length - 1;
   console.log(classesArr);

   //    if (section.classList.contains('first')) {
   //     section.style.transform = 'perspective(1800px) translateZ(10px) rotateY(20deg) scale(0.7) translateX(10%)';
   //    }

   //    if (section.classList.contains('first')) {
   //     section.style.transform = 'perspective(1300px) translateZ(500px) rotateY(20deg) scale(0.6) translateX(300%)';
   //     setTimeout(() => {
   //      section.classList.replace('first', 'fifth');
   //     }, 100);
   //    }
   //    if (section.classList.contains('second')) {
   //     section.classList.replace('second', 'first');
   //    }
   //    if (section.classList.contains('third')) {
   //     section.classList.replace('third', 'second');
   //    }
   //    if (section.classList.contains('fourth')) {
   //     section.classList.replace('fourth', 'third');
   //    }
   //    if (section.classList.contains('fifth')) {
   //     section.classList.replace('fifth', 'fourth');
   //    }
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
  if (direction === 'down') {
   // do something, like show the next page
   //    index++;
   scrollThroughNav();
  } else if (direction === 'up') {
   // do something, like show the previous page
   //    index--;
   scrollThroughNav();
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

import React from 'react';
import { SectionContainer, Header } from './SectionElements';
import { Data } from './SectionData';
const Section = ({ active, toggleClass }) => {
 const sections = Array.from(document.querySelectorAll('.section'));

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
 let index = 0;

 const pushClasses = () => {
  sections.forEach((section) => {
   for (let i = 0; i < Data.length; i++) {
    if (!classesArr.includes(Data[i].class)) {
     classesArr.push(Data[i].class);
    }
   }
  });

  reverseClassesArr = classesArr.reverse();
 };
 const scrollThroughNav = (arr) => {
  pushClasses();
  //  !de ce varianta asta nu merge
  //   for (let i = 0; i < Data.length; i++) {
  //    if (i > Data.length - 1) i = 0;
  //    if (i < 0) i = Data.length - 1;

  //    if (sections[i].classList.contains('first')) {
  //     sections[i].style.transform = 'perspective(1300px) translateZ(500px) rotateY(20deg) scale(0.6) translateY(300%)';

  //     sections[i].classList.replace('first', 'fifth');
  //    } else {
  //     sections[i].classList.replace(arr[i], arr[i - 1]);
  //    }
  //   }
  ////////////////////////////////////////////////////////////////
  //  !de ce asta (parca) merge ci cea de mai sus nu
  sections.forEach((section) => {
   //!if arrived at the end go back
   if (index > Data.length - 1) index = 0;
   if (index < 0) index = Data.length - 1;

   if (section.classList.contains('first')) {
    section.style.transform = 'perspective(1300px) translateZ(500px) rotateY(20deg) scale(0.6) translateY(300%)';
    setTimeout(() => {
     section.classList.replace('first', 'fifth');
     //!am setat transform aici simportant pe cele din css ca altfel nu mergea
     section.style.transform = 'perspective(1300px) translateZ(310px) rotateY(20deg) scale(0.5)';
    }, 500);
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
  if (direction === 'down') {
   // do something, like show the next page
   index++;
   scrollThroughNav(classesArr);
  } else if (direction === 'up') {
   // do something, like show the previous page
   index--;
   scrollThroughNav(reverseClassesArr);
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

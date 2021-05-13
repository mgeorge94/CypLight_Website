import React from 'react';
import { SectionContainer, IndividualSection, Header } from './SectionsElements';
import { Data } from './SectionData';
import AboutSection from './About-section/AboutSection';
import Role from './Role-section/Role';
import FaqSection from './Faq-section/FaqSection';
import { Link } from 'react-scroll';
const SectionsContainer = ({ active, toggleClass }) => {
 const sections = document.querySelectorAll('.section');

 ////////////////////////////////////////////////////////////////

 //////////////////////////
 const goToSection = (section) => {
  if (active === 'active') {
   section.addEventListener('click', toggleClass);
  }
 };

 let classesArr = [];
 //  let reverseClassesArr;
 (function pushClasses() {
  sections.forEach((section) => {
   for (let i = 0; i < Data.length; i++) {
    if (!classesArr.includes(Data[i].class)) {
     classesArr.push(Data[i].class);
    }
   }
  });
  console.log(classesArr);
  //   reverseClassesArr = classesArr.reverse();
 })();

 let scrollDownOnPage = () => {
  sections.forEach((section) => {
   if (section.classList.contains('first')) {
    section.classList.replace('first', 'animated');
    // goToSection();

    setTimeout(() => {
     section.classList.replace('animated', 'fifth');
    }, 100);
   }
   if (section.classList.contains('second')) {
    section.classList.replace('second', 'first');
    goToSection(section);
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
 let scrollUpOnPage = () => {
  sections.forEach((section) => {
   if (section.classList.contains('fifth')) {
    section.classList.replace('fifth', 'animated');
    // goToSection(section);
    setTimeout(() => {
     section.classList.replace('animated', 'first');
     goToSection(section);
    }, 100);
   } else if (section.classList.contains('fourth')) {
    section.classList.replace('fourth', 'fifth');
   } else if (section.classList.contains('second')) {
    section.classList.replace('second', 'third');
   } else if (section.classList.contains('third')) {
    section.classList.replace('third', 'fourth');
   } else if (section.classList.contains('first')) {
    section.classList.replace('first', 'second');
   }
  });
 };
 //  // debounce
 let debounce = (fn, delay) => {
  let timer;
  return function () {
   clearTimeout(timer);
   timer = setTimeout(() => {
    fn();
   }, delay);
  };
 };

 scrollDownOnPage = debounce(scrollDownOnPage, 200);

 scrollUpOnPage = debounce(scrollUpOnPage, 200);
 //get the mouse wheel movement
 function detectMouseWheelDirection(e) {
  var delta = null,
   direction = false;
  if (!e) {
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
 //get direction of scrolling
 function handleMouseWheelDirection(direction) {
  if (direction === 'down') {
   scrollDownOnPage();
  } else if (direction === 'up') {
   scrollUpOnPage();
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
   <SectionContainer>
    <Link
     smooth={true}
     duration={500}
     spy={true}
     offset={-80}
     to={Data[0].id}
     exact='true'
     className='section-link'
     key={Data[0].id}
    >
     <IndividualSection id={Data[0].id} className={`section ${active} ${Data[0].class}`}>
      <AboutSection data={Data[0]} />
     </IndividualSection>
    </Link>
    <Link
     smooth={true}
     duration={500}
     spy={true}
     offset={-80}
     to={Data[1].id}
     exact='true'
     className='section-link'
     key={Data[1].id}
    >
     <IndividualSection id={Data[1].id} className={`section ${active} ${Data[1].class}`}>
      <Role data={Data[1]} />
     </IndividualSection>
    </Link>
    <Link
     smooth={true}
     duration={500}
     spy={true}
     offset={-80}
     to={Data[2].id}
     exact='true'
     className='section-link'
     key={Data[2].id}
    >
     <IndividualSection id={Data[2].id} className={`section ${active} ${Data[2].class}`}>
      <FaqSection data={Data[2]} />
     </IndividualSection>
    </Link>
   </SectionContainer>
  </>
 );
};

export default SectionsContainer;

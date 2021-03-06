import React from 'react';
import { SectionContainer, IndividualSection, Header } from './SectionsElements';
import { Data } from './SectionData';
// import AboutSection from './About-section/AboutSection';
// import Role from './Role-section/Role';
// import FaqSection from './Faq-section/FaqSection';
// import { Link } from 'react-scroll';
import ProjectDetails from '../pages/Portofolio/ProjectDetails';
import { BrowserRouter as Router, Route, Link, useLocation, Switch } from 'react-router-dom';
import PortofolioPage from '../pages/Portofolio/PortofolioPage';
import AboutPage from '../pages/About/About';
import ContactPage from '../pages/Contact/ContactPage';
import { AnimatePresence } from 'framer-motion';

const SectionsContainer = ({ active, toggleClass }) => {
 const sections = document.querySelectorAll('.section');
 let exactValue = true;
 (function seeAllPages() {
  if (active === 'active') {
   exactValue = false;
  } else exactValue = true;
 })();
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
  //   reverseClassesArr = classesArr.reverse();
 })();

 let scrollDownOnPage = () => {
  sections.forEach((section) => {
   if (section.classList.contains('first')) {
    section.classList.replace('first', 'animated');
    // goToSection();

    setTimeout(() => {
     section.classList.replace('animated', 'third');
    }, 100);
   }
   if (section.classList.contains('second')) {
    section.classList.replace('second', 'first');
    goToSection(section);
   }
   if (section.classList.contains('third')) {
    section.classList.replace('third', 'second');
   }
   //    if (section.classList.contains('fourth')) {
   //     section.classList.replace('fourth', 'third');
   //    }
   //    if (section.classList.contains('fifth')) {
   //     section.classList.replace('fifth', 'fourth');
   //    }
  });
 };
 let scrollUpOnPage = () => {
  sections.forEach((section) => {
   if (section.classList.contains('third')) {
    section.classList.replace('third', 'animated');
    // goToSection(section);
    setTimeout(() => {
     section.classList.replace('animated', 'first');
     goToSection(section);
    }, 100);
    //    } else if (section.classList.contains('fourth')) {
    //     section.classList.replace('fourth', 'fifth');
   } else if (section.classList.contains('second')) {
    section.classList.replace('second', 'third');
   }
   //    else if (section.classList.contains('third')) {
   //     section.classList.replace('third', 'fourth');
   //    }
   else if (section.classList.contains('first')) {
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
 //check if component is unmounted
 const location = useLocation();
 return (
  <AnimatePresence exitBeforeEnter>
   <Switch Location={location} key={location.pathname}>
    <Router>
     <SectionContainer>
      <Link to='/'>
       <IndividualSection id={Data[3].id} className={`section ${active} first`}>
        <Route exact={exactValue} path='/'>
         <AboutPage data={Data} />
        </Route>
       </IndividualSection>
      </Link>
      <Link to='/portofoliu'>
       <IndividualSection id={Data[0].id} className={`section ${active} second`}>
        <Route exact={exactValue} path='/portofoliu'>
         <PortofolioPage />
        </Route>
       </IndividualSection>
      </Link>{' '}
      <Link to='/contact'>
       <IndividualSection id={Data[0].id} className={`section ${active} third`}>
        <Route exact={exactValue} path='/contact'>
         <ContactPage />
        </Route>
       </IndividualSection>
      </Link>{' '}
      <Route path='/portofoliu/:id' exact>
       <ProjectDetails active={active} />
      </Route>
     </SectionContainer>
    </Router>
   </Switch>
  </AnimatePresence>
 );
};

export default SectionsContainer;

import React, { useState } from 'react';
import { Data } from '../Sections/SectionData';

import SectionsContainer from '../Sections/SectionsContainer';
import { Container, LinksContainer } from './NavElements';
import NavBar from '../NavBar/NavBar';

const NavElements = () => {
 const [active, setActive] = useState('');

 const toggleClass = () => {
  active === 'active' ? setActive('') : setActive('active');
  const container = document.querySelector('.container');
  active === '' ? container.classList.add('active') : container.classList.remove('active');
 };
 // make btns move

 return (
  <>
   <Container className='container'>
    <NavBar toggleClass={toggleClass} />

    <SectionsContainer toggleClass={toggleClass} active={active} />

    <LinksContainer className='links-container'>
     <ul>
      {Data.map((data) => {
       return (
        <li key={data.id} className={`nav-btn-link`} id={data.id}>
         {data.navBtnLabel}
        </li>
       );
      })}
     </ul>
    </LinksContainer>
   </Container>
  </>
 );
};

export default NavElements;

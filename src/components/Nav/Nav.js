import React, { useState } from 'react';

import Section from '../Section/Section';
import { Container, NavBar, Menu, HamburgerMenu, Bar, LinksContainer } from './NavElements';
const NavElements = () => {
 const [active, setActive] = useState('');
 //  const [transform, setTransform] = useState('');
 const toggleClass = () => {
  if (active === 'active') {
   setActive('');
   //    setTransform('transform: perspective(none) translateZ(0px) rotateY(0deg) scale(1) translateY(0)');
  } else {
   setActive('active ');
  }
  const container = document.querySelector('.container');
  active === '' ? container.classList.add('active') : container.classList.remove('active');
 };

 return (
  <>
   <Container className='container'>
    <NavBar>
     <Menu>
      <h3 className='logo'>SomeLogo</h3>
      <HamburgerMenu onClick={toggleClass}>
       <Bar className='bar' />
      </HamburgerMenu>
     </Menu>
    </NavBar>

    <Section toggleClass={toggleClass} active={active} />

    <LinksContainer className='links-container'>
     <ul>
      <li>Cine sunt</li>
      <li>Ce fac</li>
      <li>Portofoliu</li>
      <li>Recenzii</li>
      <li>Contact</li>
     </ul>
    </LinksContainer>
   </Container>
  </>
 );
};

export default NavElements;

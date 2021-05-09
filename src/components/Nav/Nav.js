import React, { useState } from 'react';

import Section from '../Section/Section';
import { Container, NavBar, Menu, HamburgerMenu, Bar, LinksContainer } from './NavElements';
const NavElements = () => {
 const [active, setActive] = useState('');

 const toggleClass = () => {
  active === 'active' ? setActive('') : setActive('active');
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

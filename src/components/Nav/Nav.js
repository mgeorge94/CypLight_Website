import React, { useState } from 'react';
import { Data } from '../Sections/SectionData';
import SectionsContainer from '../Sections/SectionsContainer';
import { Container, NavBar, Menu, HamburgerMenu, Bar, LinksContainer } from './NavElements';
import logo from '../../images/logo.png';
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
    <NavBar className='nav'>
     {/* <h3 className='logo'>SomeLogo</h3> */}
     <img src={logo} alt='logo'></img>
     <HamburgerMenu onClick={toggleClass}>
      <Bar className='bar' />
     </HamburgerMenu>
    </NavBar>

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

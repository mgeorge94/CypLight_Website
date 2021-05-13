import React from 'react';
import logo from '../../images/logo.png';
import { NavBarContainer, Menu, HamburgerMenu, Bar } from './NavBarElements';
const NavBar = ({ toggleClass }) => {
 return (
  <div>
   <NavBarContainer className='nav'>
    {/* <h3 className='logo'>SomeLogo</h3> */}
    <img src={logo} alt='logo'></img>
    <HamburgerMenu onClick={toggleClass}>
     <Bar className='bar' />
    </HamburgerMenu>
   </NavBarContainer>
  </div>
 );
};

export default NavBar;

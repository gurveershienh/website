import React, { useState, useEffect, useInsertionEffect } from 'react'
import {animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavBtnLink
}  from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const hideNav = () => {
      if(window.scrollY >= 1) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',hideNav)}, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav>
            <NavbarContainer>   
                <NavLogo to='/' 
                onClick={toggleHome}>
                  GS</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about'
                              spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'>
                    About
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects" 
                              spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'>
                    Projects
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="resume" 
                              spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'>
                    Resume
                    </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavButton>
                  <NavBtnLink to='/contact' >Contact</NavBtnLink>
                </NavButton>
            </NavbarContainer>
        </Nav>
    </>
  )
};

export default Navbar;
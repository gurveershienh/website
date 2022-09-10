import React from 'react'
import { SidebarContainer, Burger, CloseBurger, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrapper, SidebarButton } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Burger onClick={toggle}>
        </Burger>
    
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}
                            spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'> 
                About
            </SidebarLink>
            <SidebarLink to='projects' onClick={toggle}                               
                            spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'>
                Projects
            </SidebarLink>
            <SidebarLink to='resume' onClick={toggle}                               
                                spy={true} 
                              smooth={true} 
                              duration={500} 
                              offset={-80}
                              exact='true'>
                Resume
            </SidebarLink>


        </SidebarMenu>
        <SidebarBtnWrapper>
            <SidebarButton to='/contact' onClick={toggle}>
                Contact
            </SidebarButton>
        </SidebarBtnWrapper>
    </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
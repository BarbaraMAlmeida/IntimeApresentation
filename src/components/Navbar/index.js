import React from 'react'
import {FaBars} from 'react-icons/fa'
import {FiClock} from 'react-icons/fi'
import { 
    NavbarContainer,
    Nav,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> <FiClock/> InTime</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="service">Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign up</NavLinks>
                    </NavItem>

                    <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                </NavMenu>

               
            </NavbarContainer>
        </Nav>

    </>
  )
}

export default Navbar
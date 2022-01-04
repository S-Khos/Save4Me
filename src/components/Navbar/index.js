import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu} from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import React, {useState, useEffect} from 'react';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY > 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    },[]);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo src={require('../../images/logo.png')}/>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            offset={-80}
                            to="search">Search</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            offset={-80}
                            activeClass='active'
                            to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks                            
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            offset={-80} 
                            to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

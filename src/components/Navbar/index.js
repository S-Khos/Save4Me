import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo src={require('../../images/logo.png')}/>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} to="search">Search</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>    
                <SidebarMenu>
                    <SidebarLink                             
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            to="search" onClick={toggle}>Search</SidebarLink>
                    <SidebarLink                             
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink                             
                            smooth={true} 
                            duration={700}
                            spy={true}
                            exact={true}
                            to="contact" onClick={toggle}> Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

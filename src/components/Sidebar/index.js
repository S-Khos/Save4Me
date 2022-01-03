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
                    <SidebarLink to="search" onClick={toggle}>Search</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}> Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

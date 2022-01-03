import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease-in-out;
    opacity: ${({isOpen}) => isOpen ? '100%' : '0'};
    top: ${({isOpen}) => isOpen ? '0' : '-100%'};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
    font-size: 35px;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    front-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s all ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    &:hover {
        color: #01bf71;
        transition: 0.1s all ease-in-out;
        border-bottom: 2px solid #01bf71;
        border-top: 2px solid #01bf71;
    }

    &:active{
        color: #01bf71;
    }
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 100px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 100px);
    }
`
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background-color: ${({scrollNav}) => (scrollNav ? '#010606' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.4s all ease-in-out;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`
export const NavLogo = styled.img`
    width: 200px;
    height: fit-content;
    margin: auto;
    margin-left: 0;
    margin-right: 0;
    @media screen and (max-width: 768px) {
        width: 155px;
        height: fit-content;
    }
    @media screen and (max-width: 480px) {
        width: 110px;
        height: fit-content;
    }
`

export const MobileIcon = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    ${'' /* margin-right: -0px; */}

    @media screen and (max-width: 768px) {
        display: none;
        transition: 3s all ease-in-out;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    &:hover{
        color: #01bf71;
        transition: 0.1s all ease-in-out;
        border-bottom: 2px solid #01bf71;
        border-top: 2px solid #01bf71;
    }

    ${'' /* &:active{
        color: #01bf71;
        border-bottom: 2px solid #01bf71;
        border-top: 2px solid #01bf71;
        transition: 0.1s all ease-in-out;
    } */}
`
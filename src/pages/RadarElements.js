import styled from 'styled-components';
import {FaCircle} from 'react-icons/fa';
import {Link} from 'react-scroll';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: black;
`

export const MapContainer = styled.div`
    padding: 20px;
    width: 100%;
    height: 900px;
    borderRadius: 800px;
    align-items: center;
    justify-content: center; 
    background-color: black;
`
export const MarkerIcon = styled(FaCircle)`
    color: white;
    font-size: 5rem;
`

export const Button = styled(Link)`
    background-color: #01bf71;
    color: #fff;
    align-text: center;
    justify-content: center;
    border-radius: .7rem;
    cursor: pointer;
    white-space: nowrap;
    height: 48px;
    padding: 13px;

    &:hover {
        background-color: #026d40;
        transition: 0.3s all ease-in-out;
    }
`
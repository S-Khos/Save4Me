import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    ${'' /* background-color: #133954; */}
    background-color: transparent;
    justify-content: center;
    border-radius: .7rem;
    cursor: pointer;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    white-space: nowrap;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    height: 48px;
    padding: 13px;

    &:hover {
        background-color: #026d40;
        transition: 0.3s all ease-in-out;
    }
    
`
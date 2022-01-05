import styled from 'styled-components';
import {FaSearch, FaArrowDown} from 'react-icons/fa';
import {Link} from 'react-scroll';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 860px;
    position: relative;
    z-index: 1;
`


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    pointer-events: none;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    letter-spacing: 6px;
    color: #fff;
    font-size: 60px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 60px;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
        transition: 0.3s all ease-in-out;
    }

`

export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 24px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        transition: 0.3s all ease-in-out;
    }

`
export const HeroP = styled.p`
    color: #fff;
    font-size: 27px;
    text-align: center;
    margin:auto;
    max-width: 600px;
    margin-bottom: 80px;
    @media screen and (max-width: 768px) {
        font-size: 27px;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        transition: 0.3s all ease-in-out;
    }

`

export const LinkInput = styled.input`
    height: 48px;
    width: 33rem;
    font-size: 160%;
    background-color: transparent;
    text-align: center;
    border: 2px solid white;
    border-radius: .7rem;
    outline: none;
    color: rgb(255, 255, 255);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;

    @media screen and (max-width: 768px) {
        width: 22rem;
        font-size: 120%;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        width: 14rem;
        font-size: 90%;
        transition: 0.3s all ease-in-out;
    }

    ${'' /* border: ${({valid}) => valid ? '2.8px solid rgb(0, 255, 0)' : '2.8px solid rgb(255, 0, 0)'} !important; */}
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Search = styled(FaSearch)`
    color: white;
    font-size: 1.2rem;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const DownloadBtn = styled(Link)`
    background-color: #010606;
    font-size: 1rem;
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

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ScrollWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;

`

export const Scroll = styled(Link)`
    word-wrap: break-word;
    width: fit-content;
    background-color: transparent;
    ${'' /* font-size: 24px; */}
    color: #fff;
    text-align: center;
    align-text: center;
    justify-content: center;
    cursor: pointer;
    height: fit-content;
    padding: 20px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 19px;
        transition: 0.3s all ease-in-out;
    }
`

export const DownArrow = styled(FaArrowDown)`
    color: "#fff";
    font-size: 30px;
    @media screen and (max-width: 768px) {
        font-size: 26px;
        transition: 0.3s all ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
        transition: 0.3s all ease-in-out;
    }
`
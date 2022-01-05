import styled from 'styled-components';
import {Link} from 'react-scroll';
import Divider from '@mui/material/Divider';

export const DownloadContainer = styled.div`
    color: #fff;
    background-color: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

`

export const DownloadWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
    max-width: 1100px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;

`

export const DownloadRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({videoThmbn}) => (videoThmbn ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({videoThmbn}) => (videoThmbn ? `'col1' 'col2'` : `'col2 col2' 'col1 col1'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 40px;
`
export const Separator = styled(Divider)`
    visibility: hidden;
    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`

export const MediaTitle = styled.p`
    color: #010606;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    ${'' /* text-align: center; */}
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 17px;
        margin-bottom: 30px;
    }

`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    font-size: 38px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 38px;
        margin-top: 12px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-top: 12px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 25px;
    line-height: 15px;
    font-weight: 500;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
    border-radius: .2rem;
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
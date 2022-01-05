import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import DownloadSection from '../components/DownloadSection';
import {homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import {downloadSection} from '../components/DownloadSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mediaTitle, setMediaTitle] = useState('');
    const [mediaThumbnail, setMediaThumbnail] = useState('');
    const [mediaResolutions, setMediaResolutions] = useState([]);
    const [mediaID, setMediaID] = useState('');
    const [fetched, setFetched] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        downloadSection.title = mediaTitle;
        downloadSection.img = mediaThumbnail;
        if (downloadSection.title.length > 0 && downloadSection.img.length > 0) {
            setRender(true);
        } else {
            setRender(false);
        }

    },[mediaTitle, mediaThumbnail, mediaResolutions, fetched, render]);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection setMediaID={setMediaID} setMediaResolutions={setMediaResolutions} render={render} setFetched={setFetched} setMediaTitle={setMediaTitle} setMediaThumbnail={setMediaThumbnail}/>
            {render && <DownloadSection mediaID={mediaID} mediaResolutions={mediaResolutions} {...downloadSection}/>}
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            
        </>
    )
}

export default Home

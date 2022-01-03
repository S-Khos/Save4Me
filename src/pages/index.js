import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, downloadSection} from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mediaTitle, setMediaTitle] = useState('test');
    const [mediaThumbnail, setMediaThumbnail] = useState('');
    const [fetched, setFetched] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    downloadSection.topLine = mediaTitle;
    downloadSection.img = mediaThumbnail;

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection setFetched={setFetched} setMediaTitle={setMediaTitle} setMediaThumbnail={setMediaThumbnail}/>
            {fetched && <InfoSection {...downloadSection}/>}
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            
        </>
    )
}

export default Home

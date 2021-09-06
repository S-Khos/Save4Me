import React from 'react'
import yt from './yt_logo.png'
import fb from './fb_logo.png'
import ig from './ig_logo.png'
import './Description.css'

const Description = () => {
    return (
        <div className="Description">
            <h2 id="description-title">Supported Platforms</h2>
            <div className="description-container">
                <div className="description-box">
                    <img id="desc-logo" src={yt}/>
                </div>
                <div className="description-box">
                    <img id="desc-logo" src={fb}/> 
                </div>
                <div className="description-box">
                    <img id="desc-logo" src={ig}/>
                </div>
            </div>
            <p id="description-sentence">By using our converter you can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free - this service works for computers, tablets and mobile devices.</p>
            <p id="description-sentence">To convert a video, copy the YouTube video URL into our converter, choose a format and click the convert button. As soon as the conversion is finished you can download the file by clicking on the download button.</p>
        </div>
    )
}

export default Description

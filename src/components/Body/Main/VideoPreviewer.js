import React from 'react'
import ReactPlayer from 'react-player';
import "./VideoPreviewer.css";

const VideoPreviewer = (props) => {
    return (
        <div id="videoViewer" className="VideoPreviewer hidden">
            <div className="video-container">
                <ReactPlayer light={true} width={300} height={150} url={props.url}/>
            </div>
            <div className="video-desc">
                <h4 id="video-title">Video:</h4>
                <h4 id="video-title">Duration:</h4>
            </div>
        </div>
    )
}

export default VideoPreviewer

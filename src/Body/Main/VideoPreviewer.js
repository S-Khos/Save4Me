
import React from 'react'
import ReactPlayer from 'react-player';
import "./VideoPreviewer.css";

function VideoPreviewer(props) {
    return (
        <div className="VideoPreviewer">
            <div className="video-container">
                <ReactPlayer url={props.url}/>
            </div>
        </div>
    )
}

export default VideoPreviewer
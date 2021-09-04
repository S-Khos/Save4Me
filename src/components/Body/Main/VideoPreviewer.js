import React from 'react'
import ReactPlayer from 'react-player';
import "./VideoPreviewer.css";

const VideoPreviewer = (props) => {
    return (
        <div className="VideoPreviewer">
            <div className="video-container">
                <ReactPlayer width={590} height={340} url={props.url}/>
            </div>
        </div>
    )
}

export default VideoPreviewer

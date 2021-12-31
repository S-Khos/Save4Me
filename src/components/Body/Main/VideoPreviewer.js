import React from 'react'
import "./VideoPreviewer.css";

const VideoPreviewer = (props) => {

    return (
        <div id="videoViewer" className="VideoPreviewer">
            <div id="thumbnail-container">
                <img id="videoThumbnail" src={props.videoThumbnail} atl="Thumbnail"/>
            </div>
            <h4 id="video-title">{props.videoTitle}</h4>
        </div>
    )
}

export default VideoPreviewer

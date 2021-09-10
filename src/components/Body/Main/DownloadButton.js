import React from 'react'
import "./DownloadButton.css";

const DownloadButton = (props) => {
    return (
        <div id="DownloadButton" className="DownloadButton hidden">
            <iframe id="download-buttons" src={`https://api.vevioz.com/@api/button/${props.type}/${props.id}`} scrolling="no"></iframe>
        </div>
    )
}

export default DownloadButton

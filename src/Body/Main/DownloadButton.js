import React from 'react'
import "./DownloadButton.css";

function DownloadButton(props) {
    return (
        <div className="DownloadButton">
            <iframe id="download-buttons" src={`https://api.vevioz.com/@api/button/${props.type}/${props.id}`} scrolling="no"></iframe>
        </div>
    )
}

export default DownloadButton

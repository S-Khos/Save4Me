import React from 'react'
import "./DownloadButton.css";

const DownloadButton = (props) => {
    function SubmitEvent(){
        console.log(props.url);
        window.location.href = `http://localhost:5000/download?URL=${props.url},${props.quality},${props.type}`;
    }
    return (
        <div id="DownloadButton" className="DownloadButton hidden">
            <a id="download-button" onClick={e => SubmitEvent()}>Download File</a>
        </div>
    )
}

export default DownloadButton

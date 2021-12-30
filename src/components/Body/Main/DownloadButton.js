/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios';
import FileDownload from 'js-file-download';
import "./DownloadButton.css";



const DownloadButton = (props) => {


    const SubmitEvent = (e) => {
        e.preventDefault(); 
        // window.location.href = `http://localhost:5000/download?URL=${props.url},${props.quality},${props.type}`;
        axios({
            url: `http://localhost:5000/download?URL=${props.url},${props.quality},${props.type}`,
            method: 'GET',
            responseType: 'blob'
        }).then(res => {
            FileDownload(res.data, "video.mp4");
        })
    }

    return (
        <div id="DownloadButton" className="DownloadButton hidden">
            <a id="download-button" onClick={(e) => SubmitEvent(e)}>Download</a>
        </div>
    )
}

export default DownloadButton

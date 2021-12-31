/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios';
import "./DownloadButton.css";



const DownloadButton = (props) => {


    const SubmitEvent = (e) => {
        e.preventDefault(); 
        axios({
            url: `http://localhost:5000/download?URL=${props.url},${props.quality},${props.type}`,
            method: 'GET',
            responseType: 'blob'
        }).then(res => {
            console.log(res);
        })
    }

    return (
        <div id="DownloadButton" className="DownloadButton">
            <a id="download-button" onClick={(e) => SubmitEvent(e)}>Download File</a>
        </div>
    )
}

export default DownloadButton

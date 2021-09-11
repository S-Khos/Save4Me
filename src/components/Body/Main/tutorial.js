import React from 'react'
import './tutorial.css'

const tutorial = () => {
    return (
        <div className="tutorial">
            <div className="tutorial-container">
                <h2 id="tutorial-title">How to use Save4Me?</h2>
                <ul className="tutorial-list">
                    <li className="tutorial-item">
                        Copy video link from the video source
                    </li>
                    <li className="tutorial-item">
                        Paste video link into the search field
                    </li>
                    <li className="tutorial-item">
                        Choose the desired file format: video (mp4) or audio (mp3)
                    </li>
                    <li className="tutorial-item">
                        Choose the desired file quality: low (144p), medium (360p), high (1080p)
                    </li>
                    <li className="tutorial-item">
                        Press the download button to begin
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default tutorial

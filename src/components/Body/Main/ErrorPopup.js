import React from 'react'
import './ErrorPopup.css';

function ErrorPopup(props) {
    return (props.trigger) ? (
        <div className="ErrorPopup">
            <div className="popup-container">
                <h1 id="popup-header">Invalid URL</h1>
                <p id="popup-text">Please enter a valid URL</p>
                {props.children}
            </div>
        </div>
    ): "";
}

export default ErrorPopup

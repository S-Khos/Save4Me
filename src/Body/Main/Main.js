import './Main.css';
import { FaDownload } from 'react-icons/fa';
import { useState } from "react";

function Body() {
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div className="Body">
      <div className="body-container">
          <form className="input-form" onSubmit={e => e.preventDefault()}>
              <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} type="text" id="link-input" placeholder="Paste valid YouTube link here..."/>
              <a id="submit-button" type="submit"><FaDownload/></a>
          </form>
      </div>
    </div>
  );
}

export default Body;
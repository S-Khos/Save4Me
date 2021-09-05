import './Main.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
import DownloadButton from './DownloadButton';
import SwitchSelector from "react-switch-selector";
import VideoPreviewer from './VideoPreviewer';
import ErrorPopup from './ErrorPopup';
import $ from "jquery"
import axios from 'axios';

function Body() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [propId, setPropId] = useState("");
  const [format, setFormat] = useState("mp3");
  const [quality, setQuality] = useState("med");
  const [search, setSearch] = useState(false);
  const [triggerPopup, setTriggerPopup] = useState(false);

  useEffect(() => {
    setSearch(false);
    var inputArea = document.getElementById('link-input');
    if (videoUrl.includes("https://www.youtube.com/watch?v=")){
      const id = videoUrl.replace("https://www.youtube.com/watch?v=", '');
      if (id && !id.includes(" ")){
        $(inputArea).removeClass('invalid-link');
        $(inputArea).removeClass('regular-link');  
        $(inputArea).addClass('valid-link');
        setVideoId(id);
        console.log(id);
      } else {
        $(inputArea).removeClass('valid-link');
        $(inputArea).removeClass('regular-link');  
        $(inputArea).addClass('invalid-link');
        setVideoId("");
      }
    } else if (videoUrl !== "" && !videoUrl.includes("https://www.youtube.com/watch?v=")) {
      $(inputArea).removeClass('regular-link');
      $(inputArea).removeClass('valid-link');
      $(inputArea).addClass('invalid-link');
      setPropId("");
      setVideoId("");
      console.log("invalid");
    } else if (videoUrl === ""){
      $(inputArea).removeClass('invalid-link');
      $(inputArea).removeClass('valid-link');
      $(inputArea).addClass('regular-link');
      setPropId("");
      setVideoId("");
    }
  },[videoUrl]);

  const formatOptions = [
    {
        label: "Audio",
        value: "mp3",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
        label: "Video",
        value: "videos",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    }
  ];

  const qualityOptions = [
    {
        label: "Low Quality",
        value: "low",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
        label: "Medium Quality",
        value: "med",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
      label: "High Quality",
      value: "high",
      selectedBackgroundColor: "#ffd700",
      selectedFontColor: "#005bbc",
    }
  ];

  const formatOnChange = (downloadType) => {
    console.log(downloadType);
    setFormat(downloadType);
  };

  const qualityOnChange = (qualityType) => {
    console.log(qualityType);
    setQuality(qualityType);
  };

  
  function submit(){
    if (videoId !== ""){
      console.log(search);
      setPropId(videoId);
      setSearch(true);
    } else {
      console.log("no video id");
      setTriggerPopup(!triggerPopup);
    }
  }

  return (
    <div className="Body">
      <div className="body-container">
          <form className="input-form" onSubmit={e => e.preventDefault()}>
              <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} type="text" id="link-input" placeholder="Paste valid link here..."/>
              <a id="input-submit" onClick={e => submit()}>
                <FaSearch id="download-logo"/>
              </a>
              <div id="type-selector">
                <SwitchSelector  
                  fontSize={35} 
                  onChange={formatOnChange}
                  options={formatOptions}
                  backgroundColor={"#005bbc"} 
                  fontColor={"white"}
                  optionBorderRadius={12}
                  wrapperBorderRadius={12}
                  disabled={triggerPopup}
                />
              </div>
              <div id="quality-selector">
                <SwitchSelector
                  fontSize={22.1} 
                  onChange={qualityOnChange}
                  options={qualityOptions}
                  backgroundColor={"#005bbc"} 
                  fontColor={"white"}
                  optionBorderRadius={10}
                  wrapperBorderRadius={10}
                  disabled={triggerPopup}
                />
              </div>
          </form>
          {search ? <VideoPreviewer url={videoUrl}/> : null}
          <div className="downloadButton">
            {search ? <DownloadButton id={propId} type={format}/> : null}
          </div>
          <ErrorPopup trigger={triggerPopup}>
            <button id="popup-close" onClick={e => setTriggerPopup(!triggerPopup)} >Okay</button>
          </ErrorPopup>
      </div>
    </div>
  );
}

export default Body;
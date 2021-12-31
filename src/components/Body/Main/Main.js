/* eslint-disable jsx-a11y/anchor-is-valid */
import './Main.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
import DownloadButton from './DownloadButton';
import SwitchSelector from "react-switch-selector";
import VideoPreviewer from './VideoPreviewer';
import ErrorPopup from './ErrorPopup';
import Description from './Description';
import Tutorial from './tutorial';
import $ from "jquery"
import axios from 'axios';

function Body() {
  
  var videoViewer = document.getElementById('videoViewer');
  var downloadButton = document.getElementById('DownloadButton');
  const [videoUrl, setVideoUrl] = useState("");
  const [videoID, setVideoID] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoThumbnail, setVideoThumbnail] = useState("");
  const [valid, setValid] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [format, setFormat] = useState("audioonly");
  const [quality, setQuality] = useState("135");
  const [search, setSearch] = useState(false);
  const [triggerPopup, setTriggerPopup] = useState(false);
  const acceptedUrl = ['instagram', 'youtube', 'https://fb.watch/'];

  useEffect(() => {
    setSearch(false);
    var inputArea = document.getElementById('link-input');
    var site = videoUrl.split(".")[1];

    if (acceptedUrl.includes(site) && videoUrl.length > 0) {
        $(inputArea).removeClass('invalid-link');
        $(inputArea).removeClass('regular-link');  
        $(inputArea).addClass('valid-link');
        setValid(true);
        if (videoUrl.includes('?') && videoUrl.includes('=')) {
          let videoId = videoUrl.split("?")[1];
          setVideoID(videoId.split("=")[1]);
        }

    } else if(!acceptedUrl.includes(site) && videoUrl.length > 0) {
        $(inputArea).removeClass('valid-link');
        $(inputArea).removeClass('regular-link');
        $(inputArea).addClass('invalid-link');
        $(videoViewer).addClass("hidden");
        $(downloadButton).addClass("hidden");
        setValid(false);
        setFetched(false);

    } else if (videoUrl.length === 0) {
        $(inputArea).removeClass('invalid-link');
        $(inputArea).removeClass('valid-link');  
        $(inputArea).addClass('regular-link');
        $(inputArea).removeClass('invalid-link');
        $(inputArea).removeClass('valid-link');
        $(inputArea).addClass('regular-link');
        $(videoViewer).addClass("hidden");
        $(downloadButton).addClass("hidden");
        setValid(false);
        setFetched(false);
    }
  },[videoUrl]);

  const formatOptions = [
    {
        label: "Audio",
        value: "audioonly",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
        label: "Video",
        value: "mp4",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    }
  ];

  const qualityOptions = [
    {
        label: "Low",
        value: "lowest",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
        label: "Medium",
        value: "135",
        selectedBackgroundColor: "#ffd700",
        selectedFontColor: "#005bbc",
    },
    {
      label: "High",
      value: "highest",
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

  
  const submit = () => {
    if (valid){
      axios.get(`https://save4me-fetch-api.herokuapp.com/api/video?id=${videoID}`)
      .then(res => {
        setVideoTitle(res.data.title);
        setVideoThumbnail(res.data.thumbnailURL);
        setFetched(true);
      })
    } else {
      setTriggerPopup(!triggerPopup);
    }
  }

  return (
    <div className="Body">
      <div className="body-container">
        <Description/>
        <div className="interactive-container">
          <form className="input-form" onSubmit={e => e.preventDefault()}>
            <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} type="text" id="link-input" placeholder="Paste valid link here..."/>
            <a id="input-submit" onClick={() => submit()}>
              <FaSearch id="download-logo"/>
            </a>
            <h2 className="option-labels">Format</h2>
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
            <h2 className="option-labels">Quality</h2>
            <div id="quality-selector">
              <SwitchSelector
                  fontSize={33} 
                  onChange={qualityOnChange}
                  options={qualityOptions}
                  backgroundColor={"#005bbc"} 
                  fontColor={"white"}
                  optionBorderRadius={12}
                  wrapperBorderRadius={12}
                  disabled={triggerPopup}

              />
            </div>
          </form>
          {fetched && <div>
            <VideoPreviewer videoID={videoID} videoTitle={videoTitle} videoThumbnail={videoThumbnail}/>
            <DownloadButton videoID={videoID} type={format} quality={quality}/>
          </div>}
          <ErrorPopup trigger={triggerPopup}>
            <button id="popup-close" onClick={e => setTriggerPopup(!triggerPopup)}>Okay</button>
          </ErrorPopup>
        </div>
        <Tutorial/>
      </div>
    </div>
  );
}

export default Body;
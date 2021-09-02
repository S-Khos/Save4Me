import './Main.css';
import { FaDownload } from 'react-icons/fa';
import { useEffect, useState } from "react";
import DownloadButton from './DownloadButton';
import SwitchSelector from "react-switch-selector";

function Body() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [downloadType, setDownloadType] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", '');
    setVideoId(id);
  },[videoUrl]);

  const options = [
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
  const onChange = (newValue) => {
    console.log(newValue);
    setDownloadType(newValue);
  };

  const initialSelectedIndex = options.findIndex(({value}) => value === "mp3");
  
  return (
    <div className="Body">
      <div className="body-container">
          <form className="input-form" onSubmit={e => e.preventDefault()}>
              <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} type="text" id="link-input" placeholder="Paste valid YouTube link here..."/>
              <SwitchSelector id="type-selector" 
              fontSize={40} 
              onChange={onChange} 
              options={options} 
              initialSelectedIndex={initialSelectedIndex} 
              backgroundColor={"#005bbc"} 
              fontColor={"white"}
              optionBorderRadius={6}
              wrapperBorderRadius={6}
              />
          </form>
          <div className="downloadButton">
            {/* change type to selector */}
            <DownloadButton id={videoId} type="mp3"></DownloadButton>
          </div>
      </div>
    </div>
  );
}

export default Body;
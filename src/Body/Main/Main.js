import './Main.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
import DownloadButton from './DownloadButton';
import SwitchSelector from "react-switch-selector";
import VideoPreviewer from './VideoPreviewer';
import $ from "jquery"

function Body() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [propId, setPropId] = useState("");
  const [downloadType, setDownloadType] = useState("mp3");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    var inputArea = document.getElementById('link-input');
    if (videoUrl.includes("https://www.youtube.com/watch?v=")){
      $(inputArea).removeClass('invalid-link');
      $(inputArea).removeClass('regular-link');  
      $(inputArea).addClass('valid-link');
      const id = videoUrl.replace("https://www.youtube.com/watch?v=", '');
      if (id !== "" || !id.includes(" ")){
        setVideoId(id);
        console.log(id);
      }
    } else if (videoUrl !== "") {
      $(inputArea).removeClass('regular-link');
      $(inputArea).removeClass('valid-link');
      $(inputArea).addClass('invalid-link');
      console.log("invalid");
    } else if (videoUrl === ""){
      $(inputArea).removeClass('invalid-link');
      $(inputArea).removeClass('valid-link');
      $(inputArea).addClass('regular-link');
    }
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

  function submit(){
    if (videoId !== ""){
      console.log(search);
      setPropId(videoId);
      setSearch(true);
    } else {
      console.log("empty video id");
    }
  }  
  return (
    <div className="Body">
      <div className="body-container">
          <form className="input-form" onSubmit={e => e.preventDefault()}>
              <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} type="text" id="link-input" placeholder="Paste valid YouTube link here..."/>
              <a id="input-submit" onClick={e => submit()} >
                <FaSearch id="download-logo"/>
              </a>
              <div id="type-selector">
                <SwitchSelector  
                fontSize={40} 
                onChange={onChange}
                options={options}
                backgroundColor={"#005bbc"} 
                fontColor={"white"}
                optionBorderRadius={6}
                wrapperBorderRadius={6}
                />
              </div>
          </form>
          {search ? <VideoPreviewer url={videoUrl}/> : null}
          <div className="downloadButton">
            {search ? <DownloadButton id={propId} type={downloadType}/> : null}
          </div>
      </div>
    </div>
  );
}

export default Body;
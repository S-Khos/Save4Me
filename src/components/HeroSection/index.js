import { useEffect, useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, LinkInput, HeroBtnWrapper, Search, HeroP } from './HeroElements'
import Video from '../../videos/video1.mp4'
import {Button} from '../ButtonElement'
import $ from "jquery";
import './Main.css';
import axios from 'axios';

const HeroSection = ({setFetched, setMediaTitle, setMediaThumbnail}) => {
  
    var videoViewer = document.getElementById('videoViewer');
    var downloadButton = document.getElementById('DownloadButton');
    
    const [videoUrl, setVideoUrl] = useState("");
    const [videoID, setVideoID] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [videoThumbnail, setVideoThumbnail] = useState("");
    const [valid, setValid] = useState(null);
    const acceptedUrl = ['instagram', 'youtube','reddit'];
  
    useEffect(() => {
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
          setValid(null);
          setFetched(false);
      }
    },[videoUrl]);

    const submit = async () => {
      if (valid){
        await axios.get(`https://save4me-fetch-api.herokuapp.com/api/video?id=${videoID}`)
        .then(res => {
          setVideoTitle(res.data.title);
          setVideoThumbnail(res.data.thumbnailURL);
          setMediaTitle(videoTitle);
          setMediaThumbnail(videoThumbnail);
          console.log(videoTitle, videoThumbnail);
          setFetched(true);
        })
      }
    }
    return (
        <HeroContainer id={'search'}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
              <HeroH1>Media Downloading Made Easy</HeroH1>
              <HeroP>Paste a link from a supported platform to begin</HeroP>
              <form className="input-form" onSubmit={e => e.preventDefault()}>
                <div id="input-container">
                  <LinkInput value={videoUrl} valid={valid} onChange={e => setVideoUrl(e.target.value)} id="link-input" type="text"/>
                  <HeroBtnWrapper>
                    <Button to={'download'} onClick={() => submit()}>
                      <Search />
                    </Button>
                  </HeroBtnWrapper>
                </div>
              </form>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;


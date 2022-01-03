import { useEffect, useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, LinkInput, HeroBtnWrapper, Search, HeroP, ImgWrap, Img, DownloadBtn, BtnWrap } from './HeroElements'
import Video from '../../videos/video1.mp4'
import {Button} from '../ButtonElement'
import $ from "jquery";
import './Main.css';
import axios from 'axios';

const HeroSection = () => {
  
    var videoViewer = document.getElementById('videoViewer');
    var downloadButton = document.getElementById('DownloadButton');
    
    const [videoUrl, setVideoUrl] = useState("");
    const [videoID, setVideoID] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [videoThumbnail, setVideoThumbnail] = useState("");
    const [valid, setValid] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [format, setFormat] = useState("mp3");
    const [quality, setQuality] = useState("135");
    const [search, setSearch] = useState(false);
    const acceptedUrl = ['instagram', 'youtube','reddit'];
  
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
          setValid(null);
          setFetched(false);
      }
    },[videoUrl]);

    const submit = async () => {
      setFetched(true);
      if (valid){
        await axios.get(`https://save4me-fetch-api.herokuapp.com/api/video?id=${videoID}`)
        .then(res => {
          setVideoTitle(res.data.title);
          setVideoThumbnail(res.data.thumbnailURL);
          setFetched(true);
          console.log(videoTitle, videoThumbnail);
        })
      }
    }
    return (
        <HeroContainer id={'search'}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            {!fetched && <HeroContent>
              <HeroH1>Media Downloading Made Easy</HeroH1>
              <HeroP>Paste a link from a supported platform to begin</HeroP>
              <form className="input-form" onSubmit={e => e.preventDefault()}>
                <div id="input-container">
                  <LinkInput value={videoUrl} valid={valid} onChange={e => setVideoUrl(e.target.value)} id="link-input" type="text"/>
                  <HeroBtnWrapper>
                    <Button onClick={() => submit()}>
                      <Search />
                    </Button>
                  </HeroBtnWrapper>
                </div>
              </form>
            </HeroContent>}
            {fetched && 
            <HeroContent>
              <ImgWrap>
                <Img src={videoThumbnail} alt=""/>
              </ImgWrap>
              <HeroP>
                {videoTitle}
              </HeroP>
              <BtnWrap>
                <DownloadBtn onClick={() => setFetched(false)}>Download File</DownloadBtn>
              </BtnWrap>
            </HeroContent>}
        </HeroContainer>
    )
}

export default HeroSection;


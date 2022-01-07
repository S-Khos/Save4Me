/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, LinkInput, HeroBtnWrapper, Search, HeroP, Scroll, ScrollWrap, DownArrow } from './HeroElements'
import Video from '../../videos/video2.mp4'
import {Button} from '../ButtonElement'
import $ from "jquery";
import './Main.css';
import axios from 'axios';

const HeroSection = ({setMediaID, setMediaResolutions, render, setFetched, setMediaTitle, setMediaThumbnail}) => {
    
    const [videoUrl, setVideoUrl] = useState("");
    const [videoID, setVideoID] = useState("");
    const [valid, setValid] = useState(null);
    const acceptedUrl = ['www.instagram.com', 'www.youtube.com','www.reddit.com', 'youtu.be'];
  
    useEffect(() => {
      var inputArea = document.getElementById('link-input');
      var site = videoUrl.split("/")[2];

      if (acceptedUrl.includes(site) && videoUrl.length > 0) {
          $(inputArea).removeClass('invalid-link');
          $(inputArea).removeClass('regular-link');  
          $(inputArea).addClass('valid-link');
          setValid(true);

          if (site === 'youtu.be'){
            setVideoID(videoUrl.split("/")[3]);
            setMediaThumbnail("");
            setMediaTitle("");
            setMediaResolutions([]);

          } else if (videoUrl.includes('?') && videoUrl.includes('=')) {
            let videoId = videoUrl.split("?")[1];
            setVideoID(videoId.split("=")[1]);
            setMediaThumbnail("");
            setMediaTitle("");
            setMediaResolutions([]);
          }
  
      } else if(!acceptedUrl.includes(site) && videoUrl.length > 0) {
          $(inputArea).removeClass('valid-link');
          $(inputArea).removeClass('regular-link');
          $(inputArea).addClass('invalid-link');
          setValid(false);
          setFetched(false);
          setMediaThumbnail("");
          setMediaTitle("");
          setMediaResolutions([]);
  
      } else if (videoUrl.length === 0) {
          $(inputArea).removeClass('invalid-link');
          $(inputArea).removeClass('valid-link');  
          $(inputArea).addClass('regular-link');
          $(inputArea).removeClass('invalid-link');
          $(inputArea).removeClass('valid-link');
          $(inputArea).addClass('regular-link');
          setValid(null);
          setFetched(false);
          setMediaThumbnail("");
          setMediaTitle("");
          setMediaResolutions([]);
      }
    },[videoUrl]);

    const submit = async () => {
      if (valid){
        //http://localhost:5000/api/video?id=${videoID}
        //https://blissful-shore-337401.nn.r.appspot.com/api/video?id=${videoID}
        await axios.get(`https://blissful-shore-337401.nn.r.appspot.com/api/video?id=${videoID}`)
        .then(res => {
          if (res.data.title.length > 0 && res.data.thumbnailURL.length > 0 && res.data.resolutions.length > 0) {
            setMediaTitle(res.data.title);
            setMediaThumbnail(res.data.thumbnailURL);
            setMediaResolutions(res.data.resolutions);
            setMediaID(videoID);
            setFetched(true);
          }
        })
      }
    }
    return (
        <HeroContainer id={'search'}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
              <HeroH1>Media Downloading Made Easy</HeroH1>
              <HeroP>Paste media URL from a supported platform to begin</HeroP>
              <form className="input-form" onSubmit={e => e.preventDefault()}>
                <div id="input-container">
                  <LinkInput value={videoUrl} valid={valid} onChange={e => setVideoUrl(e.target.value)} id="link-input" type="text"/>
                  <HeroBtnWrapper>
                    <Button onClick={() => submit()}>
                      <Search/>
                    </Button>
                  </HeroBtnWrapper>
                </div>
              </form>
              {render && <ScrollWrap>
                <Scroll smooth={true} to={'download'}>
                  <DownArrow/>
                </Scroll>
              </ScrollWrap>}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;


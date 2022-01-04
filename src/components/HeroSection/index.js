import { useEffect, useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, LinkInput, HeroBtnWrapper, Search, HeroP, Scroll, ScrollWrap, DownArrow } from './HeroElements'
import Video from '../../videos/video1.mp4'
import {Button} from '../ButtonElement'
import $ from "jquery";
import './Main.css';
import axios from 'axios';

const HeroSection = ({render, setFetched, setMediaTitle, setMediaThumbnail}) => {
    
    const [videoUrl, setVideoUrl] = useState("");
    const [videoID, setVideoID] = useState("");
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
            setMediaThumbnail("");
            setMediaTitle("");
          }
  
      } else if(!acceptedUrl.includes(site) && videoUrl.length > 0) {
          $(inputArea).removeClass('valid-link');
          $(inputArea).removeClass('regular-link');
          $(inputArea).addClass('invalid-link');
          setValid(false);
          setFetched(false);
          setMediaThumbnail("");
          setMediaTitle("");
  
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
      }
    },[videoUrl]);

    const submit = async () => {
      if (valid){
        await axios.get(`https://save4me-fetch-api.herokuapp.com/api/video?id=${videoID}`)
        .then(res => {
          if (res.data.title.length > 0 && res.data.thumbnailURL.length > 0) {
            setMediaTitle(res.data.title);
            setMediaThumbnail(res.data.thumbnailURL);
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
                  Download
                </Scroll>
                <DownArrow/>
              </ScrollWrap>}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;


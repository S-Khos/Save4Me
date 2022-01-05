import React, {useState} from 'react'
import { DownloadContainer, DownloadRow, DownloadWrapper, TextWrapper, Column1, Column2, MediaTitle, Heading, Subtitle, BtnWrap, Img, ImgWrap, Button, Separator } from './DownloadElements'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const DownloadSection = ({mediaID, mediaResolutions, lightBg, id, videoThmbn, title, lightText, primary, headLine, img, darkText, buttonLabel, alt, includeBtn}) => {
    const [format, setFormat] = useState('video');
    const [quality, setQuality] = useState('144');
    const acceptedResolutions = ['1080p', '720p', '480p', '360p', '240p', '144p','1440p', '2160p'];
    let resolutionsList = [];

    const processResolutions = resolutions => {
        resolutionsList = [];
        resolutions.map((resolution, index) => {
            if (acceptedResolutions.includes(resolution.qualityLabel)){
                if (!resolutionsList.includes(resolution.qualityLabel)){
                    resolutionsList.push(resolution.qualityLabel.split('p')[0]);
                }
            }
            return 1;
        });
    }

    const renderResolutions = resolutions => {
        processResolutions(resolutions);
        resolutionsList.sort();
        return resolutionsList.map((resolution, index) => {
            return (
                <FormControlLabel
                    key={index}
                    value={resolution}
                    control={<Radio color="secondary" onChange={(e) => {setQuality(resolution)}} />}
                    label={`${resolution}p`}
                    checked={quality === resolution}
                />
            )
        });
    }

    const fetchDownload = () => {
        let videoURL = `https://save4me-fetch-api.herokuapp.com/download?id=${mediaID}&format=${format}&resolution=${quality}`;
        let audioURL = `https://save4me-fetch-api.herokuapp.com/download?id=${mediaID}&format=${format}`;
        if (format === 'audio'){
            window.open(audioURL);
        } else {
            window.open(videoURL);
        }
    }

    return (
        <>
            <DownloadContainer lightBg={lightBg} id={id}>
                <DownloadWrapper>
                    <DownloadRow videoThmbn={videoThmbn}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                            </TextWrapper>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>Format</Subtitle>
                                <BtnWrap>
                                    <RadioGroup
                                    sx={{color:"#010606"}}
                                    row 
                                    value={format}
                                    color="primary"
                                    >
                                        <FormControlLabel value="audio" label="Audio" checked={format === 'audio'} control={<Radio color="secondary" onChange={(e) => {setFormat('audio')}} />} />
                                        <FormControlLabel value="video" label="Video" checked={format === 'video'} control={<Radio color="secondary" onChange={(e) => {setFormat('video')}} />} />
                                    </RadioGroup>
                                </BtnWrap>
                                <Subtitle darkText={darkText}>Quality</Subtitle>
                                <BtnWrap>
                                    <RadioGroup
                                    sx={{color:"#010606"}}
                                    row 
                                    value={quality}
                                    color="primary">
                                        {renderResolutions(mediaResolutions)}
                                    </RadioGroup>
                                </BtnWrap>
                                {includeBtn && <BtnWrap>
                                    <Button
                                     primary={primary ? 1 : 0}
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact={true}
                                     offset={-80}
                                     onClick={() => {fetchDownload()}}
                                    >{buttonLabel}</Button>
                            </BtnWrap>}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <MediaTitle>{title}</MediaTitle>
                            <Separator/>
                        </Column2>
                    </DownloadRow>
                </DownloadWrapper>
            </DownloadContainer>
        </>
    )
}

export default DownloadSection

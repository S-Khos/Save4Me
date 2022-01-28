import React, {useState} from 'react'
import { DownloadContainer, DownloadRow, DownloadWrapper, TextWrapper, Column1, Column2, MediaTitle, Heading, Subtitle, BtnWrap, Img, ImgWrap, Button, Separator } from './DownloadElements'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import JsFileDownloader from 'js-file-downloader';
import { useLoading, ThreeDots } from '@agney/react-loading';

const DownloadSection = ({mediaID, mediaResolutions, lightBg, id, videoThmbn, title, lightText, primary, headLine, img, darkText, buttonLabel, alt, includeBtn}) => {
    const [format, setFormat] = useState('video');
    const [quality, setQuality] = useState(`${mediaResolutions[mediaResolutions.length - 1]}`);
    const [bitrate, setBitrate] = useState('192k');
    const [btnLabel, setBtnLabel] = useState(buttonLabel);
    const [isLoading, setIsLoading] = useState(false);
    const { containerProps, indicatorEl } = useLoading({
        loading: isLoading,
        indicator: <ThreeDots width="40" />,
    });

    //const acceptedQuality = ['136', '144', '224', '240', '338', '360', '450', '480', '676', '720', '1012', '1080', '1350', '1440', '2026', '2160'];
    

    const renderResolutions = resolutions => {
        return resolutions.map((resolution, index) => {
                return (
                    <FormControlLabel
                        key={index}
                        value={resolution.toString()}
                        control={<Radio color="secondary" onChange={(e) => {setQuality(resolution.toString())}} />}
                        label={`${resolution}p`}
                        checked={quality === resolution.toString()}
                    />
                )
      
        });
    }

    const fetchDownload = () => {
        let url;
        let ext;
        if (format === 'audio'){
            ext = 'mp3';
            url = `https://blissful-shore-337401.nn.r.appspot.com/download?id=${mediaID}&format=${format}&bitrate=${bitrate}`;
        } else {
            ext = 'mp4';
            url = `https://blissful-shore-337401.nn.r.appspot.com/download?id=${mediaID}&format=${format}&resolution=${quality}`;
        }

        let filename = title.replace(/[^A-Za-z0-9]\s\t/gi, '');
        setIsLoading(true);
        setBtnLabel('');
        new JsFileDownloader({ 
            url: url,
            filename: `${filename}.${ext}`,
          })
          .then(function () {
            setIsLoading(false);
            setBtnLabel(buttonLabel);
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false);
            setBtnLabel(buttonLabel);
          });
      
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
                                {format === 'video' ?
                                    <Subtitle darkText={darkText}>Quality</Subtitle> : <Subtitle darkText={darkText}>Bitrate</Subtitle>}
                                {format === 'video' ? 
                                    <BtnWrap>
                                        <RadioGroup
                                        sx={{color:"#010606"}}
                                        row 
                                        value={quality}
                                        color="primary">
                                        {renderResolutions(mediaResolutions)}
                                        </RadioGroup>
                                    </BtnWrap> : 
                                    <BtnWrap>
                                        <RadioGroup
                                        sx={{color:"#010606"}}
                                        row 
                                        value={bitrate}
                                        color="primary">
                                            <FormControlLabel value="320k" label="320k" checked={bitrate === '320k'} control={<Radio color="secondary" onChange={(e) => {setBitrate('320k')}} />} />
                                            <FormControlLabel value="256k" label="256k" checked={bitrate === '256k'} control={<Radio color="secondary" onChange={(e) => {setBitrate('256k')}} />} />
                                            <FormControlLabel value="192k" label="192k" checked={bitrate === '192k'} control={<Radio color="secondary" onChange={(e) => {setBitrate('192k')}} />} />
                                            <FormControlLabel value="128k" label="128k" checked={bitrate === '128k'} control={<Radio color="secondary" onChange={(e) => {setBitrate('128k')}} />} />
                                            <FormControlLabel value="64k" label="64k" checked={bitrate === '64k'} control={<Radio color="secondary" onChange={(e) => {setBitrate('64k')}} />} />
                                        </RadioGroup>
                                    </BtnWrap>
                                    
                                    
                                    }
                                {includeBtn && <BtnWrap>
                                    <Button {...containerProps}
                                     primary={primary ? 1 : 0}
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact={`${true}`}
                                     offset={-80}
                                     onClick={() => {fetchDownload()}}
                                    >{btnLabel}{indicatorEl}</Button>
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

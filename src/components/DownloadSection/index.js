import React, {useState} from 'react'
import { DownloadContainer, DownloadRow, DownloadWrapper, TextWrapper, Column1, Column2, MediaTitle, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Button } from './DownloadElements'
import Radio from '@material-ui/core/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const DownloadSection = ({lightBg, id, videoThmbn, title, lightText, primary, headLine, description, topLine, img, darkText, buttonLabel, alt, includeBtn}) => {
    const [format, setFormat] = useState('');

    return (
        <>
            <DownloadContainer lightBg={lightBg} id={id}>
                <DownloadWrapper>
                    <DownloadRow videoThmbn={videoThmbn}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                            </TextWrapper>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>Format</Subtitle>
                                <BtnWrap>
                                    <RadioGroup
                                    sx={{color:"#010606"}}
                                    row 
                                    value={format}
                                    onChange={(e) => {setFormat(e.target.value)}} name="format" defaultValue="mp3">
                                        <FormControlLabel value="mp3" label="Audio" control={<Radio color="success"/>} />
                                        <FormControlLabel value="mp4" label="Video" control={<Radio color="success"/>} />
                                    </RadioGroup>
                                </BtnWrap>
                                <Subtitle darkText={darkText}>Quality</Subtitle>
                            </TextWrapper>
                            {includeBtn && <BtnWrap>
                                    <Button
                                     primary={primary ? 1 : 0}
                                     smooth={true}
                                     duration={500}
                                     spy={true}
                                     exact="true"
                                     offset={-80}
                                    >{buttonLabel}</Button>
                            </BtnWrap>}
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <MediaTitle>{title}</MediaTitle>
                        </Column2>
                    </DownloadRow>
                </DownloadWrapper>
            </DownloadContainer>
        </>
    )
}

export default DownloadSection

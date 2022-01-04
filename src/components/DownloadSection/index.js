import React, {useState} from 'react'
import { DownloadContainer, DownloadRow, DownloadWrapper, TextWrapper, Column1, Column2, MediaTitle, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Button } from './DownloadElements'
import Radio from '@material-ui/core/Radio';

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
                                    <Radio
                                        value={'mp3'}
                                        onChange={(e) => setFormat(e.target.value)}
                                        checked={format === 'mp3'}
                                        name="Audio"
                                        color={'#01bf71'}
                                    />
                                    <Radio
                                        value={'mp4'}
                                        onChange={(e) => setFormat(e.target.value)}
                                        checked={format === 'mp4'}
                                        name="Video"
                                        color={'#01bf71'}
                                    />
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

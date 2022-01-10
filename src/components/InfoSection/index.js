import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg, id, videoThmbn, lightText, primary, description1,description2, topLine, headLine1, headLine2}) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow videoThmbn={videoThmbn}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine1}</Heading>
                                <Subtitle>{description1}</Subtitle>
                                <Subtitle>{description2}</Subtitle>
                            </TextWrapper>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine2}</Heading>
                                <Subtitle>Copy the media URL and paste it into the search bar</Subtitle>
                                <Subtitle>Scroll down to the download section</Subtitle>
                                <Subtitle>Choose your desired format and quality</Subtitle>
                                <Subtitle>Download the file</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require("../../images/about.svg").default} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection

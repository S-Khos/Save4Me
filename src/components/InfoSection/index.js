import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, BtnWrap, ImgWrap, Img, Button } from './InfoElements'

const InfoSection = ({lightBg, id, videoThmbn, lightText, primary, headLine, description, topLine, img, darkText, buttonLabel, alt, includeBtn}) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow videoThmbn={videoThmbn}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
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
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection

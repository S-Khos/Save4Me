import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, LItem, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, HeadingH2, SocialIconLink, SocialIcons} from './InfoElements'
import {FaReddit, FaYoutube, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const InfoSection = ({lightBg, id, videoThmbn, lightText, description1, description2, description4, topLine, headLine1, headLine2}) => {
    
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
                                <Subtitle>{description4}</Subtitle>
                            </TextWrapper>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine2}</Heading>
                                <LItem>Copy the media URL and paste it into the search bar</LItem>
                                <LItem>Scroll down to the download section</LItem>
                                <LItem>Choose your desired format and quality</LItem>
                                <LItem>Download the file</LItem>
                            </TextWrapper>
                            <TextWrapper>
                                <HeadingH2 lightText={lightText}>
                                    Supported Platforms
                                </HeadingH2>
                                <SocialIcons>
                                    <SocialIconLink href="/"  aria-label="Facebook">
                                        <FaFacebook/>
                                    </SocialIconLink>
                                    <SocialIconLink href="/"  aria-label="Instagram">
                                        <FaInstagram/>
                                    </SocialIconLink>
                                    <SocialIconLink href="/" aria-label="Twitter">
                                        <FaTwitter/>
                                    </SocialIconLink>
                                    <SocialIconLink href="/" aria-label="Youtube">
                                        <FaYoutube/>
                                    </SocialIconLink>
                                    <SocialIconLink href="/" aria-label="Reddit">
                                        <FaReddit/>
                                    </SocialIconLink>
                                </SocialIcons>
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

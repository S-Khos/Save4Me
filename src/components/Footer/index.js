import React from 'react';
import {FooterContainer, FooterWrap, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo src={require('../../images/logo.png')}/>
                        <WebsiteRights>
                            Save4Me © {new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>
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
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

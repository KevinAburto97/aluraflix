import React from "react";
import {Box, Container, Typography, Link, Icon} from "@mui/material";
import { NavLinks, SocialMedia } from "../UI/variables";
import styled from "@emotion/styled";
import logo from "../../assets/img/logo.png";

const Footer = () => {
    const FooterLogo = styled.div`
    `,
    Logo = styled.img`
        width: 120px;
        height: 60px;
        margin: auto;
    `,
    FooterBelow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 0.75rem;
    `,
    FooterCopyright = styled.p`
        font-size: 13px;
        line-height: 15px;
        font-weight: 600;
        color: #DB202C;
    `,
    FooterLinks = styled.div`
        padding: 0 1rem;
    `,
    SocialMediaImg = styled.img`
        margin: 0 1rem;
    `

    return (
        <Container maxWidth="x1" style={{ background: '#202124', padding: "1rem"}}>
            <FooterBelow>
                <FooterLogo>
                    <Logo src={logo}/>
                </FooterLogo>
                <Box>
                    <FooterCopyright>@{new Date().getFullYear()} KevinAburto97. All rights reserved.</FooterCopyright>
                </Box>
                <FooterLinks>
                    {
                        SocialMedia.map((social, id) => {
                            return <Link key={id} href={social.socialUrl}>
                                <SocialMediaImg src={social.icon}/>
                            </Link>
                        })
                    }
                </FooterLinks>
            </FooterBelow>
        </Container>
    );
}

export default Footer;
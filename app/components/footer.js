'use client';

import Link from 'next/link';
import styled from 'styled-components';

function getYear() {
    return new Date().getFullYear();
}

// #region Styles

const FooterWrapper = styled.footer`
    background-color:#e6e6e6;
    padding: 32px 6px 32px 6px;
`

const FooterItems = styled.div`
    grid-template-columns: repeat(2, 1fr);
    max-width: 88rem;
    align-items: start;
    margin: auto;
    padding: 0 1.5rem;
    @media (min-width: 576px) {
        display: grid;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(5, 1fr);
    }
`

const FooterMenu = styled.ul`
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 3 / span 3;
    list-style: none;
    @media (min-width: 576px) {
        display: grid;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const FooterMenuChildWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    @media (min-width: 992px) {
        padding-bottom: 0;
    }
`

const FooterTopLevel = styled.h6`
    font-family: "titling-gothic-fb-wide", sans-serif;
    font-size: 10px;
    color: #00b391;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 12px;
`

const FooterBottomLevel = styled.a`
    width: 100%;
    font-size: 14px;
    color: #262626;
    padding-bottom: 6px;
`

const StructureAssetList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    grid-column: span 1 / span 1;
    padding-bottom: 3rem;
    @media (min-width: 992px) {
        padding-bottom: 0;
    }
`

const PostFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    width: 100%;
    max-width: 88rem;
    padding: 8rem 1.5rem 0rem 1.5rem;
    margin: auto;
    color: #333333;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const Copyright = styled.div`
    margin: auto;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-right: auto;
        padding-bottom: 0rem;
    }
`

const CopyrightText = styled.p`
   font-size: .70rem;
   text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
`

const PioneerLogo = styled.a`
    padding-bottom: 3rem;
    margin: auto;
    @media (min-width: 768px) {
        padding-bottom: 0rem;
    }
`

const LinkedInIcon = styled.a`
    width: 1.5rem;
    margin: auto;
    padding-bottom: 8rem;
    @media (min-width: 768px) {
        margin-right: 0;
        padding-bottom: 0rem;
    }
`

// #endregion

export default function Footer({ footerMenu, socialMedia, rancoStructures, rancoAssets }) {

    const linkedIn = socialMedia[0].acf.value_list[0].value;

    return (
        <FooterWrapper>
            <FooterItems>
                <FooterMenu>
                    {footerMenu.map((item) => {
                        if (item.children) {
                            return (
                                <FooterMenuChildWrapper key={item.id}>
                                    <Link href={item.url}>
                                        <FooterTopLevel>{item.title}</FooterTopLevel>
                                    </Link>
                                    {Object.keys(item.children).map((key, index) => {
                                        return (
                                            <FooterBottomLevel key={index} href={item.children[key].url}>{item.children[key].title}</FooterBottomLevel>
                                        );
                                    })}
                                </FooterMenuChildWrapper>
                            )
                        } else {
                            return (
                                <FooterTopLevel key={item.id}>
                                    <FooterBottomLevel href={item.url}>{item.title}</FooterBottomLevel>
                                </FooterTopLevel>
                            )
                        }
                    })}
                </FooterMenu>
                <StructureAssetList>
                    <FooterTopLevel>Structures</FooterTopLevel>
                    {rancoStructures.map((item) => {
                        return (
                            <FooterBottomLevel href={`/structures/#${item.title}`}>{item.title}</FooterBottomLevel>
                        )
                    })}
                </StructureAssetList>
                <StructureAssetList>
                    <FooterTopLevel>Assets</FooterTopLevel>
                    {rancoAssets.map((item) => {
                        return (
                            <FooterBottomLevel href={`/assets/#${item.title}`}>{item.title}</FooterBottomLevel>
                        )
                    })}
                </StructureAssetList>
            </FooterItems>
            <PostFooter>
                <Copyright>
                    <CopyrightText>&copy; {getYear()} Ranco Response | All Rights Reserved</CopyrightText>
                </Copyright>
                <PioneerLogo href="https://madebypioneer.com/" target="_blank">
                    <img src={`https://inside.rancoresponse.com/wp-content/uploads/2023/01/PioneerXRanco.svg`} />
                </PioneerLogo>
                <LinkedInIcon href={linkedIn} target="_blank">
                    <svg fill="#00261d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </LinkedInIcon>
            </PostFooter>
        </FooterWrapper>
    );
}
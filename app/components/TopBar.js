'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
        case "A page on this site":
        return (onSiteLink);
        case "Another site":
        return (offSiteLink);
        case "A file":
        return (fileLink.url);
        default:
        return ('/');
    }
}

// #region Styles

const TopbarWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #0d443a;
    padding: 1rem 0.5rem 1rem 0.5rem;
    @media (min-width: 768px) {
        display: flex;
    }
`

const TopbarTitle = styled.h6`
    text-align: center;
    color: #fff;
    opacity: 0.75;
    padding-bottom: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
        text-align: left;
        padding-bottom: 0;
    }
`

const TopbarButton = styled.div`
    font-size: 0.75rem !important;
    margin: 0 0.5rem 0 0.5rem;
`

// #endregion

export default function TopBar({ topBarData }) {
    let buttonLink = getButtonLink(topBarData[0].acf.button.link_to_where, topBarData[0].acf.button.onsite_link, topBarData[0].acf.button.offsite_link, topBarData[0].acf.button.file_link);
    return (
        <TopbarWrapper>
            <TopbarTitle>{topBarData[0].acf.title}</TopbarTitle>
            <a href={buttonLink} target="_blank">
                <TopbarButton className="default-button">{topBarData[0].acf.button.text}</TopbarButton>
            </a>
        </TopbarWrapper>
    );
}
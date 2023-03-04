'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import StructureList from "../components/StructureList.js";
import AssetList from "../components/AssetList.js";
import BottomCta from "../components/BottomCta.js";

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink.replace('inside', 'www'));
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink.url);
      default:
        return ('/');
    }
}

// #region Styles

const Hero = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-color: #092e27;
    background-size: cover;
    background-position: center;
    padding-top: 2.5rem;
    padding-bottom: 5rem;
    @media (min-width: 1200px) {
        padding-top: 5rem;
        padding-bottom: 7rem;
    }
`;

const HeroWrapper = styled.div`
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    max-width: 104rem;
    margin: auto;
    @media (min-width: 768px) {
        display: grid;
    }
`;

const HeroContentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-column: span 7 / span 7;
    color: #fff;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 576px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media (min-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    @media (min-width: 992px) {
        padding-left: 5rem;
        padding-right: 3rem;
    }
`;

const HeroTitleBox = styled.div`
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: right;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        background-image: none !important;
        margin-bottom: 0rem;
    }
`;

const HeroTitle = styled.h1`
    width: 100%;
    font-size: 1.875rem;
    padding: 20px 0 20px 0;
    @media (min-width: 416px) {
        font-size: 2.5rem;
    }
    @media (min-width: 768px) {
        font-size: 3rem;
    }
    @media (min-width: 992px) {
        font-size: 4rem;
    }
`;

const HeroParagraph = styled.p`
    width: 100%;
    font-size: 1.3rem;
    padding-bottom: 2rem;
`;

const HeroImage = styled.div`
    display: none;
    position: relative;
    grid-column: span 5 / span 5;
    height: 300px;
    overflow: hidden;
    @media (min-width: 768px) {
        display: block;
    }
    @media (min-width: 992px) {
        height: 500px;
    }
`;

const Slider = styled.div`
    max-width: 104rem;
    margin: auto;
    padding: 6rem 0 6rem 0;
`;

const SliderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100%;
`;

const SliderVerticalBox = styled.div`
    position: relative;
    grid-column: span 1 / span 1;
    margin: 0 auto 0 auto;
    @media (min-width: 768px) {
        grid-column: span 2 / span 2;
    }
`;

const SliderMetaBox = styled.div`
    max-width: 36rem;
`;

const SliderContentBox = styled.div`
    grid-column: span 11 / span 11;
    padding-left: 1rem;
    @media (min-width: 576px) {
        padding-left: 1.5rem;
    }
    @media (min-width: 768px) {
        grid-column: span 10 / span 10;
        padding-left: 5rem;
    }
`;

const SliderArrows = styled.div`
   display: flex;
   align-items: center;
   padding-top: 2rem;
`;

const SliderTitle = styled.h2`
    padding: 0.75rem 0 1rem 0;
    font-size: 1.6rem;
    @media (min-width: 768px) {
        font-size: 3.75rem;
    }
`;

const SliderParagraph = styled.p`
    font-size: 1.3rem;
   opacity: 0.75;
`;

const SlideInnerContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    @media (min-width: 768px) {
        padding: 2rem;
    }
`;

const SlideImg = styled.div`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 14rem;
`;

const SlideTitle = styled.h4`
    font-size: 1.5rem!important;
`;

const SlideParagraph = styled.p`
    opacity: 0.75;
    padding: 0.5rem 0 1rem 0;
`;

const SlideButton = styled.a`
    width: auto;
    .invert-button {
        font-size: 0.7rem;
    }
`;

const GreenBack = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-size: cover;
`;

// #endregion

export default function Home({ pageData }) {

    const structureList = pageData.global_sections[0];
    const assetList = pageData.global_sections[1];
    const rancoStructures = pageData.structures;
    const rancoAssets = pageData.assets;
    const bottomCta = pageData.global_sections[2];
    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;

    const heroButton = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
            <Hero>
                <HeroWrapper>
                    <HeroContentBox>
                        <HeroTitleBox style={{ backgroundImage:`url(${pageData.acf.hero_section.image.url})` }}>
                            <HeroTitle>{pageData.acf.hero_section.title}</HeroTitle>
                        </HeroTitleBox>
                        <HeroParagraph>{pageData.acf.hero_section.paragraph}</HeroParagraph>
                        <a href={heroButton}>
                            <div className="invert-button">
                                {pageData.acf.hero_section.button.text}
                            </div>
                        </a>
                    </HeroContentBox>
                    <HeroImage>
                        <Image src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                    </HeroImage>
                </HeroWrapper>
            </Hero>
            <Slider>
                <SliderWrapper>
                    <SliderVerticalBox>
                        <h6 className="vertical-title">{pageData.acf.capabilities_slider.vertical_title}</h6>
                    </SliderVerticalBox>
                    <SliderContentBox>
                        <SliderMetaBox>
                            <h3 className="subtitle">{pageData.acf.capabilities_slider.subtitle}</h3>
                            <SliderTitle>{pageData.acf.capabilities_slider.title}</SliderTitle>
                            <SliderParagraph>{pageData.acf.capabilities_slider.paragraph}</SliderParagraph>
                        </SliderMetaBox>
                        <div>
                            <Splide hasTrack={ false }
                                options={ {
                                    type: 'slide',
                                    fixedWidth: '420px',
                                    fixedHeight: '596px',
                                    perMove: 1,
                                    gap: '2rem',
                                    pagination: false,
                                    keyboard: 'global',
                                    trimSpace: false,
                                    breakpoints: {
                                        400: {
                                            fixedWidth: '230px',
                                            fixedHeight: '100%',
                                        },
                                        576: {
                                            fixedWidth: '300px',
                                            fixedHeight: '100%',
                                        },
                                        768: {
                                            
                                        },
                                        992: {
                                        
                                        },
                                        1200: {
                                        
                                        },
                                        1439: {
                                        
                                        },
                                    }
                                } 
                                }
                                
                                >
                                <SliderArrows className="splide__arrows">
                                    <button className="splide__arrow splide__arrow--prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                                    </button>
                                </SliderArrows>
                                <SplideTrack className="pt-4">
                                    {pageData.acf.capabilities_slider.slide.map((item, index) => {
                                        const slideButtonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                                        return (
                                        <SplideSlide key={index} className="splide__slide">
                                            <SlideImg>
                                                <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                            </SlideImg>
                                            <SlideInnerContent>
                                                <SlideTitle>{item.title}</SlideTitle>
                                                <SlideParagraph>{item.paragraph}</SlideParagraph>
                                                <SlideButton href={slideButtonLink}>
                                                    <div className="invert-button">
                                                        {item.button.text}
                                                    </div>
                                                </SlideButton>
                                            </SlideInnerContent>
                                        </SplideSlide>
                                        );
                                    })}
                                    
                                </SplideTrack>
                            </Splide>
                        </div>
                    </SliderContentBox>
                </SliderWrapper>
            </Slider>
            <GreenBack>
                <StructureList structureList={structureList} rancoStructures={rancoStructures} />
                <AssetList assetList={assetList} rancoAssets={rancoAssets} />
            </GreenBack>
            <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
            <div className="py-80"></div>
            <div className="py-80"></div>
            <div className="py-80"></div>
        </>
    );
}
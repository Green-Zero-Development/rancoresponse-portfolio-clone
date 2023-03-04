'use client';

import styled from 'styled-components';
import Image from 'next/image';
import ServiceGeneralCapabilitiesList from "../components/ServiceGeneralCapabilitiesList.js";
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
        return (fileLink);
      default:
        return ('/');
    }
  }

// #region Styles

const Hero = styled.div`
  background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
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
    padding-left: 3rem;
    padding-right: 3rem;
}
  @media (min-width: 1200px) {
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

const HeroSubtitle = styled.h3`
  display: none;
  @media (min-width: 768px) {
      display: block;
  }
`;

const HeroMobileSubtitle = styled.h3`
  display: block;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    display: none;
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

const GreenBack = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-size: cover;
`;

// #endregion

export default function ServiceGeneral({ pageData }) {

    const serviceGeneralCapabilitiesList = pageData.global_sections[3];
    const structureList = pageData.global_sections[0];
    const assetList = pageData.global_sections[1];
    const rancoStructures = pageData.structures;
    const rancoAssets = pageData.assets;
    const bottomCta = pageData.global_sections[2];
    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
            <HeroWrapper>
                <HeroContentBox>
                    <HeroTitleBox style={{ backgroundImage:`url(${pageData.acf.hero_section.image.url})` }}>
                        <HeroSubtitle className="subtitle">{pageData.acf.hero_section.subtitle}</HeroSubtitle>
                        <HeroTitle>{pageData.acf.hero_section.title}</HeroTitle>
                    </HeroTitleBox>
                    <HeroMobileSubtitle className="subtitle">{pageData.acf.hero_section.subtitle}</HeroMobileSubtitle>
                    <HeroParagraph>{pageData.acf.hero_section.paragraph}</HeroParagraph>
                    
                </HeroContentBox>
                <HeroImage>
                    <Image src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                </HeroImage>
            </HeroWrapper>
        </Hero>
        <ServiceGeneralCapabilitiesList pageData={pageData} serviceGeneralCapabilitiesList={serviceGeneralCapabilitiesList} />
        <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
        <GreenBack>
            <StructureList structureList={structureList} rancoStructures={rancoStructures} />
            <AssetList assetList={assetList} rancoAssets={rancoAssets} />
        </GreenBack>
        </>
    )
}
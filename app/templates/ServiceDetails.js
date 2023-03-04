'use client';

import styled from 'styled-components';
import Image from 'next/image';

import BottomCta from "../components/BottomCta.js";
import BottomCapabilitiesList from "../components/BottomCapabilitiesList.js";

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

const Section = styled.div`
  background-color: #f0f0f0;
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 104rem;
  margin: auto;
  padding: 80px 0 80px 0;
`;

const VerticalBox = styled.div`
  position: relative;
  grid-column: span 1 / span 1;
  margin: 0 auto 0 auto;
  @media (min-width: 768px) {

  }
`;

const ContentWrapper = styled.div`
  grid-column: span 11 / span 11;
  padding-left: 1.5rem;
  padding-right: 1rem;
  @media (min-width: 1200px) {
      grid-column: span 9 / span 9;
      padding-left: 5rem;
  }
`;

const HeroImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 19rem;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 1.5rem;
  padding: 1rem 0 3rem 0;
  @media (min-width: 576px) {
    font-size: 1.875rem;
  }
`;

const HeroContent = styled.div`
    white-space: pre-line;
    font-size: 1rem;
    padding-bottom: 2rem;
    opacity: 0.75;
    ul {
        list-style: disc;
        list-style-position: inside;
        padding-top: 1rem;
    }
`;

const GreenBack = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-size: cover;
`;

// #endregion

export default function ServiceDetails({ pageData }) {

    const bottomCta = pageData.global_sections[2];
    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;
    const bottomCapabilitiesList = pageData.global_sections[4];
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Section>
            <Wrapper>
                <VerticalBox>
                    <h6 className="vertical-title-dark">Information</h6>
                </VerticalBox>
                <ContentWrapper>
                    <HeroImg >
                      <Image src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} />
                    </HeroImg>
                    <h4 className="subtitle">{pageData.acf.hero_section.subtitle}</h4>
                    <HeroTitle>{pageData.acf.hero_section.title}</HeroTitle>
                    <HeroContent dangerouslySetInnerHTML={{__html: pageData.acf.hero_section.content}} />
                </ContentWrapper>
            </Wrapper>
        </Section>
        <GreenBack>
            <BottomCapabilitiesList pageData={pageData} bottomCapabilitiesList={bottomCapabilitiesList} />
        </GreenBack>
        <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
        </>
    )
}
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import BottomCta from "../components/BottomCta.js";
import StructureList from "../components/StructureList.js";
import AssetList from "../components/AssetList.js";

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
    @media (min-width: 1200px) {
        padding-left: 5rem;
    }
`;

const ContentBox = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    padding-bottom: 40px;
    @media (min-width: 992px) {
        padding: 40px 0 40px 0;
    }
`;

const MetaBox = styled.div`
    order: 2;
    grid-column: span 12 / span 12;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        grid-column: span 7 / span 7;
        order: 1;
        padding-right: 2rem;
    }
    @media (min-width: 1200px) {
        grid-column: span 4 / span 4;
    }
`;

const MetaBoxInverse = styled.div`
    order: 2;
    grid-column: span 12 / span 12;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        grid-column: span 7 / span 7;
        padding-left: 2rem;
    }
    @media (min-width: 1200px) {
        grid-column: span 4 / span 4;
    }
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 15px 0 10px 0;
    @media (min-width: 768px) {
        
    }
`;

const Paragraph = styled.div`
    width: 100%;
    font-size: 1rem;
    padding-bottom: 2rem;
    opacity: 0.75;
    white-space: pre-line;
    ul {
        list-style: disc;
        list-style-position: inside;
        padding-top: 1rem;
    }
`;

const BoxImg = styled.div`
    position: relative;
    overflow: hidden;
    order: 1;
    grid-column: span 12 / span 12;
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        grid-column: span 5 / span 5;
        order: 2;
        height: 450px;
        margin-bottom: 0rem;
    }
    @media (min-width: 1200px) {
        grid-column: span 7 / span 7;
    }
`;

const GreenBack = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-size: cover;
`;

// #endregion

export default function WrapAroundServices({ pageData }) {

    const bottomCta = pageData.global_sections[2];
    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;
    const structureList = pageData.global_sections[0];
    const assetList = pageData.global_sections[1];
    const rancoStructures = pageData.structures;
    const rancoAssets = pageData.assets;

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
        <Section>
            <Wrapper>
                <VerticalBox>
                    <h6 className="vertical-title-dark">{pageData.acf.capabilities_section.vertical_title}</h6>
                </VerticalBox>
                <ContentWrapper>
                {pageData.acf.capabilities_section.content_box.map((item, index) => {
                    const buttonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                    if (index % 2) {
                        return (
                            <ContentBox>
                                <BoxImg>
                                    <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                </BoxImg>
                                <MetaBoxInverse>
                                    <h4 className="subtitle">{pageData.title}</h4>
                                    <Title>{item.title}</Title>
                                    <Paragraph dangerouslySetInnerHTML={{__html: item.paragraph}}></Paragraph>
                                    <a href={buttonLink}>
                                        <div className="small-text-button invert-button">
                                            {item.button.text}
                                        </div>
                                    </a>
                                </MetaBoxInverse>
                            </ContentBox>
                        );
                    } else {
                        return (
                            <ContentBox>
                                <MetaBox>
                                    <h4 className="subtitle">{pageData.title}</h4>
                                    <Title>{item.title}</Title>
                                    <Paragraph dangerouslySetInnerHTML={{__html: item.paragraph}}></Paragraph>
                                    <a href={buttonLink}>
                                        <div className="small-text-button invert-button">
                                            {item.button.text}
                                        </div>
                                    </a>
                                </MetaBox>
                                <BoxImg>
                                    <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} />
                                </BoxImg>
                            </ContentBox>
                        );
                    }
                })}
                </ContentWrapper>
            </Wrapper>
        </Section>
        <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
        <GreenBack>
            <StructureList structureList={structureList} rancoStructures={rancoStructures} />
            <AssetList assetList={assetList} rancoAssets={rancoAssets} />
        </GreenBack>
        </>
    )
}
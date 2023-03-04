'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  max-width: 80rem;
  margin: auto;
  padding: 100px 24px 50px 24px;
  @media (min-width: 992px) {
    display: grid;
  }
  @media (min-width: 1200px) {
    gap: 6rem;
  }
`;

const HeroContent = styled.div`
  grid-column: span 6 / span 6;
  @media (min-width: 1200px) {
      
  }
`;

const HeroTitle = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const HeroParagraph = styled.p`
  width: 100%;
  font-size: 1rem;
  opacity: 0.75;
`;

const ContactMeta = styled.div`
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding: 50px 0 50px 0;
  @media (min-width: 576px) {
    display: grid;
  }
`;

const ContactMetaBox = styled.div`
  grid-column: span 6 / span 6;
  padding-bottom: 2rem;
  @media (min-width: 576px) {
    padding-bottom: 0rem;
  }
`;

const ContactMetaTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  padding-bottom: 1rem;
`;

const HeroForm = styled.div`
  grid-column: span 6 / span 6;
  @media (min-width: 1200px) {
      
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

// #endregion

export default function Contact({ pageData }) {

  const bottomCta = pageData.global_sections[2];
  const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
  const primaryEmail = pageData.site_data[1].acf.value_list[0].value;
  const primaryAddress = pageData.site_data[2].acf.value_list[0];
  const googleMaps = pageData.site_data[0].acf.value_list[1].value;

  useEffect(() => {
    const cogForm = document.createElement('script');
    const cogFormBox = document.getElementById('contact-form');
    cogForm.src = "https://www.cognitoforms.com/f/seamless.js";
    cogForm.setAttribute("data-key", "IG83lPQs7UKU2FDeP--HlA");
    cogForm.setAttribute("data-form", "54");
    if (cogFormBox.hasChildNodes() == true) {

    } else {
        cogFormBox.appendChild(cogForm);
    }
  }, []);
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
          <HeroContent>
            <h6 className="subtitle">{pageData.acf.hero_section.subtitle}</h6>
            <HeroTitle>{pageData.acf.hero_section.title}</HeroTitle>
            <HeroParagraph>{pageData.acf.hero_section.paragraph}</HeroParagraph>
            <ContactMeta>
              <ContactMetaBox>
                <ContactMetaTitle>Home Base</ContactMetaTitle>
                <a href={googleMaps} target="_blank">
                  {primaryAddress.street}
                  <br />
                  {primaryAddress.city}, {primaryAddress.state} {primaryAddress.zip}
                </a>
              </ContactMetaBox>
              <ContactMetaBox>
                <ContactMetaTitle>Email</ContactMetaTitle>
                <a href={`mailto:${primaryEmail}`}>
                  {primaryEmail}
                </a>
              </ContactMetaBox>
              <ContactMetaBox>
                <ContactMetaTitle>Phone</ContactMetaTitle>
                <a href={`tel:${primaryPhone}`}>
                  {primaryPhone}
                </a>
              </ContactMetaBox>
            </ContactMeta>
          </HeroContent>
          <HeroForm id="contact-form">
                      
          </HeroForm>
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
        </>
    )
}
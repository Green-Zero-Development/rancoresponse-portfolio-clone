'use client';

import Image from 'next/image';
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

export default function ServiceGeneralCapabilitiesList({ pageData, serviceGeneralCapabilitiesList }) {
    
    return (
        <Section>
            <Wrapper>
                <VerticalBox>
                    <h6 className="vertical-title-dark">{serviceGeneralCapabilitiesList.acf.capabilities.vertical_title}</h6>
                </VerticalBox>
                <ContentWrapper>
                {serviceGeneralCapabilitiesList.acf.capabilities.content_box.map((item, index) => {
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
    )
}
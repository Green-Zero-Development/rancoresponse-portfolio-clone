'use client';

import styled from 'styled-components';
import Image from 'next/image';
import StructureList from "../components/StructureList.js";
import AssetList from "../components/AssetList.js";
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
    padding: 6rem 0 6rem 0;
`;

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 104rem;
    margin: auto;
`;

const VerticalBox = styled.div`
    position: relative;
    grid-column: span 1 / span 1;
    margin: 0 auto 0 auto;
    @media (min-width: 768px) {
        grid-column: span 2 / span 2;
    }
`;

const ContentBox = styled.div`
    grid-column: span 11 / span 11;
    padding-left: 1rem;
    @media (min-width: 576px) {
        padding-left: 1.5rem;
    }
    @media (min-width: 768px) {
        grid-column: span 9 / span 9;
        padding-left: 5rem;
    }
`;

const Title = styled.h2`
    padding: 0.75rem 0 1rem 0;
    font-size: 1.4rem;
    @media (min-width: 768px) {
        
    }
`;

const Paragraph = styled.p`
   font-size: 1rem;
   opacity: 0.75;
   padding-bottom: 2rem;
`;

const StructureAssetBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    width: 100%;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 996px) {
        grid-gap: 2rem;
    }
`;

const StructureAssetBox = styled.div`
    padding-right: 1rem;
`;

const StructureAssetImg = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 19rem;
    margin-bottom: 1.5rem;
`;

const GreenBack = styled.div`
    background-image: url('https://inside.rancoresponse.com/wp-content/uploads/2023/01/hero-back.png');
    background-size: cover;
`;

// #endregion

export default function Assets({ pageData }) {

    const structureList = pageData.global_sections[0];
    const assetList = pageData.global_sections[1];
    const rancoStructures = pageData.structures;
    const rancoAssets = pageData.assets;
    const bottomCta = pageData.global_sections[2];
    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;
    const bottomCapabilitiesList = pageData.global_sections[4];

    if (pageData.slug === "assets") {
      return (
      <>
      <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

      </div>
        <Section>
              <Wrapper>
                  <VerticalBox>
                      <h6 className="vertical-title-dark">Assets</h6>
                  </VerticalBox>
                  <ContentBox>
                      <StructureAssetBoxWrapper>
                          {rancoAssets.map((item) => {
                              return (
                                <StructureAssetBox id={item.acf.title}>
                                  <StructureAssetImg>
                                    <Image src={`${item.acf.onpage_img.url}`} alt={`${item.acf.onpage_img.alt}`} fill style={{ objectFit: 'cover' }} />
                                  </StructureAssetImg>
                                  <h4 className="subtitle">{pageData.title}</h4>
                                  <Title>{item.acf.title}</Title>
                                  <Paragraph>{item.acf.description}</Paragraph>
                                </StructureAssetBox>
                              )
                          })}
                      </StructureAssetBoxWrapper>
                  </ContentBox>
              </Wrapper>
          </Section>
          <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
          <GreenBack>
              <StructureList structureList={structureList} rancoStructures={rancoStructures} />
          </GreenBack>
          <GreenBack>
              <BottomCapabilitiesList pageData={pageData} bottomCapabilitiesList={bottomCapabilitiesList} />
          </GreenBack>
        </>
      );
    } else {
      return (
      <>
      <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

      </div>
        <Section>
              <Wrapper>
                  <VerticalBox>
                      <h6 className="vertical-title-dark">Structures</h6>
                  </VerticalBox>
                  <ContentBox>
                      <StructureAssetBoxWrapper>
                          {rancoStructures.map((item) => {
                              return (
                                <StructureAssetBox id={item.acf.title}>
                                  <StructureAssetImg>
                                    <Image src={`${item.acf.onpage_img.url}`} alt={`${item.acf.onpage_img.alt}`} fill style={{ objectFit: 'cover' }} />
                                  </StructureAssetImg>
                                  <h4 className="subtitle">{pageData.title}</h4>
                                  <Title>{item.acf.title}</Title>
                                  <Paragraph>{item.acf.description}</Paragraph>
                                </StructureAssetBox>
                              )
                          })}
                      </StructureAssetBoxWrapper>
                  </ContentBox>
              </Wrapper>
          </Section>
          <BottomCta bottomCta={bottomCta} primaryPhone={primaryPhone} primaryEmail={primaryEmail} />
          <GreenBack>
              <AssetList assetList={assetList} rancoAssets={rancoAssets} />
          </GreenBack>
          <GreenBack>
              <BottomCapabilitiesList pageData={pageData} bottomCapabilitiesList={bottomCapabilitiesList} />
          </GreenBack>
        </>
      );
    }
}
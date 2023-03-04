'use client';

import Image from 'next/image';
import styled from 'styled-components';

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

const MetaBox = styled.div`
    max-width: 36rem;
`;

const ContentBox = styled.div`
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

const Title = styled.h2`
    padding: 0.75rem 0 1rem 0;
    font-size: 1.6rem;
    color: #ffffff;
    @media (min-width: 768px) {
        font-size: 3.75rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1.3rem;
   color: #ffffff;
   opacity: 0.75;
   padding-bottom: 2rem;
`;

const StructureBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    width: 100%;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
    }
    @media (min-width: 996px) {
        grid-gap: 2rem;
        width: 85%;
    }
    @media (min-width: 1220px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const StructureBox = styled.a`
    position: relative;
    background-color: #ffffff;
    width: 80%;
    @media (min-width: 416px) {
        width: 90%;
    }
    @media (min-width: 576px) {
        width: 100%;
    }
`;

const StructureBoxImg = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 10rem!important;
    object-fit: cover;
    object-position: center;
`;

const StructureBoxContent = styled.div`
    overflow: hidden;
    padding: 1rem;
    max-height: 80px;
    transition: 0.3s;
    ${StructureBox}:hover & {
        transform: translateY(-66%);
        min-height: 101%;
        background-color: #0d443a;
        color: #ffffff;
    }
`;

const StructureBoxTitle = styled.h5`
    font-size: 1rem;
    @media (min-width: 416px) {
        font-size: 1.5rem;
    }
    @media (min-width: 576px) {
        font-size: 1rem;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    ${StructureBox}:hover & {
        padding-bottom: 0.5rem;
    }
`;

const StructureBoxDescription = styled.p`
    opacity: 0;
    ${StructureBox}:hover & {
        opacity: 1;
    }
`;

// #endregion

export default function StructureList({ structureList, rancoStructures }) {
    return (
        <>
        <Section>
            <Wrapper>
                <VerticalBox>
                    <h6 className="vertical-title-light">{structureList.acf.vertical_title}</h6>
                </VerticalBox>
                <ContentBox>
                    <MetaBox>
                        <h3 className="subtitle">{structureList.acf.subtitle}</h3>
                        <Title>{structureList.acf.title}</Title>
                        <Paragraph>{structureList.acf.paragraph}</Paragraph>
                    </MetaBox>
                    <StructureBoxWrapper>
                        {rancoStructures.map((item) => {
                            return (
                                <StructureBox href={`/structures/#${item.acf.title}`}>
                                    <StructureBoxImg>
                                        <Image src={`${item.acf.listing_image.url}`} alt={`${item.acf.listing_image.alt}`} fill style={{ objectFit: 'cover' }} />
                                    </StructureBoxImg>
                                    <StructureBoxContent>
                                        <StructureBoxTitle>{item.acf.title}</StructureBoxTitle>
                                        <StructureBoxDescription>{item.acf.description}</StructureBoxDescription>
                                    </StructureBoxContent>
                                </StructureBox>
                            )
                        })}
                    </StructureBoxWrapper>
                </ContentBox>
            </Wrapper>
        </Section>
        </>
    );
}
'use client';

import styled from 'styled-components';

// #region Styles

const Section = styled.div`
    background-color: #00594d;
    padding: 40px 24px 40px 24px;
`;

const Wrapper = styled.div`
    max-width: 50rem;
    margin: auto;
`;

const Title = styled.h6`
    text-align: center;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 0 0 32px 0;
    @media (min-width: 768px) {
        font-size: 1.7rem;
    }
`;

const ButtonBox = styled.div`
    display: grid;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }
`;

const CallButton = styled.a`
    margin-bottom: 30px;
    @media (min-width: 576px) {
        margin-bottom: 0px;
    }
`;

// #endregion

export default function BottomCta({ bottomCta, primaryPhone, primaryEmail }) {
    
    return (
        <Section>
            <Wrapper>
                <Title>
                {bottomCta.acf.title}
                </Title>
                <ButtonBox>
                    <CallButton href={`tel:${primaryPhone}`}>
                        <div className="light-button">Call Us Now</div>
                    </CallButton>
                    <CallButton href={`mailto:${primaryEmail}`}>
                        <div className="light-button">Email Us Now</div>
                    </CallButton>
                </ButtonBox>
            </Wrapper>
        </Section>
    )
}
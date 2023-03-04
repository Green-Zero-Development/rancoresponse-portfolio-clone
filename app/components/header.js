'use client';

import Link from 'next/link';
import styled from 'styled-components';

function toggleDropdown(dropTrig) {
  dropTrig.target.nextSibling.classList.toggle("opacity-0");
  dropTrig.target.nextSibling.classList.toggle("pointer-events-none");
}

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-open").classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

// #region Styles

const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #00261d;
    padding: 24px 16px 24px 16px;
    z-index: 50;
    transition: .25s;
    @media (min-width: 992px) {
        padding: 24px 32px 24px 32px;
    }
    @media (min-width: 1440px) {
        padding: 32px 32px 32px 32px;
    }
`;

const HeaderTelephone = styled.a`
    grid-column: span 3 / span 3;
    width: 24px;
    margin-right: auto;
    @media (min-width: 992px) {
        display: none;
    }
`;

const DesktopLogoLink = styled.a`
    grid-column: span 6 / span 6;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
`;

const DesktopLogo = styled.img`
    @media (min-width: 576px) {
        max-width: 210px;
    }
    @media (min-width: 992px) {
        max-width: 150px;
    }
    @media (min-width: 1200px) {
        max-width: 210px;
    }
`;

const MobileMenuOpen = styled.div`
    grid-column: span 3 / span 3;
    width: 48px;
    margin-left: auto;
    @media (min-width: 992px) {
        display: none;
    }
    svg {
        margin-left: auto;
    }
`

const DesktopNavi = styled.div`
    grid-column: span 10 / span 10;
    display: flex;
    align-items: center;
    margin-left: auto;
`

const DesktopMenu = styled.ul`
    display: none;
    @media (min-width: 992px) {
        display: flex;
    }
`

const DesktopMenuSingle = styled.li`
    color: #ffffff;
    font-size: 14px;
    a {
        color: #ffffff;
    }
    @media (min-width: 992px) {
        font-size: 15px;
        margin-left: 24px;
    }
    @media (min-width: 1200px) {
        font-size: 18px;
        margin-left: 24px;
    }
    @media (min-width: 1440px) {
        margin-left: 48px;
    }
`

const DesktopDropdown = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    display: flex;
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #00261d;
    padding: 24px 12px 0px 12px;
    z-index: 998;
    transition: .25s;
`

const MobileItems = styled.div`
    position: relative;
    padding-bottom: 100px;
    z-index: 998;
`

const MobileMenuHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    padding: 6px 6px 6px 6px;
`

const MobileMenuClose = styled.div`
    grid-column: span 3 / span 3;
    width: 48px;
    margin-left: auto;
    @media (min-width: 992px) {
        display: none;
    }
    svg {
        margin-left: auto;
    }
`

const MobileMenuList = styled.ul`
    padding-top: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 992px) {
        
    }
`

const MobileMenuSingle = styled.li`
    font-family: "titling-gothic-fb-wide", sans-serif;
    font-size: 16px;
    color: #00b391 !important;
    padding-bottom: 22px !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
`

const MobileButtonBox = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const MobileButton = styled.a`
    margin-bottom: 10px;
    @media (min-width: 576px) {
        margin-bottom: 0px;
    }
`

// #endregion

export default function Header({ logos, mainMenu, mobileMenu, phoneNumbers, emails }) {

    const mainLogo = logos[0].acf.logo.url;
    const primaryPhone = phoneNumbers[0].values[0].value;
    const primaryEmail = emails[0].values[0].value;

    return (
        <HeaderStyle>
            <HeaderTelephone href={`tel:${primaryPhone}`}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/></svg>
            </HeaderTelephone>
            <DesktopLogoLink href="/">
                <DesktopLogo src={mainLogo} />
            </DesktopLogoLink>
            <MobileMenuOpen id="mobile-menu-open" onClick={mobiletoggle}>
                <svg width="24" height="24" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="4" fill="white"/>
                    <rect y="12" width="25" height="4" fill="white"/>
                    <rect y="24" width="25" height="4" fill="white"/>
                </svg>
            </MobileMenuOpen>
        <DesktopNavi>
            <DesktopMenu>
                {mainMenu.map((item) => {
                    if (item.children) {
                        return (
                            <DesktopMenuSingle key={item.id}>
                                <div id="dropdown-trigger" onClick={toggleDropdown} className="">{item.title}</div>
                                <DesktopDropdown id="dropdown">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </DesktopDropdown>
                            </DesktopMenuSingle>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <DesktopMenuSingle key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </DesktopMenuSingle>
                            )
                        } else {
                            return (
                                <DesktopMenuSingle key={item.id}>
                                    <Link href={item.url}>{item.title}</Link>
                                </DesktopMenuSingle>
                            )
                        }
                    }
                })}
            </DesktopMenu>
        </DesktopNavi>
          <MobileMenu id="mobile-menu">
            <MobileItems id="mobile-items">
                <MobileMenuHeader>
                    <HeaderTelephone href={`tel:${primaryPhone}`}>
                        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/></svg>
                    </HeaderTelephone>
                    <DesktopLogoLink href="/">
                        <DesktopLogo src={mainLogo} />
                    </DesktopLogoLink>
                    <MobileMenuClose id="mobile-menu-close" onClick={mobiletoggle}>
                        <svg className="mx-auto" width="32" height="32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </MobileMenuClose>
                </MobileMenuHeader>
                <MobileMenuList className="pt-12 px-6">
                {mobileMenu.map((item) => {
                    if (item.children) {
                        return (
                            <MobileMenuSingle key={item.id}>
                                <div id="dropdown-trigger" onClick={toggleDropdown}>
                                    <div>{item.title}</div>
                                    <svg className="w-5 p-1 mr-auto pointer-events-none" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </div>
                                <Dropdown id="dropdown">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </Dropdown>
                            </MobileMenuSingle>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <MobileMenuSingle key={item.id}>
                                    <a href={item.url} className="" onClick={mobiletoggle} >{item.title}</a>
                                </MobileMenuSingle>
                            )
                        } else {
                            return (
                                <MobileMenuSingle key={item.id}>
                                    <Link href={item.url} onClick={mobiletoggle}>{item.title}</Link>
                                </MobileMenuSingle>
                            )
                        }
                    }
                })}
                </MobileMenuList>
                <MobileButtonBox>
                    <MobileButton href={`tel:${primaryPhone}`}>
                        <div className="invert-button">Call Now</div>
                    </MobileButton>
                    <MobileButton href={`mailto:${primaryEmail}`}>
                        <div className="invert-button">Email Now</div>
                    </MobileButton>
                </MobileButtonBox>
            </MobileItems>
        </MobileMenu>
        </HeaderStyle>
    );
}
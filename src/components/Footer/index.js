import React from 'react';
import {FooterStyle,
    StyledLink,
    FooterWrapper,
    FooterTitle,
    FooterContainer,
    FooterSub,
    FooterExplain,
    FooterExplainSub,
    ExplainContainer,
    ServiceContainer,
} from './styled';
const Footer = () => {
    function openTab() {
        window.open('http://it.daejin.ac.kr/49.html');
    }

    return (
        <FooterWrapper>
            <FooterStyle>
                <StyledLink to="" onClick={openTab}>졸업작품</StyledLink>
                <StyledLink to ="/student">학생소개</StyledLink>
                <StyledLink to ="/service">서비스 소개</StyledLink>
            </FooterStyle>
            <hr/>
            <FooterContainer>

                <ServiceContainer>
                    <FooterExplain>문의사항 1555-9999</FooterExplain>
                    <FooterExplainSub>운영시간 : 평일 09:00 - 18:00</FooterExplainSub>

                </ServiceContainer>

                <ExplainContainer>
                    <FooterTitle>대진대학교</FooterTitle>
                    <FooterSub>경기도 포천시 호국로 1007</FooterSub>
                    <FooterSub>백엔드-전은희 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 프론트엔드-문희리</FooterSub>
                    <FooterSub>Email-20191523@daejin.ac.kr | 20191524@daejin.ac.kr</FooterSub>

                </ExplainContainer>

            </FooterContainer>

        </FooterWrapper>
    );
};

export default Footer;
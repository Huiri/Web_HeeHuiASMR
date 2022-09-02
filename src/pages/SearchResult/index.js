import React from 'react';
import {
    LayoutContainer,
    NavBar,
    Main,
    SideBar,
    RelatedSearchTitle,
    NavWrapper,
    RelatedSearchItem,
    RelatedSearchWrapper,
    SearchResultWrapper,
    SearchResultCount,
    SearchResultText,
    Result,
    SideBarSearchTitle,
    SideBarWrapper,
    SideBarSearchItem,
    SideBarRecommendWrapper,
    SideBarRecommendTitle,
    SideBarRecommendItem, BlankSpace, ViewMoreBtn
} from './styled';
import {PromotionSection, PromotionSub, PromotionText, PromotionWrapper, VideoThumbnail} from "../Main/styled";
const SearchResult = () => {
    return (
        <LayoutContainer>
            <Result>
                <SearchResultWrapper>
                    <SearchResultCount>7</SearchResultCount>
                    <SearchResultText>개의 결과가 존재합니다.</SearchResultText>
                </SearchResultWrapper>
            </Result>
            <BlankSpace/>
                <NavBar>
                    <NavWrapper>
                        <RelatedSearchTitle>연관 검색어</RelatedSearchTitle>
                        <RelatedSearchWrapper>
                            <RelatedSearchItem>고구마</RelatedSearchItem>
                            <RelatedSearchItem>붕어빵</RelatedSearchItem>
                            <RelatedSearchItem>순대</RelatedSearchItem>
                            <RelatedSearchItem>염통</RelatedSearchItem>
                            <RelatedSearchItem>붕어싸만코</RelatedSearchItem>
                        </RelatedSearchWrapper>
                    </NavWrapper>
                </NavBar>
                <Main>
                    <PromotionSection>
                        <PromotionWrapper>
                            <VideoThumbnail className='1'/>
                            <PromotionText>We've Got Your Style</PromotionText>
                            <PromotionSub>강유미의 미용실</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='2'/>
                            <PromotionText>22 F/W Essential</PromotionText>
                            <PromotionSub>추운 날씨의 군고구마</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='3'/>
                            <PromotionText>Rising ASMR</PromotionText>
                            <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='4'/>
                            <PromotionText>Rising ASMR</PromotionText>
                            <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                        </PromotionWrapper>
                    </PromotionSection>
                    <PromotionSection>
                        <PromotionWrapper>
                            <VideoThumbnail className='1'/>
                            <PromotionText>We've Got Your Style</PromotionText>
                            <PromotionSub>강유미의 미용실</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='2'/>
                            <PromotionText>22 F/W Essential</PromotionText>
                            <PromotionSub>추운 날씨의 군고구마</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='3'/>
                            <PromotionText>Rising ASMR</PromotionText>
                            <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                        </PromotionWrapper>
                        <PromotionWrapper>
                            <VideoThumbnail className='4'/>
                            <PromotionText>Rising ASMR</PromotionText>
                            <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                        </PromotionWrapper>
                    </PromotionSection>

                    <ViewMoreBtn>더보기</ViewMoreBtn>
                </Main>
                <SideBar>
                    <SideBarWrapper>
                        <SideBarSearchTitle>인기 검색어</SideBarSearchTitle>
                        <SideBarSearchItem>인기 검색어</SideBarSearchItem>
                        <SideBarSearchItem>인기</SideBarSearchItem>
                        <SideBarSearchItem>인기 검색어</SideBarSearchItem>
                        <SideBarSearchItem>검색어</SideBarSearchItem>
                    </SideBarWrapper>
                    <SideBarRecommendWrapper>
                        <SideBarRecommendTitle>오늘의 키워드</SideBarRecommendTitle>
                        <SideBarRecommendItem>군고구마</SideBarRecommendItem>
                        <SideBarRecommendItem>공부</SideBarRecommendItem>

                    </SideBarRecommendWrapper>
                </SideBar>

        </LayoutContainer>
    );
};

export default SearchResult;
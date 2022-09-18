import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
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
import {PromotionSection} from "../Main/styled";
import axios from "axios";
import PostVideoCard from "../../components/common/PostVideoCard";

const SearchResult = () => {
    const [searchData, setSearchData] = useState([]);
    const params = useParams();


    /*
    useEffect(() => {

        async function fetchData() {
            const result = await axios.get(
                `http://localhost:3000/product/search?word=${params.word}`
            );
            console.log(result.data.result);
            setSearchData(result.data.result);
        }
        fetchData();
    }, []);
    */


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
                        <PostVideoCard param={params}/>
                    </PromotionSection>
                    <PromotionSection>
                        <PostVideoCard/>
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
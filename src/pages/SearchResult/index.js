import React, { useState } from 'react';
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
    SideBarRecommendItem,
    BlankSpace,
    ViewMoreBtn,
    PromotionSection
} from './styled';
import PostVideoCard from "../../components/common/PostVideoCard";
import useFetch from '../../hooks/useYoutube';
import PromotionCard from '../../components/common/PromotionCard';
import { useNavigate, useParams } from 'react-router-dom';

const SearchResult = () => {
    let { params } = useParams();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const videoList = useFetch([]);

    const searchList = ['고구마', '붕어빵', '강유미', '순대', '붕어싸만코'];

    const [searchText, setSearchText] = useState(params);

    const onSearchTextClick = (search)=>{
        setSearchText(search);
        navigate(`/search/${search}`);
    };

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
                        {searchList.map((search, idx) => (
                            <RelatedSearchItem key={idx} onClick={()=>{onSearchTextClick(search);}}>{search}</RelatedSearchItem>
                        ))}
                    </RelatedSearchWrapper>
                </NavWrapper>
            </NavBar>
            <Main>
                <PromotionSection>
                    <PromotionCard/>
                </PromotionSection>

                <ViewMoreBtn onClick={()=> setPage(page+1)}>더보기</ViewMoreBtn>
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
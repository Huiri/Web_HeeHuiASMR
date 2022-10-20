import React, { useState, useEffect } from 'react';
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
    PromotionSection
} from './styled';
import useFetch from '../../hooks/useYoutube';
import { useNavigate, useParams } from 'react-router-dom';
import ApiVideoCard from '../../components/common/ApiVideoCard';

const SearchResult = () => {
    let parameter = useParams().word;
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [param, setParam] = useState(parameter);


    const searchList = ['고구마', '붕어빵', '강유미', '순대', '붕어싸만코'];

    const [searchText, setSearchText] = useState(param);

    const onSearchTextClick = (search)=>{
        setSearchText(search);
        navigate(`/search/${search}`);
    };
    useEffect(()=>{
        setParam(parameter);
    }, [parameter]);

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
                    <ApiVideoCard param={param}/>
                </PromotionSection>

            </Main>
            <SideBar>
                <SideBarWrapper>
                    <SideBarSearchTitle>인기 검색어</SideBarSearchTitle>
                    <SideBarSearchItem>해리포터</SideBarSearchItem>
                    <SideBarSearchItem>공부</SideBarSearchItem>
                    <SideBarSearchItem>강유미</SideBarSearchItem>
                </SideBarWrapper>
                <SideBarRecommendWrapper>
                    <SideBarRecommendTitle>오늘의 키워드</SideBarRecommendTitle>
                    <SideBarRecommendItem>졸업작품</SideBarRecommendItem>
                    <SideBarRecommendItem>타이핑 소리</SideBarRecommendItem>

                </SideBarRecommendWrapper>
            </SideBar>

        </LayoutContainer>
    );
};

export default SearchResult;
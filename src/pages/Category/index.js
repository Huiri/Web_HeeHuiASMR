import React, {useState} from 'react';
import {
    PromotionTitle,
    PromotionSubTitle,
    SearchInput,
    ViewMoreBtn,
    ViewMoreBtnText,
    SearchDiv,
    SearchBtn,
    CategoryBtn,
    CategoryContainer,
    CategoryWrapper
} from './styled';

import {PromotionSection} from '../Main/styled';

import {useNavigate} from "react-router-dom";
import PostVideoCard from "../../components/common/PostVideoCard";

const Category = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [categorySearch, setCategorySearch] = useState('');
    const [param, setParam] = useState('');

    const onSearch = e => {
        e.preventDefault();
        if(categorySearch === ''){
            alert("검색어를 입력해주세요.");
        } else {
            setParam(categorySearch);
            navigate(`/category/${categorySearch}`);
        }
        setCategorySearch('');
    };
    const onCategoryClick = (category) => {
        setParam(category);
        navigate(`/category/${category}`);
    };
    const handleChange = e => {
        setCategorySearch(e.target.value);
    };
    const categoryList = ["전체", "음식", "자연", "웃음", "수면", "팅글"];

    return (
        <CategoryContainer>
            <PromotionTitle>카테고리별 맞춤 선택</PromotionTitle>
            <PromotionSubTitle>ASMR with US!</PromotionSubTitle>
            <SearchDiv>
                <form onSubmit={onSearch}>
                    <SearchInput type={"text"} value={categorySearch} placeholder={"오늘의 키워드는?"} onChange={handleChange}/>
                    <SearchBtn type={"submit"} onClick={onSearch}/>
                </form>
            </SearchDiv>
            <CategoryWrapper>

                {categoryList.map((category) => (
                    <CategoryBtn  key={category} onClick={()=>onCategoryClick(category)}>#{category}</CategoryBtn>

                ))}
            </CategoryWrapper>
            <hr/>
            <PromotionSection>
                {/*<PostVideoCard page={page} param={param} orders={'rating'}/>*/}
            </PromotionSection>
            <ViewMoreBtn>
                <ViewMoreBtnText onClick={()=> setPage(page+1)}>{ (isShowMore ? '닫기' : '더보기')}</ViewMoreBtnText>
            </ViewMoreBtn>

        </CategoryContainer>


    );
};

export default Category;
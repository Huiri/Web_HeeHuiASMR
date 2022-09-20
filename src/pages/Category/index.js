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
} from './styled'

import {PromotionSection} from '../Main/styled';

import {useNavigate} from "react-router-dom";
import PostVideoCard from "../../components/common/PostVideoCard";

const Category = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const navigate = useNavigate();


    const [categorysearch, setCategorySearch] = useState('');

    const onSearch = e => {
        e.preventDefault();
        if(categorysearch === ''){
            alert("검색어를 입력해주세요.");
        } else {
            navigate(`/category/${categorysearch}`);
        }
        setCategorySearch('');
    }
    const onCategoryClick = (param) => {
        navigate(`/category/${param}`);
    }
    const handleChange = e => {
        setCategorySearch(e.target.value);
    }
    const categoryList = ["전체", "음식", "자연", "웃음", "수면", "팅글"];
   {/*} const showPost = useMemo(() => {
        const shortPost = post.slice(0, 9);
        if (post.length > imgLimit.current){
            if(isShowMore) {return post};
            return shortPost;
        }
        return post;
    }, [isShowMore]);*/}
    return (
        <CategoryContainer>
            <PromotionTitle>카테고리별 맞춤 선택</PromotionTitle>
            <PromotionSubTitle>ASMR with US!</PromotionSubTitle>
            <SearchDiv>
                <form onSubmit={onSearch}>
                    <SearchInput type={"text"} value={categorysearch} placeholder={"오늘의 키워드는?"} onChange={handleChange}/>
                    <SearchBtn type={"submit"} onClick={onSearch}/>
                </form>
            </SearchDiv>
            <CategoryWrapper>

                {categoryList.map((category) => (
                    <CategoryBtn  key={category} onClick={()=>onCategoryClick(category)}>#{category}</CategoryBtn>

                    ))}
                {/*<CategoryBtn onClick={onCategoryClick}>#음식</CategoryBtn>*/}
                {/*<CategoryBtn onClick={onCategoryClick}>#자연</CategoryBtn>*/}
                {/*<CategoryBtn onClick={onCategoryClick}>#웃음</CategoryBtn>*/}
                {/*<CategoryBtn onClick={onCategoryClick}>#수면</CategoryBtn>*/}
                {/*<CategoryBtn onClick={onCategoryClick}>#팅글</CategoryBtn>*/}

            </CategoryWrapper>
            <hr/>
            <PromotionSection>
                {/*<PostVideoCard/>*/}
            </PromotionSection>
            <PromotionSection>
                {/*<PostVideoCard/>*/}
            </PromotionSection>
            <ViewMoreBtn>
                <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{ (isShowMore ? '닫기' : '더보기')}</ViewMoreBtnText>
            </ViewMoreBtn>

        </CategoryContainer>


    );
};

export default Category;
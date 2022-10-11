import React, {useState} from 'react';
import {LayoutContainer} from "./styled";
import {
    CategoryBtn,
    CategoryWrapper,
    PromotionSubTitle,
    PromotionTitle,
    SearchBtn,
    SearchDiv,
    SearchInput
} from "../Category/styled";
import {useNavigate} from "react-router-dom";

const NewVideo = () => {
    const categoryList = ["전체", "음식", "자연", "웃음", "수면", "팅글"];
    const navigate = useNavigate();

    const [newsearch, setNewSearch] = useState('');
    const onSearch = e => {
        e.preventDefault();

        if(newsearch === ''){
            alert("검색어를 입력해주세요.");
        } else {
            navigate(`/new/${newsearch}`);
        }
        setNewSearch('');
    }
    const onCategoryClick = (param) => {
        navigate(`/category/${param}`);
    }
    const handleChange = e => {
        setNewSearch(e.target.value);
    }
    return (
        <LayoutContainer>
            <PromotionTitle>최신 업로드 영상</PromotionTitle>
            <PromotionSubTitle>오늘 업로드 된 영상은?</PromotionSubTitle>
            <SearchDiv>
                <form onSubmit={onSearch}>
                    <SearchInput type={"text"} value={newsearch} placeholder={"요즘 뜨는 키워드는?"} onChange={handleChange}/>
                    <SearchBtn type={"submit"} onClick={onSearch}/>
                </form>
            </SearchDiv>
            <CategoryWrapper>

                {categoryList.map((category) => (
                    <CategoryBtn  key={category} onClick={()=>onCategoryClick(category)}>#{category}</CategoryBtn>

                ))}
            </CategoryWrapper>
            <hr/>

        </LayoutContainer>
    );
};

export default NewVideo;
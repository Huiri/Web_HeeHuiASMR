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

import {PromotionSection, PromotionSub, PromotionText, PromotionWrapper, VideoThumbnail} from "../Main/styled";

import {useNavigate} from "react-router-dom";

//import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg'
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
    const handleChange = e => {
        setCategorySearch(e.target.value);
    }
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
                <CategoryBtn>#전체</CategoryBtn>
                <CategoryBtn>#음식</CategoryBtn>
                <CategoryBtn>#자연</CategoryBtn>
                <CategoryBtn>#웃음</CategoryBtn>
                <CategoryBtn>#수면</CategoryBtn>
                <CategoryBtn>#팅글</CategoryBtn>

            </CategoryWrapper>
            <hr/>
            <PromotionSection>
                <PromotionWrapper>
                    <VideoThumbnail className='1'/>
                    <PromotionText>강유미의 미용실</PromotionText>
                    <PromotionSub>from Yumi Gang</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='2'/>
                    <PromotionText>해리포터 기숙사 소음</PromotionText>
                    <PromotionSub>닥쳐 말포이</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='3'/>
                    <PromotionText>산고구마 먹방</PromotionText>
                    <PromotionSub>끼토산</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='4'/>
                    <PromotionText>전파 백색소음</PromotionText>
                    <PromotionSub>전파 먹는 고양이</PromotionSub>
                </PromotionWrapper>
                
            </PromotionSection>
            <PromotionSection>
                <PromotionWrapper>
                    <VideoThumbnail className='1'/>
                    <PromotionText>강유미의 미용실</PromotionText>
                    <PromotionSub>from Yumi Gang</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='2'/>
                    <PromotionText>해리포터 기숙사 소음</PromotionText>
                    <PromotionSub>닥쳐 말포이</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='3'/>
                    <PromotionText>산고구마 먹방</PromotionText>
                    <PromotionSub>끼토산</PromotionSub>
                </PromotionWrapper>
                <PromotionWrapper>
                    <VideoThumbnail className='4'/>
                    <PromotionText>전파 백색소음</PromotionText>
                    <PromotionSub>전파 먹는 고양이</PromotionSub>
                </PromotionWrapper>
                
            </PromotionSection>
            <ViewMoreBtn>
                <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{ (isShowMore ? '닫기' : '더보기')}</ViewMoreBtnText>
            </ViewMoreBtn>

        </CategoryContainer>


    );
};

export default Category;
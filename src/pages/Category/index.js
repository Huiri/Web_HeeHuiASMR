import React, {useState, useRef, useMemo} from 'react';
import {
    PromotionTitle,
    PromotionSection,
    PromotionContainer,
    PromotionWrapper,
    VideoThumbnail,
    PromotionText,
    PromotionSub,
    PromotionSubTitle,
    SearchInput,
    ViewMoreBtn,
    ViewMoreBtnText,
    SearchDiv,
    SearchBtn,
    CategoryBtn,
    CategoryContainer
} from './styled'

//import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg'
const Category = () => {

    const post = 9;
    const [isShowMore, setIsShowMore] = useState(false);
    const imgLimit = useRef(9);

   {/*} const showPost = useMemo(() => {
        const shortPost = post.slice(0, 9);
        if (post.length > imgLimit.current){
            if(isShowMore) {return post};
            return shortPost;
        }
        return post;
    }, [isShowMore]);*/}
    return (
        <PromotionWrapper>
            <PromotionTitle>카테고리별 맞춤 선택</PromotionTitle>
            <PromotionSubTitle>ASMR with US!</PromotionSubTitle>
            <SearchDiv>
                <SearchInput/>
                <SearchBtn/>
            </SearchDiv>
            <CategoryContainer>
                <CategoryBtn>#전체</CategoryBtn>
                <CategoryBtn>#음식</CategoryBtn>
                <CategoryBtn>#자연</CategoryBtn>
                <CategoryBtn>#코믹</CategoryBtn>
                <CategoryBtn>#수면</CategoryBtn>
                <CategoryBtn>#팅글</CategoryBtn>

            </CategoryContainer>
            <hr/>
            <PromotionSection>
                <PromotionContainer>
                    <VideoThumbnail className='1'/>
                    <PromotionText>강유미의 미용실</PromotionText>
                    <PromotionSub>from Yumi Gang</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='2'/>
                    <PromotionText>해리포터 기숙사 소음</PromotionText>
                    <PromotionSub>닥쳐 말포이</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='3'/>
                    <PromotionText>산고구마 먹방</PromotionText>
                    <PromotionSub>끼토산</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='4'/>
                    <PromotionText>전파 백색소음</PromotionText>
                    <PromotionSub>전파 먹는 고양이</PromotionSub>
                </PromotionContainer>
                
            </PromotionSection>
            <PromotionSection>
                <PromotionContainer>
                    <VideoThumbnail className='1'/>
                    <PromotionText>강유미의 미용실</PromotionText>
                    <PromotionSub>from Yumi Gang</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='2'/>
                    <PromotionText>해리포터 기숙사 소음</PromotionText>
                    <PromotionSub>닥쳐 말포이</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='3'/>
                    <PromotionText>산고구마 먹방</PromotionText>
                    <PromotionSub>끼토산</PromotionSub>
                </PromotionContainer>
                <PromotionContainer>
                    <VideoThumbnail className='4'/>
                    <PromotionText>전파 백색소음</PromotionText>
                    <PromotionSub>전파 먹는 고양이</PromotionSub>
                </PromotionContainer>
                
            </PromotionSection>
            <ViewMoreBtn>
                <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{ (isShowMore ? '닫기' : '더보기')}</ViewMoreBtnText>
            </ViewMoreBtn>

        </PromotionWrapper>


    );
};

export default Category;
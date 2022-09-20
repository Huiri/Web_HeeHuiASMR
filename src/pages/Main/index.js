import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {HomeWrapper,
    CategoryContainer,
    SliderExplain,
    SliderTitle,
    SliderSubtitle,
    CategoryTitle,
    CategoryText,
    CategoryList,
    SliderWrapper,
    BannerWrapper,
    PromotionTitle,
    PromotionSection,
    PromotionContainer,
    VideoWrapper,
    ViewMoreBtn,
    ViewMoreBtnText,
    MakerSection,
    MakerImg,
    MakerSubImg,
    MakerImgContainer,
    CategoryBtnContainer,
    CategoryBtn,
    CollectionSection,
    CollectionImg,
    SliderViewMore,
} from './styled';

import PostVideoCard from "../../components/common/PostVideoCard";
import PromotionCard from "../../components/common/PromotionCard";

import SimpleSlider from "../../Utils/SimpleSlider";

const Main = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);

    //네이버 로그인 초기화
    // const NaverLogin = () => {
    //     const url = window.opener.document.location.href;
    //     const {hostname, protocol} = window.location;
    //
    //     const callbackUrl = `${protocol}//${hostname}/naver-login`;
    //     const naverLogin = new window.naver.LoginWithNaverId({
    //         clientId : process.env.REACT_APP_NAVER_CLIENT_ID,
    //         callbackUrl : process.env.REACT_APP_NAVER_CALLBACK_URL,
    //         isPopup : false,
    //         callbackHandle : false,
    //     });
    //     naverLogin.init();
    // }
    const categorylist = ["음식", "자연", "수면", "웃음", "팅글"];
    return (
        <HomeWrapper>
            {/*<Slider style={styleObj}
            slideIndex = {slideIndex}/>*/}
            {/*<ImgContainer>이미지 들어갈 예정</ImgContainer>*/}
            <SimpleSlider/>
            <SliderWrapper>
                <SliderTitle>나만을 위한 ASMR</SliderTitle>
                <SliderSubtitle>주제별로 나뉘어져 원하는 ASMR을 들을 수 있어요!</SliderSubtitle>

                <SliderExplain onClick={()=>setIsViewMore(!isViewMore)}>View more</SliderExplain>
                {isViewMore && <SliderViewMore>아무것도 없어요</SliderViewMore>}

            </SliderWrapper>

            <CategoryContainer>
                <CategoryTitle>Category</CategoryTitle>

                <CategoryList>
                    {categorylist.map((category) => (
                        <CategoryText key={category}>{category}</CategoryText>

                    ))}

                </CategoryList>
            </CategoryContainer>
            <BannerWrapper/>

            <PromotionContainer>
                <PromotionTitle>인기 급상승</PromotionTitle>
                <PromotionSection>
                    <PromotionCard/>
                    <PromotionCard/>
                    <PromotionCard/>
                </PromotionSection>

            </PromotionContainer>
            <VideoWrapper>
                <PromotionTitle>최근 업로드</PromotionTitle>
                <PromotionSection>
                    <PostVideoCard/>
                </PromotionSection>
                <ViewMoreBtn to="/detail">
                    <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>

            <MakerSection>
                <PromotionTitle color="#757575">인기 크리에이터</PromotionTitle>

                <MakerImgContainer>
                    <MakerSubImg color="#d9bdbd"/>
                    <MakerSubImg color="#d9d6bd"/>
                    <MakerImg/>
                    <MakerSubImg color="#bed9bd"/>
                    <MakerSubImg color="#bdc5d9"/>
                </MakerImgContainer>
            </MakerSection>

            <VideoWrapper>
                <PromotionTitle>카테고리별 영상</PromotionTitle>
                <CategoryBtnContainer>
                    {categorylist.map((category) => (
                        <CategoryBtn key={category}>#{category}</CategoryBtn>
                    ))}

                </CategoryBtnContainer>
                <PromotionSection>
                    {/*<PostVideoCard/>*/}
                </PromotionSection>
                <ViewMoreBtn to="/detail">
                    <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>
            <PromotionTitle>떠오르는 크리에이터</PromotionTitle>

            <CollectionSection>

                <CollectionImg color="#a5aec4"/>
                <CollectionImg/>

            </CollectionSection>

        </HomeWrapper>
    );
};

export default Main;
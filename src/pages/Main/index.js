import React, {useState} from 'react';
import {ReactComponent as PauseIcon} from '../../assets/icons/PauseIcon.svg';
import {HomeWrapper,
    CategoryContainer,
    SliderExplain,
    SliderTitle,
    SliderSubtitle,
    CategoryTitle,
    CategoryText,
    CategoryList,
    SliderWrapper,
    PagingArrow,
    PagingText,
    PagingWrapper,
    PagingPause,
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
    ImgContainer
} from './styled';
import Slider from "../../Utils/Slider";

import PostVideoCard from "../../components/common/PostVideoCard";
import PromotionCard from "../../components/common/PromotionCard";

const Main = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);

    //slider 파트
    const [slideIndex, setSlideIndex] = useState(1);
    const styleObj = {
        zIndex : -10,
        position: 'relative'
    }
    // const [videolist, setVideolist] = useState([]);
    //
    // useEffect(() => {
    //         axios
    //             .get(
    //                 `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=3&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
    //                 // `https://www.googleapis.com/youtube/v3/search?part=snippet&topicId=ASMR&maxResults=10&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
    //             )
    //             .then((res) => {
    //                 console.log(res);
    //                 setVideolist(res.data.items);
    //             })
    //             .catch(() => {});
    //         return function cleanup(){
    //
    //         };
    //     }, []);
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
    return (
        <HomeWrapper>
            {/*<Slider style={styleObj}
            slideIndex = {slideIndex}/>*/}
            <ImgContainer>이미지 들어갈 예정</ImgContainer>
            <SliderWrapper>
                <SliderTitle>나만을 위한 ASMR</SliderTitle>
                <SliderSubtitle>주제별로 나뉘어져 원하는 ASMR을 들을 수 있어요!</SliderSubtitle>
                <PagingWrapper>
                    <PagingArrow>&lt;</PagingArrow>
                    <PagingText>1/10</PagingText>
                    <PagingArrow>&gt;</PagingArrow>
                    <PagingPause>
                        <PauseIcon/>
                    </PagingPause>
                </PagingWrapper>

                <SliderExplain onClick={()=>setIsViewMore(!isViewMore)}>View more</SliderExplain>
                {isViewMore && <SliderViewMore>아무것도 없어요</SliderViewMore>}

            </SliderWrapper>

            <CategoryContainer>
                <CategoryTitle>Category</CategoryTitle>

                <CategoryList>
                    <CategoryText>음식</CategoryText>
                    <CategoryText>자연</CategoryText>
                    <CategoryText>수면</CategoryText>
                    <CategoryText>웃음</CategoryText>
                    <CategoryText>팅글</CategoryText>

                </CategoryList>
            </CategoryContainer>
            <BannerWrapper/>

            <PromotionContainer>
                <PromotionTitle>Promotion</PromotionTitle>
                <PromotionSection>
                    <PromotionCard/>
                    <PromotionCard/>
                    <PromotionCard/>
                </PromotionSection>

            </PromotionContainer>
            <VideoWrapper>
                <PromotionTitle>New Arrival</PromotionTitle>
                <PromotionSection>
                    <PostVideoCard/>
                </PromotionSection>
                <ViewMoreBtn>
                    <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>

            <MakerSection>
                <PromotionTitle color="#757575">New Maker</PromotionTitle>

                <MakerImgContainer>
                    <MakerSubImg color="#d9bdbd"/>
                    <MakerSubImg color="#d9d6bd"/>
                    <MakerImg/>
                    <MakerSubImg color="#bed9bd"/>
                    <MakerSubImg color="#bdc5d9"/>
                </MakerImgContainer>
            </MakerSection>

            <VideoWrapper>
                <PromotionTitle>New Arrival</PromotionTitle>
                <CategoryBtnContainer>
                    <CategoryBtn>#전체</CategoryBtn>
                    <CategoryBtn>#음식</CategoryBtn>
                    <CategoryBtn>#자연</CategoryBtn>
                    <CategoryBtn>#코믹</CategoryBtn>
                    <CategoryBtn>#수면</CategoryBtn>
                    <CategoryBtn>#팅글</CategoryBtn>

                </CategoryBtnContainer>
                <PromotionSection>
                    <PostVideoCard/>
                </PromotionSection>
                <ViewMoreBtn>
                    <ViewMoreBtnText onClick={()=> setIsShowMore(!isShowMore)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>
            <PromotionTitle>Collection</PromotionTitle>

            <CollectionSection>

                <CollectionImg color="#a5aec4"/>
                <CollectionImg/>

            </CollectionSection>

        </HomeWrapper>
    );
};

export default Main;
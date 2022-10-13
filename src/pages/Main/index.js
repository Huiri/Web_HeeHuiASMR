import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sound from "../../assets/img/sound.jpg";
import oceanpan from "../../assets/img/oceanpan.jpg";
import dark from "../../assets/img/dark.jpg";
import tree from "../../assets/img/tree.jpg";
import headphone from "../../assets/img/headphone.jpg";
import ocean from "../../assets/img/ocean.jpg";
import atom from "../../assets/img/atom.jpg";
import {HomeWrapper,
    CategoryContainer,
    SliderExplain,
    SliderTitle,
    SliderSubtitle,
    CategoryTitle,
    CategoryText,
    CategoryList,
    SliderWrapper,
    BannerImg,
    BannerText,
    BannerTitle,
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
    HotSection,
    TextWrapper
} from './styled';

import PostVideoCard from "../../components/common/PostVideoCard";
import PromotionCard from "../../components/common/PromotionCard";

import SimpleSlider from "../../Utils/SimpleSlider";
import {useNavigate} from "react-router-dom";
import CenterSlider from "../../Utils/CenterSlider";

const Main = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);
    const [page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [param, setParam] = useState('');

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
    const navigate = useNavigate();
    const categorylist = ["음식", "자연", "수면", "웃음", "팅글"];
    const onCategoryClick = (param) => {
        navigate(`/category/${param}`);
    };
    return (
        <HomeWrapper>
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
                        <CategoryText key={category} onClick={()=>onCategoryClick(category)}>{category}</CategoryText>

                    ))}

                </CategoryList>
            </CategoryContainer>
            <BannerWrapper>
                <BannerImg src={sound} alt={"배너"}/>
                <TextWrapper>
                    <BannerTitle>오늘의 수면을 위한 선택</BannerTitle>
                    <BannerText>HH ASMR</BannerText>

                </TextWrapper>
            </BannerWrapper>

            <PromotionContainer>
                <PromotionTitle>인기 급상승</PromotionTitle>
                <HotSection>
                    {/*<PromotionCard/>*/}
                </HotSection>

            </PromotionContainer>
            <VideoWrapper>
                <PromotionTitle>최근 업로드</PromotionTitle>
                <PromotionSection>
                    {/*<PostVideoCard page={page}/>*/}
                </PromotionSection>
                <ViewMoreBtn>
                    <ViewMoreBtnText onClick={()=> setPage(page+1)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>

            <MakerSection>
                <PromotionTitle color="#757575">인기 크리에이터</PromotionTitle>
                <CenterSlider/>

                <MakerImgContainer>
                    <MakerSubImg src={oceanpan} alt={"서브"}/>
                    <MakerSubImg src={dark} alt={"서브"}/>
                    <MakerImg src={tree} alt={"메인"}/>
                    <MakerSubImg src={ocean} alt={"서브"}/>
                    <MakerSubImg src={headphone} alt={"서브"}/>
                </MakerImgContainer>
            </MakerSection>

            <VideoWrapper>
                <PromotionTitle>카테고리별 영상</PromotionTitle>
                <CategoryBtnContainer>
                    {categorylist.map((category) => (
                        <CategoryBtn key={category} onClick={()=>setParam(category)}>#{category}</CategoryBtn>
                    ))}

                </CategoryBtnContainer>
                <PromotionSection>
                    {/*<PostVideoCard page={page} param={param}/>*/}
                </PromotionSection>

            </VideoWrapper>
            <PromotionTitle>떠오르는 크리에이터</PromotionTitle>

            <CollectionSection>

                <CollectionImg src={atom} alt={"atom"}/>
                <CollectionImg/>

            </CollectionSection>

        </HomeWrapper>
    );
};

export default Main;
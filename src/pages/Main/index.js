import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sound from "../../assets/img/sound.jpg";
import oceanpan from "../../assets/img/oceanpan.jpg";
import dark from "../../assets/img/dark.jpg";
import tree from "../../assets/img/tree.jpg";
import headphone from "../../assets/img/headphone.jpg";
import ocean from "../../assets/img/ocean.jpg";
import atom from "../../assets/img/atom.jpg";
import {
    HomeWrapper,
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
    TextWrapper,
    CollectionText,
    CollectionTextWrapper, CollectionTitle,
} from './styled';
import { useRecoilState } from 'recoil';
import {VideoState} from "../../States/VideoStates";

import PostVideoCard from "../../components/common/PostVideoCard";
import PromotionCard from "../../components/common/PromotionCard";

import SimpleSlider from "../../Utils/SimpleSlider";
import {useNavigate} from "react-router-dom";
import CenterSlider from "../../Utils/CenterSlider";
import { UserNameState } from '../../States/LoginStates';
import axios from 'axios';
import ApiVideoCard from '../../components/common/ApiVideoCard';

const Main = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);
    const [page, setPage] = useState(1);
    const [param, setParam] = useState('');
    const [videoData, setVideoData] = useRecoilState(VideoState);
    const [dbVideo, setDbVideo] = useState([]);

    const FetchVideoData = () => {
        fetch('http://localhost:3001/video',
            {method:'GET',headers:{'Content-Type':'application/json'},})
            .then(res=>res.json())
            .then(data=> setVideoData(data))
            .catch(error => console.error('Error:', error));

    };
    // const fetchVideoDataDB = () => {
    //     axios.get('http://localhost:3002/video',{})
    //         .then((res) => {
    //             const {data} = res;
    //             setVideoData(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //
    // };

    useEffect(()=>{
        FetchVideoData();
        const videoList = [...videoData];
        setVideoData(shuffle(videoList));
        // fetchVideoDataDB();
    }, []);

    function shuffle(array) {
        const real = [...array];
        return real.sort(() => Math.random() - 0.5);
    }

    const navigate = useNavigate();
    const categoryList = ["요리", "자연", "수면", "웃음", "팅글"];
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
                    {categoryList.map((category) => (
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
                    {/*<ApiVideoCard page={page} count={2} order={"date"}/>*/}
                </PromotionSection>
                <ViewMoreBtn>
                    <ViewMoreBtnText onClick={()=> setPage(page+1)}>{isShowMore ? '닫기' : '더보기'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>

            <MakerSection>
                <PromotionTitle color="#757575">인기 크리에이터</PromotionTitle>
                {/*<CenterSlider/>*/}

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
                    {categoryList.map((category) => (
                        <CategoryBtn key={category} onClick={()=>setParam(category)}>#{category}</CategoryBtn>
                    ))}

                </CategoryBtnContainer>
                <PromotionSection>
                    <PostVideoCard page={page} param={param} count={8} data={videoData}/>
                </PromotionSection>

            </VideoWrapper>
            <PromotionTitle>떠오르는 크리에이터</PromotionTitle>

            <CollectionSection>

                <CollectionImg src={atom} alt={"atom"}/>
                <CollectionTextWrapper>
                    <CollectionTitle>HotCreator</CollectionTitle>
                    <CollectionText>원자분자맹자</CollectionText>
                    <CollectionTitle>주력 카테고리</CollectionTitle>
                    <CollectionText>자연, 힐링</CollectionText>
                    <CollectionTitle>일주일 사이 구독자 수 증가</CollectionTitle>
                    <CollectionText>+10,218명</CollectionText>
                    <CollectionTitle>최근 일주일 사이 조회수 추이</CollectionTitle>
                    <CollectionText>+22,340뷰</CollectionText>

                </CollectionTextWrapper>

            </CollectionSection>

        </HomeWrapper>
    );
};

export default Main;
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
import ScrollTop from '../../Utils/ScrollTop';
import handleScroll from '../../Utils/ScrollTop/handleScroll';

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
    const categoryList = ["??????", "??????", "??????", "??????", "??????"];
    const onCategoryClick = (param) => {
        navigate(`/category/${param}`);
    };
    return (
        <HomeWrapper>
            <SimpleSlider/>
            <SliderWrapper>
                <SliderTitle>????????? ?????? ASMR</SliderTitle>
                <SliderSubtitle>???????????? ???????????? ????????? ASMR??? ?????? ??? ?????????!</SliderSubtitle>

                <SliderExplain onClick={()=>setIsViewMore(!isViewMore)}>View more</SliderExplain>
                {isViewMore && <SliderViewMore>???????????? ?????????</SliderViewMore>}

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
                <BannerImg src={sound} alt={"??????"}/>
                <TextWrapper>
                    <BannerTitle>????????? ????????? ?????? ??????</BannerTitle>
                    <BannerText>HH ASMR</BannerText>

                </TextWrapper>
            </BannerWrapper>

            <PromotionContainer>
                <PromotionTitle>?????? ?????????</PromotionTitle>
                <HotSection>
                    {/*<PromotionCard data={videoData} param={'??????'}/>*/}
                </HotSection>

            </PromotionContainer>
            <VideoWrapper>
                <PromotionTitle>?????? ?????????</PromotionTitle>
                <PromotionSection>
                    {/*<ApiVideoCard page={page} count={2} order={"date"}/>*/}
                </PromotionSection>
                <ViewMoreBtn>
                    <ViewMoreBtnText onClick={()=> setPage(page+1)}>{isShowMore ? '??????' : '?????????'}</ViewMoreBtnText>
                </ViewMoreBtn>
            </VideoWrapper>

            <MakerSection>
                <PromotionTitle color="#757575">?????? ???????????????</PromotionTitle>
                {/*<CenterSlider/>*/}

                <MakerImgContainer>
                    <MakerSubImg src={oceanpan} alt={"??????"}/>
                    <MakerSubImg src={dark} alt={"??????"}/>
                    <MakerImg src={tree} alt={"??????"}/>
                    <MakerSubImg src={ocean} alt={"??????"}/>
                    <MakerSubImg src={headphone} alt={"??????"}/>
                </MakerImgContainer>
            </MakerSection>

            <VideoWrapper>
                <PromotionTitle>??????????????? ??????</PromotionTitle>
                <CategoryBtnContainer>
                    {categoryList.map((category) => (
                        <CategoryBtn key={category} onClick={()=>setParam(category)}>#{category}</CategoryBtn>
                    ))}

                </CategoryBtnContainer>
                <PromotionSection>
                    <PostVideoCard page={page} param={param} count={8} data={videoData}/>
                </PromotionSection>

            </VideoWrapper>
            <PromotionTitle>???????????? ???????????????</PromotionTitle>

            <CollectionSection>

                <CollectionImg src={atom} alt={"atom"}/>
                <CollectionTextWrapper>
                    <CollectionTitle>HotCreator</CollectionTitle>
                    <CollectionText>??????????????????</CollectionText>
                    <CollectionTitle>?????? ????????????</CollectionTitle>
                    <CollectionText>??????, ??????</CollectionText>
                    <CollectionTitle>????????? ?????? ????????? ??? ??????</CollectionTitle>
                    <CollectionText>+10,218???</CollectionText>
                    <CollectionTitle>?????? ????????? ?????? ????????? ??????</CollectionTitle>
                    <CollectionText>+22,340???</CollectionText>

                </CollectionTextWrapper>

            </CollectionSection>
            <ScrollTop handleClick={handleScroll}/>

        </HomeWrapper>
    );
};

export default Main;
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
    PromotionWrapper,
    PromotionTitle,
    PromotionSection,
    PromotionImg,
    PromotionText,
    PromotionSub,
    PromotionContainer,
    VideoWrapper,
    VideoThumbnail,
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

const Main = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);

    //slider 파트
    const [slideIndex, setSlideIndex] = useState(1);
    const styleObj = {
        zIndex : -10,
        position: 'relative'
    }
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
                    <PromotionWrapper>
                        <PromotionImg className='1'/>
                        <PromotionText>We've Got Your Style</PromotionText>
                        <PromotionSub>강유미의 미용실</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <PromotionImg className='2'/>
                        <PromotionText>22 F/W Essential</PromotionText>
                        <PromotionSub>추운 날씨의 군고구마</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <PromotionImg className='3'/>
                        <PromotionText>Rising ASMR</PromotionText>
                        <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                    </PromotionWrapper>
                </PromotionSection>

            </PromotionContainer>
            <VideoWrapper>
                <PromotionTitle>New Arrival</PromotionTitle>
                <PromotionSection>
                    <PromotionWrapper>
                        <VideoThumbnail className='1'/>
                        <PromotionText>We've Got Your Style</PromotionText>
                        <PromotionSub>강유미의 미용실</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='2'/>
                        <PromotionText>22 F/W Essential</PromotionText>
                        <PromotionSub>추운 날씨의 군고구마</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='3'/>
                        <PromotionText>Rising ASMR</PromotionText>
                        <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='4'/>
                        <PromotionText>Rising ASMR</PromotionText>
                        <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                    </PromotionWrapper>
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
                    <PromotionWrapper>
                        <VideoThumbnail className='1'/>
                        <PromotionText>We've Got Your Style</PromotionText>
                        <PromotionSub>강유미의 미용실</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='2'/>
                        <PromotionText>22 F/W Essential</PromotionText>
                        <PromotionSub>추운 날씨의 군고구마</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='3'/>
                        <PromotionText>Rising ASMR</PromotionText>
                        <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                    </PromotionWrapper>
                    <PromotionWrapper>
                        <VideoThumbnail className='4'/>
                        <PromotionText>Rising ASMR</PromotionText>
                        <PromotionSub>떠오르는 AMSR 영상</PromotionSub>
                    </PromotionWrapper>
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
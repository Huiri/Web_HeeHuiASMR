import React, {useCallback, useRef, useState} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import img1 from "../../assets/img/harry.jpg";
import img2 from "../../assets/img/music.jpg";
import img3 from "../../assets/img/tape.jpg";
import {PagingArrow, PagingPause, PagingText, PagingWrapper} from "./styled";
import {ReactComponent as PauseIcon} from "../../assets/icons/PauseIcon.svg";
import {ReactComponent as PlayIcon} from "../../assets/icons/PlayIcon.svg";

const ImgContainer = styled.img`
  width : 100vw;
  //height : 80vh;
  overflow: hidden;
  z-index: 1;
`

const PlayBtn = styled(PlayIcon)`
  margin-top : -14.5rem;
  margin-bottom : -14.5rem;
  width : 1.4rem;
  display: inline-block;
  color : gray;
`

const SimpleSlider = () => {

    const slickRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow : true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);
    const play = useCallback(() => slickRef.current.slickPlay(), []);
    const pause = useCallback(() => slickRef.current.slickPause(), []);

    return (
        <div>
            <Slider ref={slickRef} {...settings}>
                <div>
                    <ImgContainer src={img1}  alt=""/>
                </div>
                <div>
                    <ImgContainer src={img2}  alt=""/>
                </div>
                <div>
                    <ImgContainer src={img3}  alt=""/>
                </div>
            </Slider>


            <PagingWrapper>
                <PagingArrow onClick={previous}>&lt;</PagingArrow>
                <PagingText>1/3</PagingText>
                <PagingArrow onClick={next}>&gt;</PagingArrow>
                <PagingPause onClick={()=>setIsPlay(!isPlay)}>
                    {isPlay ? <PlayBtn onClick={play}/> : <PauseIcon onClick={pause}/> }
                </PagingPause>
            </PagingWrapper>

        </div>
    );

}
export default SimpleSlider;
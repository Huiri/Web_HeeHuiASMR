import React, {useCallback, useRef, useState} from "react";
import {PagingArrow, PagingPause, PagingText, PagingWrapper, ImgWrapper, ImgContainer, PlayBtn} from "./styled";
import {ReactComponent as PauseIcon} from "../../assets/icons/PauseIcon.svg";
import Slick from "react-slick";
import {sliderList} from "./sliderlist";


const SimpleSlider = () => {

    console.log(sliderList);
    const slickRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    /*const settings = {
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
    };*/

    const setting = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);
    const play = useCallback(() => slickRef.current.slickPlay(), []);
    const pause = useCallback(() => slickRef.current.slickPause(), []);

    return (
        <div>
            <Slick
                {...setting}
                initialSlide={0}
                afterChange={(slide) => setCurrentSlide(slide)}
                infinite
                arrow={false}
                slidesToshow={1}
                slidesToScroll={1}
            ref={slickRef}>
                {sliderList.map((image) => (
                    <ImgWrapper key={image.id}>
                        <ImgContainer src={image.src} alt={image.alt} />
                    </ImgWrapper>
                ))}

            </Slick>


            <PagingWrapper>
                <PagingArrow onClick={previous}>&lt;</PagingArrow>
                <PagingText> {currentSlide + 1}/{sliderList.length}</PagingText>
                <PagingArrow onClick={next}>&gt;</PagingArrow>
                <PagingPause onClick={()=>setIsPlay(!isPlay)}>
                    {isPlay ? <PlayBtn onClick={play}/> : <PauseIcon onClick={pause}/> }
                </PagingPause>
            </PagingWrapper>

        </div>
    );

}
export default SimpleSlider;
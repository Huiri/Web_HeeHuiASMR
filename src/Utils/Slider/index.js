/*import React, {useState, useRef, useEffect} from 'react';
import img1 from "../../assets/img/harry.jpg";
// import img2 from "../../assets/img/music.jpg";
// import img3 from "../../assets/img/tape.jpg";

import {sliderList} from './SliderList';
import {PaginationBtn,
    StyledUl,
    SliderImg} from './styled';
import login from "../../pages/Login";

const Index = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCount(() => {
                if (count < sliderList.length) {
                    setCount(count + 1);
                } else {
                    setCount(1);
                }
            });

            handleSlider(count);

            return () => clearTimeout(interval);
        }, 6000);
    });

    const handleSlider = count => {
        if (count === 3) {
            sliderRef.current.style.transform = 'translateX(0)';
        } else {
            sliderRef.current.style.transform = `translateX(-${
                window.innerWidth * count
            }px)`;
        }
    };
    useEffect(() => {
        const changeWidth = sliderIndex * 45;
        sliderRef.current.style.transform = `translateX(-${changeWidth}vw)`;
    }, [sliderIndex]);

    // let count = 0;
    // const prevBtn = () => {
    //     count = sliderIndex;
    //     setSliderIndex(count === 0 ? sliderIndex : count -1)
    // }
    return (
        <>
            <StyledUl ref={sliderRef}>
                {sliderList.map(slide => (
                    <li key={slide.id}>
                        <SliderImg src={slide.src} alt={slide.alt}/>
                    </li>
                ))}
            </StyledUl>
            <div className="inner">
                <div className="pagination">
                    {sliderList.map(button => (
                        <PaginationBtn
                            type="button"
                            key={button.id}
                            onClick={() => {
                                handleSlider(button.id);
                            }}
                            className={button.id === count ? 'active' : ''}
                        >
                            {button.text}
                        </PaginationBtn>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;
*/

import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/img/harry.jpg';
import img2 from '../../assets/img/tape.jpg';
import img3 from '../../assets/img/music.jpg';
import img4 from '../../assets/img/ocean.jpg';

import {Container,
    SliderContainer,
    Slide
} from './styled';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = 4;

    // Next 버튼 클릭 시
    const NextSlide = () => {
        if (currentIndex === TOTAL_SLIDES) {
            // 더 이상 넘어갈 슬라이드가 없으면
            setCurrentIndex(2); // 1번째 사진으로 넘어갑니다.
            // return;  // 클릭이 작동하지 않습니다.
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    // Prev 버튼 클릭 시
    const PrevSlide = () => {
        if (currentIndex === 1) {
            setCurrentIndex(TOTAL_SLIDES-2); // 마지막 사진으로 넘어갑니다.
            // return;  // 클릭이 작동하지 않습니다.
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentIndex(() => {
                if (currentIndex < TOTAL_SLIDES) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setCurrentIndex(1);
                }
            });

            handleSlider(currentIndex);

            return () => clearTimeout(interval);
        }, 3000);
    });

    const handleSlider = currentSlide => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';

        if (currentSlide > 3) {
            slideRef.current.style.transform = 'translateX(0)';
        } else {
            slideRef.current.style.transform = `translateX(
            ${-1 * ((100 / TOTAL_SLIDES * 0.5) + (250 / TOTAL_SLIDES * currentIndex))}%)`;
        }
    };
    return (
        <Container>
            <SliderContainer ref={slideRef}>
                <Slide src={img1} alt="첫번째 사진"/>
                <Slide src={img2} alt="두번째 사진"/>
                <Slide src={img3} alt="세번째 사진"/>
                <Slide src={img4} alt="네번째 사진"/>

            </SliderContainer>
        </Container>
    );
}


export default Slider;
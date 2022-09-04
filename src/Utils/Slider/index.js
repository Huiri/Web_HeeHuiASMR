import React, {useState, useRef, useEffect} from 'react';
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
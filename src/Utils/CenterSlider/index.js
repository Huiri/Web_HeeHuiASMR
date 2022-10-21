import {sliderList} from "./sliderlist";
import {ImgContainer, ImgWrapper} from './styled';
import Slick from "react-slick";
import React, { useRef } from "react";

// const CenterSlider = () => {
//     const settings = {
//         centerMode: true,
//         infinite: true,
//         centerPadding: "6rem",
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         arrows: false,
//     };
//     const slideRef = useRef(null);
//
//     const previous = useCallback(() => slideRef.current.slickPrev(), []);
//     const next = useCallback(() => slideRef.current.slickNext(), []);
//
//     return (
//         <div>
//
//             <Slick {...settings} ref={slideRef}>
//
//                 {sliderList.map((image) => (
//                     <ImgWrapper key={image.id}>
//                         <ImgContainer src={image.src} alt={image.alt}/>
//                     </ImgWrapper>
//                 ))}
//
//
//             </Slick>
//             <PagingWrapper>
//                 <PagingArrow onClick={previous}>&lt;</PagingArrow>
//                 <PagingArrow onClick={next}>&gt;</PagingArrow>
//
//
//             </PagingWrapper>
//         </div>
//     );
//
// };
// export default CenterSlider;
const CenterSlider = () => {
    const centerRef = useRef(null);

    const setting = {
        autoplay: true,
        slidesToShow: 3,
        autoplaySpeed: 3000,
        pauseOnHover: true,

    };
    // const previous = useCallback(() => centerRef.current.slickPrev(), []);
    // const next = useCallback(() => centerRef.current.slickNext(), []);
    // const play = useCallback(() => centerRef.current.slickPlay(), []);
    // const pause = useCallback(() => centerRef.current.slickPause(), []);

    return (
        <div>
            <Slick {...setting} ref={centerRef}>
                {sliderList.map((image) => (
                    <ImgWrapper key={image.id}>
                        <ImgContainer src={image.src} alt={image.alt}/>
                    </ImgWrapper>
                ))}
            </Slick>

            {/*<PagingWrapper>*/}
            {/*    <PagingArrow onClick={previous}>&lt;</PagingArrow>*/}
            {/*    <PagingArrow onClick={next}>&gt;</PagingArrow>*/}
            {/*</PagingWrapper>*/}

        </div>
    );
};
export default CenterSlider;
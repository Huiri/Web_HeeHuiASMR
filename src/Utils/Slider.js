import React, {useState, useRef, useEffect} from 'react';
import img1 from "../assets/img/harrypotter.jpg";
import img2 from "../assets/img/music.jpg";
import img3 from "../assets/img/tape.jpg";

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const slideListRef = useRef(null);

    useEffect(() => {
        const changeWidth = sliderIndex * 45;
        slideListRef.current.style.transform = `translateX(-${changeWidth}vw)`;
    }, [sliderIndex]);

    // let count = 0;
    // const prevBtn = () => {
    //     count = sliderIndex;
    //     setSliderIndex(count === 0 ? sliderIndex : count -1)
    // }
    return (
        <div className = "inline_container centerPosition">
            <div className ="slideContainer">
                <div ref={slideListRef} className = "slideList">
                    <div className = "inner"> <img alt = "harrypotter" src={img1}/> </div>
                    <div className = "inner"> <img alt = "music" src={img2}/> </div>
                    <div className = "inner"> <img alt = "tape" src={img3}/> </div>
                </div>

                <div className = "slideButtonList">
                    <button className = {sliderIndex === 0 ? "active" : ""} onClick={() => setSliderIndex(0)}/>
                    <button className = {sliderIndex === 1 ? "active" : ""} onClick={() => setSliderIndex(1)}/>
                    <button className = {sliderIndex === 2 ? "active" : ""} onClick={() => setSliderIndex(2)}/>
                </div>
            </div>
            <InfinitySlider imgs = {[img1,img2,img3]}/>
            <div className='product_list_title'>
                <span>기획전</span>
            </div>
            <ProductList imgs = {[img1,img2,img3]}/>
        </div>
    );
};

export default Slider;
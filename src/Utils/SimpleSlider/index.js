import React, {Component} from "react";
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

export default class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        let isPlay = false;

        const setIsPlay = () => {
            console.log(isPlay);
            isPlay = isPlay === false;
        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // lazyLoad: true,
            arrow : true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
        };
        return (
            <div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
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

                {/*<div style={{ textAlign: "center" }}>*/}
                {/*    <button className="button" onClick={this.play}>*/}
                {/*        Play*/}
                {/*    </button>*/}
                {/*    <button className="button" onClick={this.pause}>*/}
                {/*        Pause*/}
                {/*    </button>*/}
                {/*</div>*/}

                <PagingWrapper>
                    <PagingArrow>&lt;</PagingArrow>
                    <PagingText>1/3</PagingText>
                    <PagingArrow>&gt;</PagingArrow>
                    <PagingPause onClick={setIsPlay}>
                        {isPlay ? <PlayIcon onClick={this.play}/> : <PauseIcon onClick={this.pause}/> }
                    </PagingPause>
                </PagingWrapper>

            </div>
        );
    }
}
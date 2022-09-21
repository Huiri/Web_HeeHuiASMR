import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  margin-left: 19%;
  width: 60%;
  text-align: center;

  .slick-list {
    overflow: hidden;
    height: 15.5vw;
    text-align: center;
  }

  .slick-arrow {
    display: flex;
    z-index: 20;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }
`

export const PagingArrow = styled.h4`
    margin : 0.9rem;
    display : flex;
    cursor : pointer;
    color : #828282;
    :hover, :focus {
        /* font-size : 1.1rem; */
        color : #474747;
        transition : all 0.2s;
    }
`

export const PagingText = styled.p`
    display : inline;
    color : #474747;
    font-weight: 500;
  margin-top : 1rem;
  font-family : ridi,sans-serif;

`

export const PagingPause = styled.div`
    cursor : pointer;
    /* display : inline; */
    margin : 0-4px;
`
export const PagingWrapper = styled.div`
   display : flex;
   justify-content: flex-end;
  margin : 2rem 10rem 0 0;
  z-index: 1;
  @media(max-width: 991px){
    margin-right : 5rem;
  }
  

`
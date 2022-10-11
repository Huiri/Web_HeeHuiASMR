import Slider from "react-slick";
import styled from "styled-components";
import {ReactComponent as PlayIcon} from "../../assets/icons/PlayIcon.svg";

export const PagingArrow = styled.p`
    margin : 0.9rem;
    cursor : pointer;
    color : #828282;
  z-index : 10;
  
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
  font-family : lee,sans-serif;

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
export const ImgContainer = styled.img`
  width : 100vw;
  //height : 80vh;
  overflow: hidden;
  z-index: 1;
`

export const PlayBtn = styled(PlayIcon)`
  margin-top : -14.5rem;
  margin-bottom : -14.5rem;
  width : 1.4rem;
  display: inline-block;
  color : gray;
`
export const ImgWrapper = styled.span``
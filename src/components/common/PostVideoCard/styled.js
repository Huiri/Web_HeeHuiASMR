import styled from "styled-components";
import {Link} from "react-router-dom";

export const PromotionWrapper = styled.div`
    text-align: center;
    cursor : pointer;
    margin: 0.5rem 0.2rem;
    display:inline-block;
    border-radius: 1rem;
  &:hover {
    background : aliceblue;
  }
`

export const VideoThumbnail = styled.img`
    width : 19vw;
    height : 40vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;
`
export const PromotionTitle = styled.div`
  width : 16vw;
  margin-left : 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  white-space: nowrap;
  font-size : 1.1rem;
  color : black;


`

export const VideoWrapper = styled.div`
`
export const PromotionChannel = styled.p`
  color: #5d5d5d;
text-underline: none;


`

export const StyledLink = styled(Link)`
    text-decoration : none;
`

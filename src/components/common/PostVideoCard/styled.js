import styled from "styled-components";
import {Link} from "react-router-dom";

export const PromotionWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  margin: 0.5rem 0.2rem;
  display: inline-block;
  border-radius: 0.3rem;
  border: 2px #cecece solid;


  &:hover {
    box-shadow: 3px 3px 3px #b2b2b2;
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
  margin-top : 1rem;



`

export const VideoWrapper = styled.div`
`
export const PromotionChannel = styled.p`
  color: #5d5d5d;
text-underline: none;
  font-size : 0.9rem;
  margin : 0.7rem 0;


`

export const StyledLink = styled(Link)`
    text-decoration : none;
`

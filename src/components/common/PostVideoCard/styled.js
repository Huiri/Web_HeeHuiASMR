import styled from "styled-components";
import {Link} from "react-router-dom";

export const PromotionWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  margin: 0.5rem 0.2rem;
  display: inline-block;
  border-radius: 0.3rem;
  border: 2px #cecece solid;
  width : 16.2rem;
  height : 20rem;
grid-gap : 10px 10px;
  gap : 10px 10px;

  &:hover {
    box-shadow: 3px 3px 3px #b2b2b2;
  }
  @media(min-width: 1400px) {
    width : 24vw;
    height : 38vh;

  }

`;

export const VideoThumbnail = styled.img`
    width : 19vw;
    height : 40vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;
    border-radius: 5px;
  @media(max-width: 991px) {
    width : 36vw;

  }
  @media(min-width: 1400px) {
    width : 23vw;
    height : 27vh;

  }


`;
export const PromotionTitle = styled.div`
  width : 16vw;
  margin-left : 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  white-space: nowrap;
  font-size : 1.2rem;
  margin-top : 1rem;
  color : ${props => props.color || 'black'};

  @media(max-width: 991px) {
  width : 34vw;

}
  @media(min-width: 1400px) {
    width : 22vw;
    font-size : 1.5rem;                                                   

  }


`;

export const VideoWrapper = styled.div`
`;
export const PromotionChannel = styled.p`
  color: #5d5d5d;
text-underline: none;
  font-size : 1rem;
  margin : 0.7rem auto;
  overflow: hidden;
  white-space: nowrap;
  width : 15rem;
  text-overflow: ellipsis;
  @media(min-width: 1400px) {
    width : 22vw;
    font-size : 1.2rem;

  }


`;

export const StyledLink = styled(Link)`
    text-decoration : none;
  font-family: lee, sans-serif;
`;

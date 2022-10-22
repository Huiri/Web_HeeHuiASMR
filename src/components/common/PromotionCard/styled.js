import styled from "styled-components";

export const PromotionImg = styled.img`
    width : 25.9vw;
    height : 50vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;    
  border-radius: 5px;
  @media(max-width: 991px){
    width : 52vw;

  }

`;

export const PromotionWrapper = styled.div`
    text-align: center;
    cursor : pointer;
    margin: 0.5rem 0.2rem;
    display:inline-block;
  border-radius: 5px;
  border: 2px #cecece solid;
  width : 21.8rem;
  height : 23.6rem;
  &:hover {
    box-shadow: 3px 3px 3px #b2b2b2;
  }
`;

export const VideoThumbnail = styled.div`
    width : 19vw;
    height : 40vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;
`;
export const PromotionText = styled.p`
  width : 24vw;
  margin-left : 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  white-space: nowrap;
  font-size : 1.2rem;
  margin-top : 1rem;
  color : ${props => props.color || 'black'};

  font-family: lee, sans-serif;
  @media(max-width: 991px){
    width : 86%;

  }


`;
export const PromotionSub = styled.p`
    font-size : 1rem;
   margin : 0.7rem 0;
  color: #5d5d5d;

  font-family: lee, sans-serif;
  @media(max-width: 991px){
    width : 100%;

  }


`;
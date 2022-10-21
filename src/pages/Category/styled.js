import styled from "styled-components";
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg';


export const CategoryContainer= styled.div`
  background: aliceblue;
  display: flex;
  flex-direction: column;
  
`;

export const PromotionWrapper= styled.div`
    text-align: center;
    margin-top : 1rem;

`;

export const PromotionImg = styled.div`
    width : 25.9vw;
    height : 50vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;

`;

export const PromotionText = styled.h3`
    
`;

export const PromotionSub = styled.p`
    

`;

export const PromotionSection = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: center;
    
`;

export const PromotionTitle = styled.p`
    display : flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
  margin-top : 5rem;
    font-family: cookieregular, sans-serif;

`;
export const PromotionSubTitle = styled.h3`
    display : flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 400;
    color : #8a8a8a;
    margin : 1rem 0 3rem 0;
  font-family: cookieregular, sans-serif;
`;
export const VideoThumbnail = styled.div`
    width : 19vw;
    height : 40vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;
`;

export const SearchInput = styled.input`
    width : 28vw;
    height : 7vh;
    border-radius: 1rem;
    border-style: none;
    background: #ededed;
    font-size : 1.2rem;
    padding : 0 1rem;
  font-family: lee, sans-serif;
    &:hover, &:focus {
        outline : none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    }

`;

export const SearchDiv = styled.div`
    position : relative;
    display : flex;
    width : 30vw;
    margin : 0 auto;
    margin-bottom : 3rem;

`;

export const SearchBtn = styled(SearchIcon)`
    cursor: pointer;
    position : absolute;
    margin : 0;
    right : 7px;
    top : 9px;

`;

export const ViewMoreBtn = styled.div`
    width : 12vw;
    height : 7vh;
    margin : 2rem auto;
    cursor : pointer;
  font-family: lee, sans-serif;
  font-size: 1.1rem;
  display: flex;
    border-radius: 40px;
    background: #e6e6e6;
    justify-content: center;
    align-items: center;
  &:hover{
    background: lightgrey;
    border : 2px solid grey;
    transition : all ease 0.2s 0s;
  }

`;
export const ViewMoreBtnText = styled.p`
`;

export const CategoryWrapper = styled.div`
    display : flex;
    justify-content : center;
`;
export const CategoryBtn = styled.button`
  width: 5rem;
  cursor: pointer;
  border-radius: 2rem;
  border: solid 3px #e5e5e5;
  color: #131313;
  font-size: 1.1rem;
  font-family: mabinogi, sans-serif;
  padding: 6px;
  margin: 0 1rem 3rem 1rem;
  &:hover {
    background: #e5e5e5;
    transition : all ease 0.2s 0s;

  }
`;

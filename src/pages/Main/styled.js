import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HomeWrapper = styled.div`
    height : 100%;
`
export const ImgContainer = styled.div`
    height : 80vh;
    margin : auto;
    background: #bdcede;
    display : flex;
    justify-content:center;
    align-items:center;
    font-size : 4rem;
`
export const CategoryText = styled.p`
    display : flex;
    margin : 1rem auto;
    font-size : 1.1rem;
    &:hover{
        cursor: pointer;
        color : grey;
        transition: color 0.2s;
    }
`
export const CategoryContainer = styled.div`
    display: flex;
    flex-direction : column;
`
export const SliderTitle=styled.p`
    display: flex;
    color : #131313;
    font-size: 2rem;
    font-weight: 600;
    justify-content:flex-start;
    align-items:center;
    margin : -6.3rem 0 0 6rem;
  z-index: 10;
  @media(max-width: 991px){
    margin : -7rem 0 0 4rem;
    font-size: 1.8rem;
  }

`
export const SliderSubtitle = styled.p`
    color : #131313;
    display: flex;
    font-size: 1rem;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
    margin : 10px 0 0 6rem;
    font-weight: 600;
  @media(max-width: 991px){
    margin : 0.8rem 0 0 4rem;
    font-size: 0.9rem;
  }
`

export const SliderExplain = styled.p`
    margin-left : 6rem;
    cursor: pointer;
    z-index : 5;
    width :15%;
  margin-top : 0.5rem;

  &:focus, &:hover {
        font-weight: 600;
        transition : all ease 0.4s 0s;
    }
  @media(max-width: 991px){
    margin : 0.6rem 0 0 4.1rem;
  }

`

export const SliderWrapper = styled.span`
    display : flex;
    flex-direction : column;
    z-index: 10;
`
export const SliderViewMore = styled.div`
  margin-top : 0.8rem;
  margin-left : 6rem;
  color: #4d4d4d;
  font-size : 0.9rem;

  @media(max-width: 991px){
    margin : 10px 0 0 4.1rem;
  }

`
export const CategoryList = styled.div`
    display : flex;
    flex-direction : row;
    background: #f2f2f2;
  margin-top : 1.5rem;
`
export const CategoryTitle = styled.p`
    display : flex;
    justify-content:center;
  margin-top : 5rem;
    align-items:center;
    font-size : 1.8rem;
`

export const BannerWrapper = styled.div`
    background: #c9c9c9;
    justify-content: center;
    display : flex;
    width : 80vw;
    height : 30vh;
    margin : 6rem auto;
`
export const PromotionContainer = styled.div`
`
export const PromotionSub = styled.p`
    
`

export const PromotionSection = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: center;
  margin : 0 5rem;
    
`

export const PromotionTitle = styled.p`
    display : flex;
  font-size: 1.8rem;
    justify-content: center;
    align-items: center;
    margin : 7rem 0 2rem 0;
    background : ${props => props.color || 'white'};
`
export const VideoWrapper = styled.div`
`

export const VideoTitle = styled.h1`
`

export const VideoContainer = styled.div`
`

export const VideoCreator = styled.h3`
`

export const VideoCategory = styled.h4`
`
export const VideoText = styled.p`
`

export const ViewMoreBtn = styled(Link)`
    width : 12vw;
    height : 7vh;
    margin : 4rem auto;
    cursor : pointer;
    display: flex;
    border-radius: 40px;
    background: #e6e6e6;
    justify-content: center;
    align-items: center;
  text-decoration : none;

`
export const ViewMoreBtnText = styled.p`
  color : black;

`

export const MakerSection = styled.div`
    background : #757575;
    padding : 0.1rem;
`

export const MakerImg = styled.div`
    background: #dbdbdb;
    width : 30vw;
    height : 80vh;
    margin : 3rem 12rem;
    
`

export const MakerSubImg = styled.div`
    background: ${props => props.color || '#dbdbdb'};
    width : 15vw;
    height : 50vh;
    margin : 5rem 0.3rem;
`

export const MakerImgContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`


export const CategoryBtnContainer = styled.div`
    display : flex;
    justify-content : center;
  margin-top : 3rem;
`
export const CategoryBtn = styled.button`
    width : 5rem;
    cursor : pointer;
    border-radius : 2rem;
    border : solid 3px #b9babd;
    color : #131313;
    font-size : 1rem;
    padding : 6px;
    margin : 0 1rem 2rem 1rem;
  &:hover {
    background: #b9babd;
    transition: all 0.2s ease-in-out;

  }
`


export const CollectionSection = styled.div`
    display : flex;
    justify-content : center;
  margin-top : 2rem;
`

export const CollectionImg = styled.div`
    width : 35vw;
    height : 65vh;
    margin : 1rem 0 10rem 0;
    background : ${props => props.color || "#b9babd"};
`
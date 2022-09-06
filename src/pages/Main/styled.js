import styled from 'styled-components';

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
    margin : 0.8rem auto;
    font-weight : 600;
    font-size : 1.2rem;

    &:hover{
        cursor: pointer;
        color : grey;
        transition: color 0.3s;
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
    margin : -30px 0 0 10rem;

`
export const SliderSubtitle = styled.p`
    color : #131313;
    display: flex;
    font-size: 1rem;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
    margin : 10px 0 0 10rem;
    font-weight: 600;
`

export const SliderExplain = styled.p`
    margin : 10px 0 0 10rem;
    cursor: pointer;
    :focus, :hover {
        font-weight: 600;
        transition : all ease 0.4s 0s;
    }

`

export const SliderWrapper = styled.div`
    display : flex;
    flex-direction : column;
`

export const CategoryList = styled.div`
    display : flex;
    flex-direction : row;
    background: #f2f2f2;
`
export const CategoryTitle = styled.p`
    display : flex;
    justify-content:center;
    align-items:center;
    font-size : 1.8rem;
`
export const PagingWrapper = styled.div`
   display : flex;
   justify-content: flex-end;
  margin : -30px 10rem 0 0;
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
`

export const PagingPause = styled.div`
    cursor : pointer;
    /* display : inline; */
    margin : 3px -4px;
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
export const PromotionWrapper = styled.div`
    text-align: center;
    cursor : pointer;
    margin: 0.5rem 0.5rem;
    display:inline-block;

`

export const PromotionImg = styled.div`
    width : 25.9vw;
    height : 50vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;

`

export const PromotionText = styled.h3`
    
`

export const PromotionSub = styled.p`
    

`

export const PromotionSection = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: center;
  margin : 0 5rem;
    
`

export const PromotionTitle = styled.h1`
    display : flex;
    justify-content: center;
    align-items: center;
    margin : 7rem 0 3rem 0;
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
export const VideoThumbnail = styled.div`
    width : 19vw;
    height : 40vh;
    display : flex;
    margin : 0.6em 0.5rem;
    background: #dbdbdb;
`
export const VideoText = styled.p`
`

export const ViewMoreBtn = styled.div`
    width : 12vw;
    height : 7vh;
    margin : 4rem auto;
    cursor : pointer;
    display: flex;
    border-radius: 40px;
    background: #e6e6e6;
    justify-content: center;
    align-items: center;

`
export const ViewMoreBtnText = styled.p`
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
`
export const CategoryBtn = styled.button`
    width : 5rem;
    cursor : pointer;
    border-radius : 2rem;
    border : solid 3px #b9babd;
    color : #131313;
    font-weight : 600;
    font-size : 1.1rem;
    padding : 6px;
    margin : 0 1rem 2rem 1rem;
`


export const CollectionSection = styled.div`
    display : flex;
    justify-content : center;
`

export const CollectionImg = styled.div`
    width : 35vw;
    height : 65vh;
    margin : 1rem 0 10rem 0;
    background : ${props => props.color || "#b9babd"};

`
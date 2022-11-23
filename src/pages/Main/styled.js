import styled from 'styled-components';

export const HomeWrapper = styled.div`
    height : 100%;
`;
export const ImgContainer = styled.div`
    height : 80vh;
    margin : auto;
    background: #bdcede;
    display : flex;
    justify-content:center;
    align-items:center;
    font-size : 4rem;
`;
export const CategoryText = styled.p`
    display : flex;
    margin : 1rem auto;
  font-family: mabinogi, sans-serif;
    font-size : 1.2rem;
    &:hover{
        cursor: pointer;
        color : grey;
        transition: color 0.2s;
    }
`;
export const CategoryContainer = styled.div`
    display: flex;
    flex-direction : column;
`;
export const SliderTitle=styled.p`
    display: flex;
    color : #131313;
    font-size: 2.2rem;
    font-weight: 500;
    justify-content:flex-start;
    align-items:center;
    margin : -6rem 0 0 6rem;
  z-index: 10;
  font-family: tway, sans-serif;
  @media(max-width: 991px){
    margin : -6rem 0 0 4rem;
    font-size: 1.8rem;
  }

`;
export const SliderSubtitle = styled.p`
    color : #131313;
    display: flex;
    font-size: 1rem;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
    margin : 10px 0 0 6rem;
  font-family: gangwonbold, sans-serif;

  font-weight: 600;
  @media(max-width: 991px){
    margin : 0.8rem 0 0 4rem;
    font-size: 0.9rem;
  }
`;

export const SliderExplain = styled.p`
  margin-left: 6.1rem;
  cursor: pointer;
  z-index: 5;
  width: 15%;
  margin-top: 0.7rem;
  font-family: ridi, sans-serif;
  color: #595959;

  &:focus, &:hover {
    transition: all ease 0.4s 0s;
    color : black;
  }

  @media (max-width: 991px) {
    margin: 0.6rem 0 0 4.1rem;
  }

`;

export const SliderWrapper = styled.span`
    display : flex;
    flex-direction : column;
    z-index: 10;
`;
export const SliderViewMore = styled.div`
  margin-top : 0.8rem;
  margin-left : 6.1rem;
  color: #4d4d4d;
  font-size : 0.97rem;
  font-family: geonggilight, sans-serif;

  @media(max-width: 991px){
    margin : 10px 0 0 4.1rem;
  }

`;
export const CategoryList = styled.div`
    display : flex;
    flex-direction : row;
    background: #f2f2f2;
  margin-top : 1.5rem;
`;
export const CategoryTitle = styled.p`
    display : flex;
    justify-content:center;
  margin-top : 5rem;
    align-items:center;
    font-size : 1.8rem;
  font-family: geonggimedium, sans-serif;
`;

export const BannerImg = styled.img`
    background: #c9c9c9;
    justify-content: center;
    display : flex;
    width : 80vw;
    height : 30vh;
    margin : 6rem auto;
  object-fit: cover;
`;
export const BannerTitle = styled.p`
    color : black;
  font-size : 1.7rem;
  font-family: geonggimedium,sans-serif;
`;
export const TextWrapper= styled.div`
  margin : -10.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width : 87vw;

`;
export const BannerText = styled.p`
  color : black;
  display: flex;
  font-size : 1.3rem;
  margin-top : 0.3rem;
  font-family: geonggimedium,sans-serif;

`;
export const BannerWrapper = styled.span`

`;
export const PromotionContainer = styled.div`
`;
export const PromotionSub = styled.p`
    
`;

export const PromotionSection = styled.div`
    display : grid;
  //grid-template-columns: repeat(auto-fill, minmax(21.4%, auto));
  grid-template-columns: repeat(auto-fill, minmax(21.4%, auto));

  justify-content: center;
  @media(max-width: 991px){
    grid-template-columns: repeat(auto-fill, minmax(43%, auto));

  }

`;


export const HotSection = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fill, minmax(28.6%, auto));
  justify-content: center;
  gap : 10px 0;
  grid-gap : 10px 0;
  @media(max-width: 991px){
    grid-template-columns: repeat(auto-fill, minmax(55%, auto));

  }


`;
export const PromotionTitle = styled.p`
    display : flex;
  font-size: 2rem;
    justify-content: center;
    align-items: center;
    margin : 7rem 0 3rem 0;
  font-family: geonggimedium, sans-serif;

  background : ${props => props.color || 'white'};
`;
export const VideoWrapper = styled.div`
`;

export const VideoTitle = styled.h1`
`;

export const VideoContainer = styled.div`
`;

export const VideoCreator = styled.h3`
`;

export const VideoCategory = styled.h4`
`;
export const VideoText = styled.p`
`;

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
    text-decoration : none;
  &:hover{
    background : #737373;
    transition: all 0.2s ease-in-out;

  }

`;
export const ViewMoreBtnText = styled.p`
  color : black;
  font-family: lee, sans-serif;
  font-size: 1.1rem;
  &:hover {
    color: white;
    transition: all 0.2s ease-in-out;
  }

`;

export const MakerSection = styled.div`
    background : #757575;
    padding : 0.1rem;
`;

export const MakerImg = styled.img`
    width : 35vw;
    height : 80vh;
    margin : 0 11rem 4rem 11rem;
  object-fit: cover;

`;

export const MakerSubImg = styled.img`
    width : 15vw;
    height : 50vh;
    margin : 5rem 0.3rem;
  object-fit: cover;

`;

export const MakerImgContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`;


export const CategoryBtnContainer = styled.div`
    display : flex;
    justify-content : center;
  margin-top : 3rem;
`;
export const CategoryBtn = styled.button`
    width : 5rem;
    cursor : pointer;
    border-radius : 2rem;
    border : solid 3px #b9babd;
    color : #131313;
    font-size : 1rem;
    padding : 6px;
    margin : 0 1rem 2rem 1rem;
  font-family: mabinogi,sans-serif;
  &:hover {
    background: #b9babd;
    transition: all 0.2s ease-in-out;

  }
`;


export const CollectionSection = styled.div`
    display : flex;
    justify-content : center;
  margin-top : 2rem;
`;

export const CollectionImg = styled.img`
  width: 35vw;
  height: 65vh;
  margin: 1rem 0 10rem 0;
  object-fit: cover;
  
  background: #babed0;
  @media(max-width: 991px){
    width: 45vw;
  }

`;

export const CollectionTextWrapper = styled.div`
  width: 35vw;
  height: 65vh;
  margin: 1rem 0 10rem 0;
  background: #babed0;
  position: relative;
  @media(max-width: 991px){
    width: 45vw;
  }

`;
export const CollectionTitle = styled.p`
  font-size : 1.6rem;
  font-family: geonggimedium, sans-serif;
  margin-top : 2rem;
  margin-left : 1rem;
  @media(max-width: 991px){
    font-size: 1.4rem;
  }

`;

export const CollectionText = styled.p`
  font-size : 1.3rem;
  font-family: geonggilight, sans-serif;
  margin-top : 0.5rem;
  margin-left : 1.3rem;
  @media(max-width: 991px){
    font-size: 1rem;
  }


`;
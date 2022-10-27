import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterWrapper = styled.div`
    background : lightblue;
    height: 40vh;
    width : 100vw;
    padding : 0;
`;

export const FooterStyle = styled.div`
    display : flex;
    justify-content: flex-start;
    width : 40vw;
  margin-left : 3rem;



`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  display: inline-block;
  height: 1.6rem;
  text-align: center;
  margin : 1rem 2rem 0 0;
  font-family: lee,sans-serif;
  &:hover {
    color: #5b5b5b;
    transition : all 0.2s ease-in-out;
  }
  @media(max-width: 991px){
    margin-left : -2rem;

  }
`;

export const FooterContainer = styled.div`
`;

export const FooterTitle = styled.p`
    font-size : 1.4rem;
    font-weight : 600;
    margin : 2rem 0 1rem 3rem;
  font-family: cookieregular, sans-serif;
`;

export const FooterSub = styled.p`
    font-size : 1.1rem;
    margin-left : 3rem;
    font-weight : 500;
  margin-bottom : 0.6rem;
  font-family: lee, sans-serif;
`;

export const FooterExplain = styled.p`
    font-size : 1.4rem;
    font-weight : 600;
    margin : 3rem 6rem 1rem 1.3rem;
  font-family: cookieregular,sans-serif;
`;
export const FooterExplainSub = styled.p`
    font-size : 1.2rem;
    font-weight : 500;
  
  font-family: lee, sans-serif;
`;

export const ServiceContainer = styled.div`
    display : inline;
    float : right;
    margin-top : -3rem;
`;

export const ExplainContainer = styled.div`

`;
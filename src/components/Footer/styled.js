import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterWrapper = styled.div`
    background : lightblue;
    height: 38vh;
    width : 100vw;
    margin-top : auto;
    padding : 1rem 0;
`

export const FooterStyle = styled.div`
    display : flex;
    justify-content: flex-start;
    width : 40vw;
  margin-left : 3rem;



`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2rem;

  &:hover {
    color: #5b5b5b;
    transition : all 0.2s ease-in-out;
  }
`

export const FooterContainer = styled.div`
`

export const FooterTitle = styled.p`
    font-size : 1.4rem;
    font-weight : 600;
    margin : 2rem 0 1rem 3rem;
`

export const FooterSub = styled.p`
    font-size : 1rem;
    margin-left : 3rem;
    font-weight : 500;
    margin-bottom : -0.7rem;
`

export const FooterExplain = styled.p`
    font-size : 1.4rem;
    font-weight : 600;
    margin : 3rem 8rem 1rem 0;
`
export const FooterExplainSub = styled.p`
    font-size : 1rem;
    font-weight : 500;
`

export const ServiceContainer = styled.div`
    display : inline;
    float : right;
    margin-top : -3rem;
`

export const ExplainContainer = styled.div`

`
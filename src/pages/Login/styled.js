import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Button = styled.button`
    color : ${props => props.color || "white"};
    background : ${props => props.background || "#5d7c9c"} ;
    display : flex;
    font-size: 1rem;
    margin :1.5rem 0 1rem 0;
    width :100%;
    height :5.5vh;
    border-radius: 5px;
    outline : 0;
    border : 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    &:hover{
        background: skyblue;
        cursor: pointer;
    }

`

export const LoginDiv = styled.div`
    background: #e3e3e3;
    justify-content: center;
    align-items: center;
    display : flex;
    height: 95vh;

`
export const LoginContainer = styled.div`
    background : #f0f0f0;
    padding : 0;
    flex-direction: column;
    width : 25vw;
    height : 60vh;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const LoginTitle = styled.h1`
    color : #00415d;
    text-align : center;
    display : flex;
    justify-content: center;
    margin-top : -2rem;
`
export const LoginInput = styled.input`
    width : 18vw;
    font-size : 1rem;
    margin-top : 2rem;
    display :flex;
    justify-content: center;
    align-items: center;
    border : none;
    border-bottom : 3px solid #575757;
    background : #f0f0f0;
    ::placeholder,
     ::-webkit-input-placeholder {
    color: #8f8f8f;
    }
    :-ms-input-placeholder {
         color: #8f8f8f;
    }
    :focus{
        outline : none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

`

export const LoginForm = styled.form`
`

export const StyledLink = styled(Link)`
    text-decoration : none;
`

export const LoginWrapper = styled.div`

`
export const ImgBtnContainer = styled.div`
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    margin : 1rem 0;
`

export const ImgBtn = styled.button`
    border : none;
    border-radius : 5px;
    width : 2.5rem;
    height : 2.5rem;
    cursor : pointer;
    background : ${props => props.color || 'none'};
  &:active {
    border : none;
  }
`
export const LoginCheckTitle = styled.div`
    display : inline;
    color : #454545;
    font-size : 0.9rem;
    margin : 1rem 0 0 0.3rem;
`

export const LoginCheck = styled.input`
    margin : 1rem 0 0 0;
    cursor : pointer;

`

export const LoginSocial = styled.p`
    color : #454545;
    text-align: center;
    margin : 2rem 0 0 0;
    font-weight : 500;
`

export const InfoFindLink = styled(Link)`
    display : flex;
    font-size : 0.9rem;
    cursor : pointer;
    justify-content: flex-end;
    margin-top : -1.2rem;
    text-decoration: none;
    color : #454545;
    :hover{
        color : #616161;
        font-weight : 600;
    }
`

export const LoginWarnSpan = styled.span`
    color : red;
    font-size : 0.8rem;
    display : ${props => props.visiblity ? "#000000":"none"};
`
import styled from 'styled-components';

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
  font-family: geonggimedium, sans-serif;

  &:hover{
        background: skyblue;
        cursor: pointer;
    transition : all ease 0.2s 0s;

  }

`;

export const RegisterDiv = styled.div`
    background: #e3e3e3;
    justify-content: center;
    align-items: center;
    display : flex;
    height: 75vh;

`;
export const RegisterContainer = styled.div`
    background : #f0f0f0;
    padding : 0;
    flex-direction: column;
    width : 22rem;
    height : 50vh;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;

`;
export const RegisterTitle = styled.p`
 color : #00415d;
    text-align : center;
    display : flex;
    justify-content: center;
    margin : -2rem 0 1rem 0;
  font-family: cookieregular, sans-serif;
  font-size : 2rem;

`;

export const RegisterInput = styled.input`
    width : 15rem;
    font-size : 1.1rem;
    margin : 1.5rem 0 1rem 0;
    display :flex;
    justify-content: center;
    align-items: center;
    border : none;
    border-bottom : 3px solid #575757;
    background : #f0f0f0;
  font-family : lee, sans-serif;

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
`;

export const RegisterForm = styled.form`
`;

export const RegisterWrapper = styled.div`
`;
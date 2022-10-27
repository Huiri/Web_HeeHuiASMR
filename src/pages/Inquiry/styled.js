import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg';

export const LayoutContainer = styled.div`
  background: aliceblue;
  height: 100%;
  width : 100vw;
  display: flex;
  flex-direction: column;
`;
export const InquiryInput = styled.textarea`
  min-height: 10rem;
  height: auto;
  width: 22.4rem;
  background: #eeeeee;
  display: flex;
  border-radius: 0.5rem;
  border: 2px solid grey;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  padding: 1rem 0.5rem;
  font-family: geonggilight, sans-serif;

  &:focus {
    outline: none;
    border: 2px solid #3f3f3f;

  }

`;

export const SubmitBtn = styled.input`
  display: flex;
  justify-content: center;
  font-family: geonggilight, sans-serif;
  font-size: 1.1rem;
  border-radius: 0.6rem;
  border: none;
  background: grey;
  height: 2rem;
  cursor: pointer;
  align-items: center;

  &:hover {
    background: #badcfa;
    transition: all 0.2s ease-in-out;
    color: #313131;
  }
`;

export const Input = styled.input`
  border: 2px solid grey;
  border-radius: 0.5rem;
  background: #eeeeee;
  padding : 0 0.5rem;
  width: 22.4rem;
  height: 1.5rem;
  font-size : 1.1rem;
  font-family: geonggilight, sans-serif;

  &:focus {
    outline: none;
    border: 2px solid #3f3f3f;
  }

`;
export const Label = styled.label`
  font-size: 1.3rem;
  margin-right : 0.5rem;
  display: flex;
  font-family: mabinogi, sans-serif;
  margin-top : 0.2rem;
  margin-bottom : 0.5rem;
  align-items: center;
`;
export const InquiryForm = styled.form`
  display: flex;
  flex-direction: column;


`;
export const InputWrapper = styled.div`
  margin : 0.5rem auto;
`;
export const InquiryWrapper = styled.div`
  background: lightgrey;
  display: flex;
  height : 100%;
  position: relative;
  flex-direction: column;
  width : 35rem;
  margin : 3rem auto;
  border-radius: 1rem;
  &:focus {
    outline : solid 2px grey;
  }

`;
export const InquiryText = styled.p`
  font-family: cookieregular, sans-serif;
  color: #4d4d4d;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  margin-bottom : 3rem;
`;
export const InquiryTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color : #8a8a8a;
  margin-top : 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: cookieregular, sans-serif;

`;
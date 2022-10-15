import styled from 'styled-components';
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg';

export const LayoutContainer = styled.div`
  background: aliceblue;
  height: 100%;
  width : 100vw;
  display: flex;
  flex-direction: column;
`;
export const InquiryInput = styled.input`
  min-height : 3rem;
  height : auto;
  width : 20.7rem;
  background: lightgrey;
  display: flex;
  border : none;
  border-radius: 1rem;

  font-size : 1.2rem;
  padding : 0 0.8rem;
  font-family: geonggilight, sans-serif;
  &:focus {
    outline : none;
  }

`;

export const InputIcon = styled(SearchIcon)`
  position : absolute;
  left : 22rem;
  top : 0.7rem;
  cursor : pointer;
`;

export const InquiryForm = styled.form`


`;

export const InquiryWrapper = styled.div`
  background: lightgrey;
  display: flex;
  height : 3rem;
  position: relative;
  width : 24rem;
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
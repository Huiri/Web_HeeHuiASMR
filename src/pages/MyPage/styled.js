import styled from "styled-components";
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

export const LayoutContainer = styled.div`
  background: aliceblue;
  width : 100vw;
  min-height : 100vh;
  height : 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 6fr;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "sidebar main main"
    "sidebar main main"
    "sidebar main main"
    "sidebar main main"
    "sidebar main main";
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 991px) {

    grid-template-columns: 2fr 5fr;
      grid-template-areas:
      'sidebar main'
      'sidebar main'
      'sidebar main'
      'sidebar main'

      'sidebar main';
  }
`;
export const UserImg = styled(UserIcon)`
  width: 14vw;
  height: 14vw;
  fill: #676d82;
`;
export const PrivateImg = styled.img`
  width : 11rem;
  height : 11rem;
  margin-top : 1rem;
  margin-left : 1rem;
  margin-right : 1rem;
  background: lightblue;
  border-radius: 50%;
  fill: #676d82;

`;
export const PrivateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top : 1rem;
  margin-left : 3rem;

`;
export const ItemWrapper= styled.div`
  margin: auto 0;
`;
export const PrivacyWrapper = styled.div`
  margin : 2rem 0 0 1rem;
`;

export const PrivacyTitle = styled.p`
    font-size : 1.5rem;
  margin-left : 2rem;
  margin-bottom : 1rem;
  font-family: cookieregular, sans-serif;
`;

export const PrivactSub = styled.p`
    font-size: 1.4rem;
  font-weight : 600;
  margin-top : 2rem;
  margin-left : 3rem;

  font-family: lee, sans-serif;

`;

export const PassWordChangeEmail = styled.p`
  cursor: pointer;
  margin:1rem;
  display: inline-block;
  font-family: diary, sans-serif;
  margin-left : 3rem;


  &:hover {
    color: #7c7c7c;
    transition: all ease 0.3s 0s;
  }

`;

export const PrivacyDelete = styled.p`
  cursor: pointer;
  font-weight: 600;
  display : inline-block;
  margin-top : 2.5rem;
  font-size : 1.4rem;
  font-family: lee, sans-serif;
  margin-left : 3rem;

  &:hover {
    color: #d54444;
    transition: all ease 0.3s 0s;

  }
`;

export const PrivacyItem = styled.p`
  margin:1rem;
  font-weight: bold;
  font-size : 1.1rem;
  font-family: diary, sans-serif;


`;

export const PrivacyPhoto = styled.p``;

export const LoginTitle = styled.h1`
  text-align : center;
  
`;


export const LoginSub = styled.h1`
  text-align : center;

`;

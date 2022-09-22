import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: aliceblue;
  width : 100vw;
  height : 100vh;
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

`

export const PrivacyWrapper = styled.div`
  margin : 1rem 0 0 1rem;
`

export const PrivacyTitle = styled.p`
    font-size : 1.5rem;
  font-family: cookieregular, sans-serif;
`

export const PrivactSub = styled.p`
    font-size: 1.4rem;
  font-weight : 600;
  margin-top : 2rem;
  font-family: lee, sans-serif;

`

export const PassWordChangeEmail = styled.p`
  cursor: pointer;
  margin:1rem;
  display: inline-block;
  font-family: diary, sans-serif;

  &:hover {
    color: #7c7c7c;
    transition: all ease 0.3s 0s;
  }

`
export const PrivacyName = styled.p``
export const PrivacyDelete = styled.p`
  cursor: pointer;
  font-weight: 600;
  width : 11%;
  margin-top : 5rem;
  font-size : 1.4rem;
  font-family: lee, sans-serif;

  &:hover {
    color: #d54444;
    transition: all ease 0.3s 0s;

  }
`

export const PrivacyItem = styled.p`
  margin:1rem;
  font-weight: bold;
  font-family: diary, sans-serif;


`

export const PrivacyPhoto = styled.p``

export const LoginTitle = styled.h1`
  text-align : center;
  
`


export const LoginSub = styled.h1`
  text-align : center;

`

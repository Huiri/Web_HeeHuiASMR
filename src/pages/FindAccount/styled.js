import styled from 'styled-components';

export const LayoutContainer = styled.div`
  justify-content: center;
  display : flex;
  height: 80vh;  
  background: aliceblue;
`

export const FindTitle = styled.span`
  font-family: cookieregular, sans-serif;
  font-size : 1.7rem;
  display : flex;
  justify-content: center;
  margin : 4rem 0 2rem 0;


`

export const FindSubTitle = styled.p`
  font-family: geonggimedium, sans-serif;
  font-size : 1.4rem;
  display: flex;
  justify-content: center;
`
export const FindWrapper = styled.div`
  
`

export const StyledLink = styled.div`
  color: gray;
  text-decoration: none;
  cursor : pointer;
  &:hover {
    color: #444444;
    transition: all ease 0.4s 0s;
  }


`
export const FindContainer = styled.div`
  background : #f0f0f0;
    padding : 0;
    flex-direction: column;
    width : 22rem;
    height : 60%;
  margin-bottom : 3rem;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
  //@media (max-width: 991px) {
  //  height :rem;
  //}
`

export const FindPwContainer = styled.div`
  background : #f0f0f0;
  padding : 0;
  flex-direction: column;
  width : 22rem;
  height : 20rem;
  margin-bottom : 3rem;
  margin-top : 2rem;
  border: none;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
`
export const FindSthContainer = styled.div`
`
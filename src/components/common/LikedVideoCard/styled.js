import styled from 'styled-components';

export const LikedVideoCardContainer = styled.div`
  background: #a0b6c9;
  width: 63rem;
  height: 9rem;
  border-radius: 1rem;
  margin: 0.4rem auto;
  cursor: pointer;
  position : relative;
  border: 2px solid grey;
  &:hover {
    background: lightgrey;
  }
`;
export const LikedVideoImg = styled.p`
  display: inline-block;
  width : 14rem;
  height : 8rem;
  background: antiquewhite;
  margin : 0.5rem 0 0.5rem 0.7rem;
  border-radius: 1rem;
`;

export const LikedVideoTitle = styled.p`
    display: inline-block;
  color : black;
  font-size : 1.6rem;
  position : absolute;
  top : 1rem;
  margin-left : 1rem;
  font-family: cookieregular, sans-serif;

`;

export const LikedVideoChannel = styled.p`
  display: inline-block;
  color : black;
  font-size : 1.3rem;
  position : absolute;
  top : 2.8rem;
  margin-left : 1.2rem;
  font-family: lee, sans-serif;


`;
export const LikedVideoDescription = styled.p`
  display: inline-block;
  color : black;
  font-size : 1rem;
  position : absolute;
  top : 4.7rem;
  margin-left : 1.2rem;
  font-family: lee, sans-serif;


`;
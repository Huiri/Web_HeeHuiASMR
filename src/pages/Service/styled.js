import styled from 'styled-components';

export const LayoutContainer = styled.div`
   background: aliceblue;
  width : 100vw;
  min-height : 100vh;
  height : 100%;
  display: flex;
  flex-direction: column;
`;

export const ServiceTitle = styled.p`
  font-size: 2rem;
  font-family: cookieregular, sans-serif;
  margin : 3rem auto;
  margin-bottom : 2rem;
`;

export const ServiceSubTitle = styled.p`
    font-size : 1.4rem;
  font-family: geonggimedium, sans-serif;
  margin : 1.3rem 0 0 2rem;

`;
export const IconWrapper = styled.div`
`;
export const IconContainer = styled.div`
  margin : 1rem 0 0 5rem;

`;
export const TextContainer = styled.div`
  margin : 0.5rem 0 0 2.5rem;

`;
export const ServiceExplain = styled.p`
    font-size: 1.2rem;
  font-family: lee, sans-serif;
`;
export const Section = styled.div`
  display: flex;
`;

export const IntroWrapper = styled.div`
  background: #c5dcbf;
  border-radius: 1rem;
  margin: 0.7rem auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  min-height: 9rem;

  &:hover {
    border: 2px solid #a8a8a8;
  }
`;
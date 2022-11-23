import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background: aliceblue;
  min-height: 135vh;
  height : 100%;
  width : 100vw;
  display: flex;
  flex-direction: column;

`;
export const ExplainSection = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffd7cc;
  width: 70vw;
  height: 50vh;
  margin: 1rem auto;
  border-radius: 1rem;
  border: 2px solid grey;

  &:hover {
    border: 2px solid #414141;

  }
`;
export const ExplainSection2 = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffd7cc;
  width: 70vw;
  border: 2px solid grey;
  height: 50vh;
  margin: 1rem auto;
  border-radius: 1rem;
  justify-content: flex-end;

  &:hover {
    border: 2px solid #414141;

  }

`;

export const StudentExplain = styled.p`
  font-size: 1.2rem;
  font-family: lee, sans-serif;
  text-align: center;
  margin-left : 0.5rem;
`;
export const StudentTitle = styled.p`
  font-size : 1.4rem;
  font-family: geonggimedium, sans-serif;
  text-align: center;
  margin-top : 0.9rem;
  margin-bottom : 0.4rem;

`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const TextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  background: #e8e8e8;
  width: 15rem;
  height: 15rem;
  margin : auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgWrapper2 = styled.div`
  border-radius: 50%;
  background: #e8e8e8;
  width: 15rem;
  height: 15rem;
  margin : auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const Img = styled.img`
    width : 10rem;
  height : 10rem;
  margin : 1rem auto;
`;
export const ExplainWrapper = styled.div`
    display : flex;
  justify-content: center;
  flex-direction: column;

`;
export const PageTitle = styled.p`
  font-size: 2rem;
  font-family: cookieregular, sans-serif;
  margin : 3rem 0 1rem 0;
  justify-content: center;
  display: flex;
`;

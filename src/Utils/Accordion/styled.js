import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80vw;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  margin: 0.4rem auto;
  background: #a8b9e5;
  border: 1px solid silver;
`;

export const Header = styled.div`
  display : flex;
  align-items: center;
  height : 3rem;
  margin: 0 2rem 0 0.7rem;
`;

export const Button = styled.div`
  top : 1rem;
  right : 8px;
  font-size : 1rem;
  position : absolute;
  cursor : pointer;
  font-family: geonggilight, sans-serif;
  &:hover {
    color : grey;
    transition: all 0.2s ease-in-out;
  }
`;
export const ContentsWrapper = styled.div`
  width : 100%;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;

`;
export const Contents = styled.div`
  position: relative;
  padding : 1rem 2rem 1.5rem 0.6rem;
  border: 0 solid rgba(225,228,230,.5);
  border-top-width: 1px;
  font-family: geonggilight, sans-serif;
`;

export const EventTitle = styled.p`
  font-size : 1.4rem;
  font-family: geonggimedium, sans-serif;
`;
export const ContentText = styled.p`
  font-family: geonggilight, sans-serif;
  margin-top : 0.3rem;

`;
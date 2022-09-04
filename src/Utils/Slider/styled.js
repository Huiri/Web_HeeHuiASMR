import styled from 'styled-components';

export const PaginationBtn = styled.button`
  font-size : 1rem;
  border : none;
  background: antiquewhite;
  cursor : pointer;
  margin-right : 1rem;
  border-radius : 1rem;
  margin-bottom: 30rem;
`

export const StyledUl = styled.ul`

  list-style:none;
`

export const SliderImg = styled.img`
  width : 1500px;
  height : 800px;
  overflow : hidden;
  
`

//현재 사용하는 스타일
export const Container = styled.div`
  margin: auto;
  width : 100%;
  height : 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`

export const Slide = styled.img`
  width : 100vw;
  height : 100vh;
  object-fit: cover;

`
export const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  width : 90vw;
  height : 80vh;
  display: flex; // 이미지들을 가로로 나열합니다.
`;

import styled from 'styled-components';

export const ImgContainer = styled.img`
  width : 22rem;
  height : 30rem;
  margin : 0 11rem 4rem 11rem;
  object-fit: cover;

`;
export const PagingArrow = styled.p`
  margin: 0.9rem;
  display: flex;
  cursor: pointer;
  color: #1c1c1c;
  font-size : 5rem;
  :hover, :focus {
    /* font-size : 1.1rem; */
    color: #000000;
    transition: all 0.2s;
  }
`;

export const ImgWrapper = styled.span`
  margin : 2rem 0;
`;
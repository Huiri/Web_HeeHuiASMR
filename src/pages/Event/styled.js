import styled from 'styled-components';

export const LayoutContainer = styled.div`
    background: aliceblue;
    min-height: 100vh;
    width : 100vw;
    display: flex;
    flex-direction: column;
`;
export const EventItemWrapper = styled.div`
    background: #cecece;
    height: 9rem;
    width: 80vw;
    display: flex;
    cursor: pointer;
    border-radius: 9px;
    align-items: center;
    margin : 0.5rem auto;
    &:hover {
      border: solid 2px #888888;
    }

`;
export const EventTitle = styled.p`
    color : black;
    font-weight: 600;
    font-size : 1.4rem;
    margin-left: 1rem;  
    margin-top : -3rem;
    font-family: geonggimedium, sans-serif;

`;

export const EventText = styled.p`
    color: #484848;
    font-size: 1rem;
    text-overflow: ellipsis;
    margin-left: 1rem;
    margin-top : 0.8rem;
    font-family: geonggilight, sans-serif;

`;
export const EventImg = styled.img`
    width : 10rem;
    height : 8rem;
    border-radius: 5px;
    margin-left : 1rem;
    display: flex;
`;
export const LayoutTitle = styled.p`
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    margin : 3rem auto;
    margin-bottom : 2rem;
    font-family: cookieregular, sans-serif;

`;
export const TitleWrapper = styled.span`
    display : flex;
    flex-direction: column;
  
`;
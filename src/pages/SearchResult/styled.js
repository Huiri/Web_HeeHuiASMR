import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  height: 150vh;
  width : 100vw;
  grid-template-rows: 1fr 1fr 1fr 6fr;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "space space space"
    "sidebar result result"
    "sidebar nav nav"
    "sidebar main main"
    "sidebar content content"
    "sidebar content content";
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "space"
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`
export const BlankSpace = styled.nav`
  grid-area : space;
`
export const NavBar = styled.nav`
  border-top: solid 2px #808080;
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
  display: flex;
  align-items: center;
`
export const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`
export const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`
export const  Result = styled.div`
  grid-area: result;
`
export const NavWrapper = styled.div`
  width : 100%;
  display : flex;
`
export const RelatedSearchTitle = styled.div`
  color : white;
  font-weight : 600;
  display : flex;
  align-items: center;
  margin-left : 0.8rem;
  font-size : 1.3rem;
  font-family: lee, sans-serif;
`
export const RelatedSearchWrapper = styled.div`
  display : flex;
  
`
export const RelatedSearchItem = styled.p`
  color : white;
  font-weight : 500;
  cursor : pointer;
  font-size : 0.9rem;
  margin : auto 1rem;
  font-family: diary, sans-serif;
  &:hover, &:active {
    font-weight : 600;
  }
`

export const SearchResultWrapper = styled.p` 
  margin : 1rem 0 0 0.6rem;
`

export const SearchResultCount = styled.p`
  color: #333375;
  display : inline;
  font-weight : 600;
  font-size : 1.1rem;
  margin-left : 0.3rem;
  font-family: cookieregular, sans-serif;
`
export const SearchResultText = styled.p`
  color: #8d8d8d;
  display: inline;
  font-weight: 500;
  font-size: 1rem;
  font-family: lee, sans-serif;


`
export const SideBarWrapper = styled.div`
`
export const SideBarSearchTitle = styled.p`
  font-size : 1.5rem;
  font-weight : 600;
  display : inline-block;
  margin : 1rem 0 0 0.8rem;
  font-family: lee, sans-serif;
`

export const SideBarSearchItem = styled.div`
  margin : 1rem 0 0 1.4rem;
  height : 1.3rem;
  cursor : pointer;
  overflow: auto;
  font-size: 1.3rem;
  font-family: lee, sans-serif;
  &:hover, &:active {
    font-weight : 600;
  }


`

export const SideBarRecommendWrapper = styled.div`

`

export const SideBarRecommendTitle = styled.div`
  margin : 2.5rem 0 0 0.8rem;
  font-size : 1.5rem;
  font-weight : 600;
  font-family: lee, sans-serif;

`

export const SideBarRecommendItem = styled.div`
  margin : 1rem 0 0 1.4rem;
  cursor : pointer;
  font-family: lee, sans-serif;
  font-size: 1.3rem;

  &:hover, &:active, &:active {
   font-weight : 600;
  }

`

export const ViewMoreBtn = styled.button`
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    border : none;
    width : 8rem;
    height : 2.5rem;
    font-size : 1.2rem;
    margin : 2rem auto;
    cursor: pointer;
    position : relative;
  font-family: lee, sans-serif;
    left : 45%;
`


import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg';
import {ReactComponent as HeartIcon} from '../../assets/icons/HeartIcon.svg';
import {ReactComponent as PageIcon} from '../../assets/icons/PageIcon.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/UserIcon.svg';

export const HeaderWrapper = styled.header`
    display : flex;
    position : relative;
    width : 100%;
    background : #b0d0eb;
    align-items: flex-start;
    flex-direction: column;
`
export const TopSection = styled.div`
    display : flex;
`
export const BottomSection = styled.div`
    margin-left : 10px;
`

export const WebTitleWrapper = styled.div`

`
export const WebTitle = styled(Link)`
    display : inline;
    font-size: 2.4rem;
    font-weight: 600;
    color : black;
    margin : 60px 40px;
    cursor: pointer;
    text-decoration : none;
    :hover, :focus {
        color : #525252;
        transition: all ease 0.4s 0s;
    }

`
export const MenuWrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: flex-start;
    margin-top : 1rem;
`

export  const StyledNavLink = styled(NavLink)`
    display : flex;
    margin : -0.5rem 30px 1rem 2rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color : black;
    &:hover, &:focus {
        color : #4a4a4a;
        transition: all ease 0.4s 0s;
    }
    &.active {
        color : #8f8f8f;
        text-decoration-line: line-through;
        text-decoration-style: solid;
        text-decoration-color: #616161;
    }

`

export const SearchWrapper = styled.div`
    position : relative;
    margin : 0.8rem 0 0 0;

`

//styled.SearchInput.attrs({ placeholder: "오늘 가장 끌리는 소리는?", placeholerTextColor : "#737373"})`
export const SearchInput = styled.input`
    border-radius: 20px;
    border : none;
    background : #ededed;
    height : 30px;
    width : 302px;
    padding : 0.2rem 1rem;
    :focus{
        outline : none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

`
export const PersonalWrapper = styled.div`
    justify-content: flex-end;
    display : flex;
    width : 95vw;
    margin-top : -3rem;
    padding : 0.9rem 0;
`

export const StylePersonalLink = styled(NavLink)`
    display : relative;
    float : right;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color : black;
    cursor: pointer;
    margin-left : 1.8rem;
    &:hover, &:focus {
        color : #4a4a4a;
        transition: all ease 0.4s 0s;
    }
    &.active {
        color : #8f8f8f;
        text-decoration-line: line-through;
        text-decoration-style: solid;
        text-decoration-color: #616161;
    }


`
export const IconSection = styled.div`
    display : flex;
    width : 64vw;
    justify-content: flex-end;
    margin-top : 1.2rem;
`
//Icon Style
export const SearchBtn = styled(SearchIcon)`
    cursor: pointer;
    position : absolute;
    margin : 0;
    right : 12px;
    top : 6px;
    width : 6%;
`

export const HeartBtn = styled(HeartIcon)`
    cursor : pointer;
    width : 1.8rem;
    height : 1.8rem;
    margin-right : 2rem;

`

export const PageBtn = styled(PageIcon)`
    cursor : pointer;
    width : 1.8rem;
    height : 1.8rem;
    margin-right : 2rem;


`

export const UserBtn = styled(UserIcon)`
    cursor : pointer;
    width : 1.8rem;
    height : 1.8rem;
    margin-right : 1.5rem;


`
import React, {useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {LoginState} from "../../States/LoginStates";
import {auth} from "../../firebase";
// import axios from 'axios';

import {useNavigate} from 'react-router-dom';
import {
    StyledNavLink,
    HeaderWrapper,
    SearchInput,
    SearchWrapper,
    WebTitleWrapper,
    WebTitle,
    TopSection,
    BottomSection,
    MenuWrapper,
    PersonalWrapper,
    SearchBtn,
    StylePersonalLink,
    IconSection,
    HeartBtn,
    PageBtn,
    UserBtn,
    //SearchForm

} from './styled';
import {Link} from "react-router-dom";

const Header = () => {
    const isLogged = useRecoilValue(LoginState);

    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

    const [search, setSearch] =  useState("");

    const handleAuthentication= () => {
        console.log("signout successfully");
        console.log(isLoggedIn);
       if(isLoggedIn)                                                {
           setIsLoggedIn(false);
           auth.signOut().then(() => console.log("successfully logout"));
       }
    }

    //const navigate = useNavigate();
    const onSearch = e => {
        e.preventDefault();
        if(search === '') { //검색어가 없을 경우 전체 리스트 반환
            // axios.get(common.baseURL + "search")
            //     .then((res) => {
            //         setLists(res.data.userList)
            //         setCurrentPosts(res.data.userList.slice(indexOfFirstPost, indexOfLastPost))
            //     });

            alert("검색어를 입력해주세요");
        } else { //검색 구현
            // const filterData = lists.filter((res) => row.userId.includes(search))
            // setLists(filterData)
            // setCurrentPosts(filterData.slice(indeOfFirstPost, indexOfLastPost))
            // setCurrentPage(1)
            window.location.href = `/search/${search}`;
            // navigate(`/search/${search}`);
        }
        setSearch('');
    }

    const handleChange = e => {
        // e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <HeaderWrapper>
            <TopSection>
                <WebTitleWrapper>
                    <WebTitle to="/">ASMR</WebTitle>
                </WebTitleWrapper>
                <SearchWrapper>
                    <form onSubmit={onSearch}>
                        <SearchInput type={"text"} value={search} placeholder={"오늘 끌리는 소리는?"} onChange={handleChange}/>
                        <Link to ="/search"><SearchBtn type={"submit"} onClick={onSearch}/></Link>
                    </form>
                </SearchWrapper>
                    {isLogged && (
                        <IconSection>
                            <Link to={"/favorite"}><HeartBtn/></Link>
                            <PageBtn/>
                            <Link to={"/mypage"}><UserBtn/></Link>
                        </IconSection>

                    )}

            </TopSection>

            <BottomSection>
                <MenuWrapper>
                    <StyledNavLink to="/category/:word">CATEGORY</StyledNavLink>
                    <StyledNavLink to="/new">NEW</StyledNavLink>
                    <StyledNavLink to="/madeby">MADE BY</StyledNavLink>
                    <StyledNavLink to="/event">EVENT</StyledNavLink>
                </MenuWrapper>
                <PersonalWrapper>
                    <StylePersonalLink to={!isLoggedIn && "/login"} onClick={handleAuthentication}>{ isLoggedIn ? "SIGN OUT" : 'SIGN IN | UP'}</StylePersonalLink>
                </PersonalWrapper>
            </BottomSection>

            {/* <hr></hr> */}

        </HeaderWrapper>
    );
};

export default Header;
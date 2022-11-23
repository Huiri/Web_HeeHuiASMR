import React, {useState} from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginState, UserEmailState, UserNameState } from '../../States/LoginStates';
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
    UserBtn,
    //SearchForm

} from './styled';
import {Link} from "react-router-dom";

const Header = () => {
    const isLogged = useRecoilValue(LoginState);

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const setDisplayName = useSetRecoilState(UserNameState);

    const [search, setSearch] =  useState("");
    const setUserEmail = useSetRecoilState(UserEmailState);
    const handleAuthentication= () => {
        if(isLoggedIn){
            setIsLoggedIn(false);
            auth.signOut().then(() => {
                setDisplayName('');
                setUserEmail('');
            });
        }
    };


    //const navigate = useNavigate();
    const onSearch = e => {
        e.preventDefault();
        if(search === '') { //검색어가 없을 경우 전체 리스트 반환
            alert("검색어를 입력해주세요");
        } else { //검색 구현
            navigate(`/search/${search}`);
        }
        setSearch('');
    };

    const handleChange = e => {
        // e.preventDefault();
        setSearch(e.target.value);
    };

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
                        <Link to={"/mypage"}><UserBtn/></Link>
                    </IconSection>

                )}

            </TopSection>

            <BottomSection>
                <MenuWrapper>
                    <StyledNavLink to="/category/:word">카테고리</StyledNavLink>
                    <StyledNavLink to="/new/:word">최근 업로드</StyledNavLink>
                    <StyledNavLink to="/inquiry">문의사항</StyledNavLink>
                    <StyledNavLink to="/event">이벤트</StyledNavLink>
                </MenuWrapper>
                <PersonalWrapper>
                    <StylePersonalLink to={!isLoggedIn && "/login"} onClick={handleAuthentication}>{ isLoggedIn ? "로그아웃" : '로그인 | 회원가입'}</StylePersonalLink>
                </PersonalWrapper>
            </BottomSection>

            {/* <hr></hr> */}

        </HeaderWrapper>
    );
};

export default Header;
import React from 'react';
import { useRecoilState } from 'recoil';
import {LoginState} from "../../States/LoginStates";
import {auth} from "../../firebase";
import {InputWrapper,
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
    PersonBtn,
    UserBtn

} from './styled';
import Login from "../../pages/Login";
import {signInWithEmailAndPassword} from "firebase/auth";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

    const handleAuthentication= () => {
        console.log("signout successfully");
        console.log(isLoggedIn);
       if(isLoggedIn) {
           setIsLoggedIn(false);
           auth.signOut();
       }
    }
    return (
        <HeaderWrapper>
            <TopSection>
                <WebTitleWrapper>
                    <WebTitle to="/">ASMR</WebTitle>
                </WebTitleWrapper>
                <SearchWrapper>
                    <SearchInput/>
                    <SearchBtn/>
                </SearchWrapper>
                <IconSection>
                    <HeartBtn/>
                    <PageBtn/>
                    <UserBtn/>
                </IconSection>
                {/* <LoginWrapper>
                    <StyledNavLink to="/login">LOGIN</StyledNavLink>
                </LoginWrapper> */}

            </TopSection>
            {/* <hr/> */}

            <BottomSection>
                <MenuWrapper>
                    <StyledNavLink to="/category">CATEGORY</StyledNavLink>
                    <StyledNavLink to="/new">NEW</StyledNavLink>
                    <StyledNavLink to="/madeby">MADE BY</StyledNavLink>
                    <StyledNavLink to="/special">SPECIAL</StyledNavLink>
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
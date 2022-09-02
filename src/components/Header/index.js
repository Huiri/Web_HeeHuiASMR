import React from 'react';
import { useRecoilState } from 'recoil';
import {LoginState} from "../../States/LoginStates";
import {auth} from "../../firebase";
import {    StyledNavLink,
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
    UserBtn

} from './styled';
import {Link} from "react-router-dom";

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
                    <Link to ="/search"><SearchBtn /></Link>
                </SearchWrapper>
                <IconSection>
                    <HeartBtn/>
                    <PageBtn/>
                    <UserBtn/>
                </IconSection>

            </TopSection>

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
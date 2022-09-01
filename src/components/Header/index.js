import React from 'react';
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
    
const Header = () => {
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
                    <StylePersonalLink to="/login">SIGN IN</StylePersonalLink>
                    <StylePersonalLink to="/signup">SIGN UP</StylePersonalLink>
                    <StylePersonalLink to="/login">SERVICE</StylePersonalLink>
                </PersonalWrapper>
            </BottomSection>

            {/* <hr></hr> */}

        </HeaderWrapper>
    );
};

export default Header;
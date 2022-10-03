import React, {useEffect} from 'react';
import {SideBarSearchItem, SideBarSearchTitle, SideBarWrapper, Main, SideBar} from "../SearchResult/styled";
import { getAuth, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import {LayoutContainer,
    PrivacyWrapper,
    PrivacyTitle,
    PrivacyItem,
    PrivactSub,
    PrivacyDelete,
    PassWordChangeEmail,
} from './styled';
import {useRecoilState} from "recoil";
import {LoginState} from "../../States/LoginStates";
import {useNavigate} from "react-router-dom";

const MyPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const navigate = useNavigate();

    const auth = getAuth();
    const user = auth.currentUser;
    /*
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user?.photoURL;
        const emailVerified = user.emailVerified;

        console.log(displayName, email, photoURL);
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;

        
    }


     */
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const email = user?.email;


    //비밀번호 변경 이메일 전송
    const sendChangePasswordEmail = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });

    }

    //비밀번호 변경
    // const changePassword = () => {
    //     //const newPassword = getASecureRandomPassword();
    //
    //     // updatePassword(user, newPassword).then(() => {
    //     //     // Update successful.
    //     // }).catch((error) => {
    //     //     // An error ocurred
    //     //     // ...
    //     // });
    //
    // }

    //비밀번호 재설정 이메일 전송

    //회원 탈퇴
    const deleteAccount = () => {
        deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });

    }

    useEffect(()=> {
        if(isLoggedIn === false){
            navigate('/', {replace:true})
        }
    },[isLoggedIn])
    return (

        <LayoutContainer>
            <Main>
                <PrivacyWrapper>
                    <PrivacyTitle>개인정보 확인 및 변경</PrivacyTitle>
                    <PrivactSub>등록된 정보</PrivactSub>
                    <PrivacyItem>이름 : {name ? name : "X"}</PrivacyItem>
                    <PrivacyItem>이메일 : {email ? email : "X"}</PrivacyItem>
                    <PrivacyItem>사진 : {photoURL ? photoURL : "X"}</PrivacyItem>
                    <PrivactSub>비밀번호 변경</PrivactSub>
                    <PassWordChangeEmail onClick={sendChangePasswordEmail}>비밀번호 재설정 이메일 전송</PassWordChangeEmail>
                    <PrivacyDelete onClick={deleteAccount}>회원 탈퇴하기</PrivacyDelete>

                </PrivacyWrapper>

            </Main>
            <SideBar>
                <SideBarWrapper>
                    <SideBarSearchTitle>마이 페이지</SideBarSearchTitle>
                    <SideBarSearchItem>내 정보 관리</SideBarSearchItem>
                    <SideBarSearchItem>내가 쓴 댓글</SideBarSearchItem>
                    <SideBarSearchItem>좋아요 한 동영상</SideBarSearchItem>
                    <SideBarSearchItem>내가 만든 영상</SideBarSearchItem>

                </SideBarWrapper>
            </SideBar>
        </LayoutContainer>

    );
};

export default MyPage;
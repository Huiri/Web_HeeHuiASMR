import React, { useEffect, useState } from 'react';

import {SideBarSearchItem, SideBarSearchTitle, SideBarWrapper, Main, SideBar} from "../SearchResult/styled";
import { getAuth, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import {LayoutContainer,
    PrivacyWrapper,
    PrivacyTitle,
    PrivacyItem,
    PrivactSub,
    PrivacyDelete,
    PassWordChangeEmail,
    PrivateImg,
    UserImg,
    PrivateWrapper,
    ItemWrapper
} from './styled';
import {useRecoilValue} from "recoil";
import {LoginState, UserNameState, UserEmailState} from "../../States/LoginStates";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LikedVideoCard from '../../components/common/LikedVideoCard';
import CommentList from '../../components/Comment/CommentList';

const MyPage = () => {
    const isLoggedIn = useRecoilValue(LoginState);
    const displayName = useRecoilValue(UserNameState);
    const userEmail = useRecoilValue(UserEmailState);
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

    };

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

    const [param, setParam] = useState('info');
    //비밀번호 재설정 이메일 전송

    //회원 탈퇴
    const deleteAccount = () => {
        deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });

    };
    let isEmailLogined = displayName === userEmail.split('@')[0];

    let photo = photoURL ? photoURL : null;
    useEffect(()=> {
        if(isLoggedIn === false){
            navigate('/', {replace:true});
        }
    },[isLoggedIn]);
    let show;
    if(param === 'info'){
        show = (
            <PrivacyWrapper>
                <PrivacyTitle>개인정보 확인 및 변경</PrivacyTitle>
                <PrivactSub>등록된 정보</PrivactSub>
                <PrivateWrapper>
                    {photo ? (
                        <PrivateImg src={photo}/>
                    ):(
                        <UserImg/>
                    )}
                    <ItemWrapper>
                        <PrivacyItem>이름 : {displayName ? displayName : "X"}</PrivacyItem>
                        <PrivacyItem>이메일 : {email ? email : "X"}</PrivacyItem>

                    </ItemWrapper>

                </PrivateWrapper>
                {isEmailLogined ?
                    (
                        <>
                            <PrivactSub>비밀번호 변경</PrivactSub>
                            <PassWordChangeEmail onClick={sendChangePasswordEmail}>비밀번호 재설정 이메일 전송</PassWordChangeEmail>
                        </>

                    )
                    :
                    null
                }
                <div>
                    <PrivacyDelete onClick={deleteAccount}>회원 탈퇴하기</PrivacyDelete>

                </div>

            </PrivacyWrapper>

        );
    } else if(param === 'likedvideo'){
        show = (
            <PrivacyWrapper>

                <PrivacyTitle>좋아요한 동영상</PrivacyTitle>
                <LikedVideoCard/>
                <LikedVideoCard/>
                <LikedVideoCard/>

            </PrivacyWrapper>
        );

    } else if(param === 'mycomment'){
        show = (
            <PrivacyWrapper>
                <PrivacyTitle>작성한 댓글</PrivacyTitle>

                <CommentList/>

            </PrivacyWrapper>
        );
    }
    return (

        <LayoutContainer>
            <Main>
                {show}
            </Main>
            <SideBar>
                <SideBarWrapper>
                    <SideBarSearchTitle>마이 페이지</SideBarSearchTitle>
                    <SideBarSearchItem onClick={()=>setParam("info")}>내 정보 관리</SideBarSearchItem>
                    <SideBarSearchItem onClick={()=>setParam("mycomment")}>내가 쓴 댓글</SideBarSearchItem>
                    <SideBarSearchItem onClick={()=>setParam("likedvideo")}>좋아요 한 동영상</SideBarSearchItem>

                </SideBarWrapper>
            </SideBar>
        </LayoutContainer>

    );
};

export default MyPage;
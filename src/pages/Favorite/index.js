import React,{useEffect} from 'react';
import {LayoutContainer, LikedTitle} from "./styled";

import {Main,
    SideBar} from "../SearchResult/styled";
import LikedVideoCard from "../../components/common/LikedVideoCard";
import {useRecoilValue} from "recoil";
import {LoginState} from "../../States/LoginStates";
import {useNavigate} from "react-router-dom";


const Favorite = () => {
    const isLoggedIn = useRecoilValue(LoginState);
    const navigate = useNavigate();

    useEffect(()=> {
        if(isLoggedIn === false){
            navigate('/', {replace:true});
        }
    },[isLoggedIn]);

    return (
        <LayoutContainer>
            <LikedTitle>좋아요 표시한 동영상</LikedTitle>

            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
        </LayoutContainer>
    );
};

export default Favorite;
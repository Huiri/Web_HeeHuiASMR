import React,{useEffect} from 'react';
import {LayoutContainer} from "../MyPage/styled"

import {Main,
    SideBar} from "../SearchResult/styled";
import LikedVideoCard from "../../components/common/LikedVideoCard";
import {useRecoilState} from "recoil";
import {LoginState} from "../../States/LoginStates";
import {useNavigate} from "react-router-dom";


const Favorite = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const navigate = useNavigate();

    useEffect(()=> {
        if(isLoggedIn === false){
            navigate('/', {replace:true})
        }
    },[isLoggedIn])

    return (
        <LayoutContainer>
            <Main>

                <LikedVideoCard/>
                <LikedVideoCard/>
                <LikedVideoCard/>
            </Main>
            <SideBar>

            </SideBar>

        </LayoutContainer>
    );
};

export default Favorite;
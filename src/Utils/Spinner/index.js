import React from 'react';
import Spinner from '../../assets/icons/spinner.svg';
import {Background, LoadingText} from "./styled";

export const Loading = () => {
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    )
};

export default Loading;

import React, {useEffect} from 'react';
import Spinner from '../../assets/icons/spinner.svg';
import {Background, LoadingText} from "./styled";

export const Loading = () => {
    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: ""; top: "";`;
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        };
    }, []);
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
    );
};

export default Loading;

import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    justify-content:center;
    font-weight: 600;
    width : 100vw;
    height : 72vh;
    display : flex;
    flex-direction: column;
    align-items: center;
    background : #aec1d4;
`
const ErrorTitle = styled.h1`
    font-size: 4rem;
    margin : 0;
`

const ErrorText = styled.p`
    font-size : 3rem;
    margin : 0;

`
const NotFound = () => {
    return (
        <ErrorWrapper>
            <ErrorTitle>404 Error</ErrorTitle>
            <ErrorText>This page is not exist</ErrorText>
        </ErrorWrapper>
    );
};

export default NotFound;
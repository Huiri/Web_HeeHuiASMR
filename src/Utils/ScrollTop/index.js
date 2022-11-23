import React from 'react';
import scrollToTop from './handleScroll';
import { BtnWrapper, Icon, TopBtn } from './styled';


const ScrollTop = () => {

    return (
        <BtnWrapper>
            <TopBtn id="top" onClick={scrollToTop} type="button" > <Icon/></TopBtn>
        </BtnWrapper>
    );
};

export default ScrollTop;
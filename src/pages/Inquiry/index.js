import React, {useRef} from 'react';
import { InquiryWrapper, LayoutContainer, InquiryInput, InputIcon, InquiryForm, InquiryText, TextWrapper, InquiryTitle } from './styled';
import { PromotionTitle} from "../Category/styled";

const Inquiry = () => {
    const textarea = useRef(null);
    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };
    return (
        <LayoutContainer>
            <PromotionTitle>문의사항</PromotionTitle>
            <InquiryTitle>불편 및 건의사항을 적어주세요!</InquiryTitle>
            <InquiryWrapper>
                <InquiryForm>
                    <InquiryInput type='text'/>

                    <InputIcon/>
                </InquiryForm>

            </InquiryWrapper>
            <TextWrapper>

                <InquiryText>작성된 내용은 개발자에게 전달됩니다!</InquiryText>
                <InquiryText>많은 관심과 응원 부탁드립니다!</InquiryText>

            </TextWrapper>

        </LayoutContainer>
    );
};

export default Inquiry;
import React, { useEffect, useRef, useState } from 'react';
import {
    Label,
    InquiryWrapper,
    LayoutContainer,
    InquiryInput,
    SubmitBtn,
    InquiryForm,
    InquiryText,
    TextWrapper,
    InquiryTitle,
    Input,
    InputWrapper
} from './styled';
import { PromotionTitle} from "../Category/styled";
import emailjs from '@emailjs/browser';
import { init } from 'emailjs-com';
import {  useRecoilValue } from 'recoil';
import { LoginState, UserEmailState, UserNameState } from '../../States/LoginStates';


const Inquiry = () => {
    const isLogged = useRecoilValue(LoginState);

    const [emailText, setEmailText] = useState('');
    const displayName = useRecoilValue(UserNameState);
    const userEmail = useRecoilValue(UserEmailState);

    const textarea = useRef(null);

    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };
    useEffect(() => {
        init('sa5wx5sa7WVqn7itv');
    }, []);
    const [user_name, setUser_Name] = useState(displayName);
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aq6ngyv', 'template_hu5qil3', form.current, 'sa5wx5sa7WVqn7itv')
            .then((result) => {
                setMessage('');
                if(isLogged !== true){
                    setUser_Name('');
                }
                alert('개발자에게 전송되었습니다! 오늘도 행복한 하루 되세요!');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <LayoutContainer>
            <PromotionTitle>문의사항</PromotionTitle>
            <InquiryTitle>불편 및 건의사항을 적어주세요!</InquiryTitle>
            <InquiryWrapper>
                <InquiryForm ref={form} onSubmit={sendEmail}>
                    <InputWrapper>
                        <Label>Name</Label>
                        <Input type="text" name="user_name" onChange={e=> {setUser_Name(e.target.value);}} value={user_name}/>
                    </InputWrapper>
                    {/*
                    <InputWrapper>

                        <Label>Email</Label>
                        <Input type="email" name="user_email" onChange={e=> {setSearch(e.target.value)}} value={isLogged ? userEmail : null} />
                    </InputWrapper>
                    */}
                    <InputWrapper>
                        <Label>Message</Label>
                        <InquiryInput onChange={(e)=>{setMessage(e.target.value);}} row={1} name="message" value={message} />

                    </InputWrapper>
                    <SubmitBtn type="submit" value="메일 보내기"  />
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
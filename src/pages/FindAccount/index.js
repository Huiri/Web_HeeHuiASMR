import React, {useState} from 'react';
import {
    FindContainer,
    LayoutContainer,
    FindTitle,
    FindWrapper,
    StyledLink,
    FindSthContainer,
    FindSubTitle,
} from "./styled";
import {db} from '../../firebase';

import {Button, RegisterForm, RegisterInput} from "../SignUp/styled";
import { collection, getDocs } from "firebase/firestore";

const FindAccount = () => {

    const [findsth, setFindSth] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const findPassword = () => {

    };
    const findEmail = () => {

    };
    return(
        <LayoutContainer>
            <FindWrapper>
                <FindTitle>
                    <StyledLink onClick={()=>setFindSth(true)}>아이디</StyledLink> &nbsp;|&nbsp;
                    <StyledLink onClick={()=>setFindSth(false)}>비밀번호</StyledLink>&nbsp;찾기
                </FindTitle>
                <FindContainer>

                    {findsth ?
                        <FindSthContainer>
                            <RegisterForm>
                                <FindSubTitle>아이디 찾기</FindSubTitle>
                                <RegisterInput placeholder="이름" value={name} onChange={e=>setName(e.target.value)} type ="text"/>
                                <RegisterInput placeholder="번호 ex.01011112222" value={number} onChange={e=>setNumber(e.target.value)} type ="tel"/>
                                <Button onClick={()=>findEmail}>아이디 찾기</Button>
                                {/* <Button onClick={loginAccount}>Google</Button  > */}
                            </RegisterForm>

                        </FindSthContainer>
                        :
                        <FindSthContainer>
                            <RegisterForm>
                                <FindSubTitle>비밀번호 찾기</FindSubTitle>

                                <RegisterInput placeholder="이름" value={name} onChange={e=>setName(e.target.value)} type ="text"/>
                                <RegisterInput placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)} type = "email" />
                                <RegisterInput placeholder="번호 ex.01011112222" value={number} onChange={e=>setNumber(e.target.value)} type ="tel"/>
                                <Button onClick={findPassword}>비밀번호 찾기</Button>
                                {/* <Button onClick={loginAccount}>Google</Button  > */}
                            </RegisterForm>

                        </FindSthContainer>

                    }


                </FindContainer>

            </FindWrapper>
        </LayoutContainer>
    );
};

export default FindAccount;
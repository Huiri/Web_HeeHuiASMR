import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../../firebase';
import UserDataService from "../../api/firestore/user";

import {Button,
    RegisterForm, 
    RegisterInput, 
    RegisterDiv,
    RegisterTitle,
    RegisterContainer,
    RegisterWrapper
} from './styled';

const SignUp = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const register = e => {
        e.preventDefault();
        //if(email !== "" && password !=="" && name !=="" && number !== ""){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    history('/login', {replace: true});
                }
            })
            .catch((error) => {
                if(error.message === "Firebase: Error (auth/email-already-in-use)"){
                    alert("존재하는 이메일입니다.");
                } else if(error.message === "Firebase: Error (auth/missing-email)."){
                    alert("이메일을 작성해주세요.");
                } else if(error.message === "Firebase: Error (auth/invalid-email)."){
                    alert("이메일 양식이 부합하지 않습니다.");
                } else if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                    alert("비밀번호를 6자리 이상으로 설정해주세요.");
                } else if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    alert("이미 존재하는 이메일 정보입니다.");
                }
                console.warn(error.message);
            });
        //}else if(name === ""){
        //    alert("이름을 입력해주세요.")
        //}else if(number.length !== 11){
        //    console.log(number.length)
        //    alert("번호가 올바르지 않습니다. ex.01012341234")
        //}
    };

    const addAccount = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password,
            name,
            number
        };
        try {
            await UserDataService.addUser(newUser);
        }catch(err){
            console.log(err.message);
        }

    };

    return (
        <RegisterDiv className="signUp">
            <RegisterWrapper>
                <RegisterTitle>WELCOME</RegisterTitle>

                <RegisterContainer className='login_container'>
                    <RegisterForm onSubmit={()=>addAccount}>
                        <RegisterInput placeholder="이름(필수X)" value={name} onChange={e=>setName(e.target.value)} type ="text"/>
                        <RegisterInput placeholder="이메일(필수)" value={email} onChange={e=>setEmail(e.target.value)} type = "email" />
                        <RegisterInput placeholder="비밀번호(필수)" autoComplete="off" value={password} onChange={e=>setPassword(e.target.value)} type ="password"/>
                        <RegisterInput placeholder="번호(필수X) ex.01011111111" maxlength='11' value={number} onChange={e=>setNumber(e.target.value)} type = "tel" />

                        <Button onClick={register} className="login_registerButton">Register</Button>
                        {/* <Button onClick={loginAccount}>Google</Button  > */}
                    </RegisterForm>
                </RegisterContainer>

            </RegisterWrapper>

        </RegisterDiv>
    );
};

export default SignUp;
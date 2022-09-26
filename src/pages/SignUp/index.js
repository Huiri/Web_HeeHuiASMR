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
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if (userCredential) {
                history('/login', {replace: true});
            }
        })
        .catch((error) => {
            if(error.message === "Firebase: Error (auth/email-already-in-use)"){
                alert("존재하는 이메일입니다.")
            } else if(error.message === "Firebase: Error (auth/missing-email)."){
                alert("이메일을 작성해주세요.")
            } else if(error.message === "Firebase: Error (auth/invalid-email)."){
                alert("이메일 양식이 부합하지 않습니다.")
            } else if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                alert("비밀번호를 6자리 이상으로 설정해주세요.")
            }
            console.warn(error.message);
        });
    }

    const addAccount = async () => {
       const newUser = {
           email,
           password,
           name,
       }
       try {
           await UserDataService.addUser(newUser);

       }catch(err){
           console.log(err.message);
       }

    }

    return (
        <RegisterDiv className="signUp">
            <RegisterWrapper>
            <RegisterTitle>WELCOME</RegisterTitle>

            <RegisterContainer className='login_container'>
                <RegisterForm>
                    <RegisterInput placeholder="이름" value={name} onChange={e=>setName(e.target.value)} type ="text"/>
                    <RegisterInput placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)} type = "email" />
                    <RegisterInput placeholder="비밀번호" autoComplete="off" value={password} onChange={e=>setPassword(e.target.value)} type ="password"/>
                    <Button onClick={()=>{register(); addAccount().then(r => console.log("ss"))}} className="login_registerButton">Register</Button>
                    {/* <Button onClick={loginAccount}>Google</Button  > */}
                </RegisterForm>
            </RegisterContainer>

            </RegisterWrapper>

        </RegisterDiv>
    );
};

export default SignUp;